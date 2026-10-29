# Arquitetura — Judo Casa (MVP)

**Status:** stack travada — 2026-10-29  
**Spec:** [requisitos/epico-00-visao.md](./requisitos/epico-00-visao.md)

## Decisão de stack

| Camada | Tecnologia | Por quê |
|--------|------------|---------|
| App (iOS / Android / web) | **Expo (React Native) + Expo Router + TypeScript** | Mobile-first; um código; UI moderna; QR/câmera nativos |
| Backend / dados | **Supabase** (Auth + PostgreSQL + Storage + RLS) | Auth rápido, SQL real, alinhado ao `diario-judo`; MVP social sem ops pesada |
| UI | React Native + tema CAP (`#FF0D19` / `#56595B`) | Marca travada |
| Validação | Zod | Contratos compartilhados |
| Deploy app | EAS (stores) + Expo web / hosting a definir | |
| Deploy dados | Projeto Supabase dedicado `judo-casa` | Separado do ICHTHUS e do diario-judo |

### Alternativas descartadas (MVP)

| Opção | Motivo de não usar agora |
|-------|---------------------------|
| Spring Boot + Ionic (estilo ICHTHUS) | Produto separado; mais tempo até 1ª tela mobile |
| Flutter | Time/contexto TS+Expo já no kit e refs |
| Fork AGPL (Obikai etc.) | Licença + não é nosso código |

Spring Boot pode entrar **depois** se a API precisar sair do Supabase; não é pré-requisito do MVP.

## Visão em caixas

```text
[Expo App] ──Auth/JWT──► [Supabase Auth]
     │                         │
     ├── PostgREST/RPC ──────► [PostgreSQL + RLS]
     └── Storage (opcional) ─► [fotos / anexos futuros]
```

## Papéis ↔ RLS (ideia)

- `admin` — políticas amplas
- `sensei` — turmas vinculadas
- `aluno` — próprios dados
- `responsavel` — filhos vinculados (`aluno_responsavel`)

## Ordem de entrega técnica

1. Scaffold Expo + Supabase + tema CAP  
2. E1 Auth/perfis  
3. E2 → E8 conforme [requisitos/README.md](./requisitos/README.md)

## Plano de implementação

Ver [superpowers/plans/2026-10-29-judo-casa-fundacao.md](./superpowers/plans/2026-10-29-judo-casa-fundacao.md).
