# Épico 08 — Campeonato / torneio

**Prioridade:** Must  
**Dependências:** E1, E3  
**Financeiro:** **fora** — sem pagamento no MVP (RN-06)

## Visão

Admin cria campeonato; aluno (ou responsável) se inscreve; sistema marca `INSCRITO`; Sensei/Admin vê a lista.

```text
Admin cria → aparece na agenda → Aluno inscreve → status INSCRITO → lista para Sensei/Admin
```

## HUs

### HU-070 — CRUD de campeonato
Como Admin, quero criar campeonato (nome, local, data, categoria/observações, turmas elegíveis ou aberto), para divulgar.  
**Must**  
1. CA-070.1: Status: rascunho / publicado / encerrado.  
2. CA-070.2: Publicado aparece na agenda.

### HU-071 — Inscrever-se
Como aluno (ou responsável pelo filho), quero me inscrever no campeonato, para participar.  
**Must**  
1. CA-071.1: Um clique confirma inscrição → status `INSCRITO`.  
2. CA-071.2: Não há passo de pagamento.  
3. CA-071.3: Não permite inscrição duplicada.

### HU-072 — Cancelar inscrição
Como aluno/responsável, quero cancelar enquanto o evento estiver aberto.  
**Should**

### HU-073 — Lista de inscritos
Como Admin/Sensei, quero ver e exportar/listar inscritos, para organizar a ida.  
**Must**  
1. CA-073.1: Filtro por campeonato.  
2. CA-073.2: Nome, turma, faixa, status.

## Fora deste épico (fase futura)

- Taxa de inscrição, Pix, gateway, comprovante  
- Chaves de combate / placar ao vivo
