-- Vínculo aluno ↔ responsável (HU-003)
create table public.aluno_responsavel (
  id uuid primary key default gen_random_uuid(),
  aluno_id uuid not null references public.profiles (id) on delete cascade,
  responsavel_id uuid not null references public.profiles (id) on delete cascade,
  status text not null default 'aprovado' check (status in ('pendente', 'aprovado', 'revogado')),
  codigo_convite text,
  created_at timestamptz not null default now(),
  unique (aluno_id, responsavel_id)
);

create index aluno_responsavel_resp_idx on public.aluno_responsavel (responsavel_id);
create index aluno_responsavel_aluno_idx on public.aluno_responsavel (aluno_id);

-- Código curto no aluno para vínculo
alter table public.profiles
  add column if not exists codigo_vinculo text unique;

create or replace function public.ensure_codigo_vinculo()
returns trigger
language plpgsql
as $$
begin
  if new.papel = 'aluno' and (new.codigo_vinculo is null or new.codigo_vinculo = '') then
    new.codigo_vinculo := upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
  end if;
  return new;
end;
$$;

create trigger profiles_codigo_vinculo
before insert or update on public.profiles
for each row execute function public.ensure_codigo_vinculo();

alter table public.aluno_responsavel enable row level security;

create or replace function public.is_linked_responsavel(target_aluno uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.aluno_responsavel ar
    where ar.aluno_id = target_aluno
      and ar.responsavel_id = auth.uid()
      and ar.status = 'aprovado'
  );
$$;

create policy "ar_select"
on public.aluno_responsavel for select
using (
  auth.uid() = aluno_id
  or auth.uid() = responsavel_id
  or public.is_admin()
);

create policy "ar_insert"
on public.aluno_responsavel for insert
with check (
  auth.uid() = responsavel_id
  or public.is_admin()
);

create policy "ar_update"
on public.aluno_responsavel for update
using (auth.uid() = responsavel_id or auth.uid() = aluno_id or public.is_admin());

-- Responsável lê profile dos filhos vinculados
create policy "profiles_select_linked_filho"
on public.profiles for select
using (public.is_linked_responsavel(id));
