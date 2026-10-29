# Judo Casa — Fundação + Auth (E1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Subir o app Expo com tema CAP, projeto Supabase e login/cadastro com perfis (base do Épico 01).

**Architecture:** Cliente Expo (Router) fala com Supabase Auth + Postgres. Perfis em `profiles` com enum de papel; RLS por papel. Sem backend Java no MVP.

**Tech Stack:** Expo SDK recente, Expo Router, TypeScript, Supabase JS, Zod, React Native.

**Spec:** [docs/requisitos/epico-00-visao.md](../../requisitos/epico-00-visao.md), [epico-01-usuarios-perfis.md](../../requisitos/epico-01-usuarios-perfis.md), [docs/arquitetura.md](../../arquitetura.md), [docs/marca.md](../../marca.md)

## Global Constraints

- Idioma UI: pt-BR
- Cores: primária `#FF0D19`, neutro `#56595B`, fundo `#FFFFFF`
- Sem pagamento / mensalidade
- Repo independente do ICHTHUS
- Segredos só em `.env` / EAS secrets — nunca commitados

## Review Focus

- RLS: responsável não vaza dados de outros alunos
- Auth: inativo não entra
- Tema CAP aplicado de verdade (não cinza genérico)
- Tipos TS alinhados às tabelas

## File map (alvo)

```
apps/mobile/          # ou raiz do Expo se monorepo simples
  app/                # Expo Router
  src/theme/
  src/lib/supabase.ts
supabase/
  migrations/
  seed.sql
docs/...
```

---

### Task 1: Scaffold Expo + tema CAP

**Files:**
- Create: estrutura Expo Router na raiz do repo (ou `apps/mobile`)
- Create: `src/theme/colors.ts`, `src/theme/index.ts`
- Create: `.env.example`
- Modify: `README.md` (como rodar)

- [ ] **Step 1:** `npx create-expo-app@latest` (template tabs/router) no repo sem sobrescrever `docs/`
- [ ] **Step 2:** Adicionar `src/theme/colors.ts` com hex CAP
- [ ] **Step 3:** Tela splash/home placeholder com vermelho/cinza
- [ ] **Step 4:** Commit `chore: scaffold Expo + tema CAP`

---

### Task 2: Projeto Supabase + migration profiles

**Files:**
- Create: `supabase/config.toml` (se CLI)
- Create: `supabase/migrations/20261029_001_profiles.sql`
- Create: `src/lib/supabase.ts`

- [ ] **Step 1:** Criar projeto Supabase `judo-casa` (CLI ou dashboard)
- [ ] **Step 2:** Migration: `profiles` (id uuid FK auth.users, nome, papel enum, ativo bool, created_at)
- [ ] **Step 3:** Trigger: novo user → row em profiles (papel default `aluno`)
- [ ] **Step 4:** RLS: user lê/atualiza próprio profile; admin lê todos
- [ ] **Step 5:** Client Supabase com env `EXPO_PUBLIC_SUPABASE_URL` + `ANON_KEY`
- [ ] **Step 6:** Commit `feat: supabase profiles + client`

---

### Task 3: Login e cadastro (HU-001, HU-002)

**Files:**
- Create: `app/(auth)/login.tsx`, `app/(auth)/cadastro.tsx`
- Create: `src/features/auth/*`

- [ ] **Step 1:** Tela login e-mail/senha (Zod)
- [ ] **Step 2:** Tela cadastro aluno (nome, e-mail, senha, nascimento)
- [ ] **Step 3:** Sessão persiste; redirect autenticado → home
- [ ] **Step 4:** Erro genérico em credencial inválida
- [ ] **Step 5:** Commit `feat: auth login e cadastro aluno`

---

### Task 4: Perfis Admin e gate inativo (HU-004 parcial, RN-01)

**Files:**
- Create: seed admin
- Create: guard de navegação por `ativo` + `papel`

- [ ] **Step 1:** Seed/manual: 1 admin
- [ ] **Step 2:** Se `ativo = false`, signOut + mensagem
- [ ] **Step 3:** Home mostra nome + papel
- [ ] **Step 4:** Commit `feat: gate ativo e home por perfil`

---

### Task 5: Vínculo responsável (HU-003) — mínimo

**Files:**
- Create: migration `aluno_responsavel`
- Create: fluxo convite código OU aprovação admin (escolher o mais simples: código de 6 dígitos)

- [ ] **Step 1:** Tabela vínculo + RLS
- [ ] **Step 2:** Responsável informa código do aluno; cria vínculo pendente/aprovado
- [ ] **Step 3:** Commit `feat: vinculo aluno-responsavel`

---

## Done quando

- App sobe no Expo Go
- Login/cadastro funcionam contra Supabase
- Profile com papel; inativo bloqueado
- Cores CAP visíveis na auth/home

## Depois deste plano

E2 curricular → seguir épicos na ordem do README de requisitos.
