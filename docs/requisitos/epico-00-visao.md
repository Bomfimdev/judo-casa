# Épico 00 — Visão do produto (travada)

**Status:** Aprovado — 2026-10-29  
**Produto:** Judo Casa  
**Local:** Instituto Casa Oficial / Casa de Adoração Profética — Samambaia (Brasília/DF)

## Problema

O dojo social precisa operar turmas, presença, comunicação com responsáveis, progressão de faixa e inscrição em campeonatos **sem** cobrança de mensalidade.

## Solução

App web + mobile (iOS/Android) com perfis Admin, Sensei, Aluno e Responsável.

## Atores

| Perfil | Papel |
|--------|--------|
| Admin/Coordenação | Usuários, turmas/agenda, currículo, comunicados, campeonatos, lista de inscritos |
| Sensei | Aula, presença, avaliação, progressão/exame |
| Aluno | Home, agenda, check-in, progressão, comunicados, inscrição em campeonato |
| Responsável | Acesso equivalente ao do(s) filho(s) |

## MVP (dentro)

1. Usuários e perfis (+ vínculo aluno ↔ responsável)
2. Estrutura curricular (faixas, técnicas, exames por faixa)
3. Turmas / agenda
4. Aula + presença (check-in + confirmação sensei)
5. Avaliação por técnica
6. Progressão e graduação (Sensei decide — nunca automático)
7. Dashboard + comunicados
8. Campeonato: listar, inscrever, marcar inscrito (**sem pagamento**)

## Fora do MVP

- Mensalidade / qualquer financeiro
- Pagamento de inscrição em campeonato (fase futura)
- Diário pessoal de treino/alimentação (`diario-judo`)
- Código compartilhado com ICHTHUS (só referência de assunto)

## Relação com ICHTHUS

Produtos e repositórios **separados**. ICHTHUS não é alterado. Judo Casa reusa o *mapa mental* (aluno, turma, faixa…), não o repositório.

## Marca

Ver [docs/marca.md](../marca.md) — vermelho `#FF0D19` + cinza `#56595B`.

## Sucesso do MVP

Sensei registra aula e presença no celular; responsável vê aviso e próxima aula; aluno se inscreve em campeonato; sensei vê quem está inscrito; progressão de faixa fica rastreável até o exame.
