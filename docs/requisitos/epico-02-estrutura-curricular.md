# Épico 02 — Estrutura curricular

**Prioridade:** Must  
**Dependências:** E1

## Visão

Catálogo configurável de faixas, graus/pontas, técnicas e requisitos de exame por faixa (Admin).

## HUs

### HU-010 — CRUD de faixas
Como Admin, quero cadastrar faixas (infantil/adulto) e ordem, para espelhar a grade do dojo.  
**Must**  
1. CA-010.1: Faixa tem nome, ordem, categoria (infantil/adulto).  
2. CA-010.2: Ordem define progressão.

### HU-011 — Catálogo de técnicas
Como Admin, quero cadastrar técnicas (ex. Gokyo / Katame), para usar em aula e exame.  
**Must**  
1. CA-011.1: Técnica tem nome, grupo/categoria, ativo/inativo.

### HU-012 — Requisitos por faixa
Como Admin, quero definir checklist de técnicas e critérios (presença mínima, tempo) por faixa, para o exame.  
**Must**  
1. CA-012.1: Cada faixa tem lista de técnicas exigidas.  
2. CA-012.2: Critérios extras configuráveis (ex. % presença).

### HU-013 — Exames separados por faixa
Como Admin/Sensei, quero eventos/exames associados a uma faixa alvo, para não misturar bancas.  
**Must**  
1. CA-013.1: Exame referencia faixa de origem → faixa destino.  
2. CA-013.2: Lista de elegíveis filtra por requisitos daquela faixa.
