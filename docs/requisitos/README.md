# Requisitos — Judo Casa MVP

Contrato funcional travado em 2026-10-29. Ver [epico-00-visao.md](./epico-00-visao.md).

## Convenções

| Campo | Significado |
|-------|-------------|
| **Must** | Obrigatório no MVP |
| **Should** | Desejável; pode escorregar se prazo apertar |
| **CA** | Critério de aceite testável |

## Ordem de implementação

```
E1 Usuários → E2 Curricular → E3 Turmas/Agenda → E4 Presença
     → E5 Avaliação → E6 Graduação → E7 Dashboard/Comunicados → E8 Campeonato
```

## Índice

| Arquivo | Escopo |
|---------|--------|
| [epico-00-visao.md](./epico-00-visao.md) | Visão |
| [epico-01-usuarios-perfis.md](./epico-01-usuarios-perfis.md) | Usuários, perfis, responsável |
| [epico-02-estrutura-curricular.md](./epico-02-estrutura-curricular.md) | Faixas, técnicas, exames |
| [epico-03-turmas-agenda.md](./epico-03-turmas-agenda.md) | Turmas e agenda |
| [epico-04-aula-presenca.md](./epico-04-aula-presenca.md) | Aula e presença |
| [epico-05-avaliacao.md](./epico-05-avaliacao.md) | Avaliação |
| [epico-06-graduacao.md](./epico-06-graduacao.md) | Progressão / exame |
| [epico-07-dashboard-comunicados.md](./epico-07-dashboard-comunicados.md) | Home e comunicados |
| [epico-08-campeonato.md](./epico-08-campeonato.md) | Inscrição / marcação |

## Regras globais (RN)

| ID | Regra |
|----|-------|
| RN-01 | Usuário inativo não autentica |
| RN-02 | Idioma v1: português (Brasil) |
| RN-03 | Check-in ≠ presença confirmada (Sensei confirma) |
| RN-04 | Promoção de faixa **nunca** é automática |
| RN-05 | Responsável só vê dados dos filhos vinculados |
| RN-06 | Sem cobrança no MVP (nem mensalidade, nem taxa de campeonato) |
| RN-07 | Produto independente do ICHTHUS |

## Fora de escopo (todas as HUs)

Pagamento, multi-academia SaaS, diário pessoal, push nativo (Should futuro), geolocalização.
