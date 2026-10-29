-- Judo Casa — profiles + papéis (Épico 01)
create extension if not exists "pgcrypto";

create type public.papel as enum ('admin', 'sensei', 'aluno', 'responsavel');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nome text not null default '',
  papel public.papel not null default 'aluno',
  ativo boolean not null default true,
  data_nascimento date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_papel_idx on public.profiles (papel);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Novo usuário → profile aluno
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, nome, papel)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nome', split_part(new.email, '@', 1), ''),
    coalesce((new.raw_user_meta_data->>'papel')::public.papel, 'aluno')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.papel = 'admin' and p.ativo = true
  );
$$;

create policy "profiles_select_own_or_admin"
on public.profiles for select
using (auth.uid() = id or public.is_admin());

create policy "profiles_update_own_or_admin"
on public.profiles for update
using (auth.uid() = id or public.is_admin())
with check (auth.uid() = id or public.is_admin());

create policy "profiles_insert_own"
on public.profiles for insert
with check (auth.uid() = id or public.is_admin());
