# Épico 04 — Aula e presença

**Prioridade:** Must  
**Dependências:** E3

## Visão

Sensei abre a aula; aluno/responsável faz check-in; Sensei confirma presença. Check-in ≠ presença (RN-03).

## HUs

### HU-030 — Abrir aula do dia
Como Sensei, quero abrir a aula da turma (data/horário), para registrar o treino.  
**Must**  
1. CA-030.1: Aula ligada a turma + ocorrência da agenda.  
2. CA-030.2: Opcional: técnicas trabalhadas no dia.

### HU-031 — Check-in (app / QR)
Como aluno (ou responsável pelo filho), quero fazer check-in, para sinalizar que estou na aula.  
**Must**  
1. CA-031.1: Check-in gera status `AGUARDANDO_CONFIRMACAO`.  
2. CA-031.2: Fora da janela da aula → rejeitado ou marcado atrasado (definir na implementação).

### HU-032 — Confirmar presença
Como Sensei, quero confirmar ou rejeitar check-ins / marcar presença manual, para o registro oficial.  
**Must**  
1. CA-032.1: Status final `PRESENTE` ou `AUSENTE` / `FALTA`.  
2. CA-032.2: Lista da turma permite bulk.

### HU-033 — Histórico de presença
Como aluno/responsável, quero ver histórico, para acompanhar frequência.  
**Must**
