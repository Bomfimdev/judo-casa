# Épico 01 — Usuários e perfis

**Prioridade:** Must  
**Dependências:** nenhuma

## Visão

Cadastro, login e papéis (Admin, Sensei, Aluno, Responsável) com vínculo aluno ↔ responsável.

## HUs

### HU-001 — Login
Como usuário, quero autenticar com e-mail e senha, para acessar o app.  
**Must**  
1. CA-001.1: Credenciais válidas abrem a home do perfil.  
2. CA-001.2: Credenciais inválidas mostram erro sem revelar qual campo falhou.  
3. CA-001.3: Usuário inativo não autentica (RN-01).

### HU-002 — Cadastro de aluno
Como convidado, quero criar conta de aluno, para usar o app.  
**Must**  
1. CA-002.1: Campos mínimos: nome, e-mail, senha, data nascimento.  
2. CA-002.2: E-mail único no sistema.

### HU-003 — Cadastro de responsável + vínculo
Como responsável, quero vincular meu filho aluno, para acompanhar a jornada dele.  
**Must**  
1. CA-003.1: Vínculo exige código/convite ou aprovação Admin.  
2. CA-003.2: Responsável só enxerga filhos vinculados (RN-05).

### HU-004 — Admin gerencia usuários
Como Admin, quero listar/ativar/inativar e atribuir perfis, para operar o dojo.  
**Must**  
1. CA-004.1: CRUD de perfil (Admin, Sensei, Aluno, Responsável).  
2. CA-004.2: Inativar impede login imediato.

### HU-005 — Sensei vinculado a turmas
Como Admin, quero associar Sensei a turmas, para limitar escopo.  
**Must**  
1. CA-005.1: Sensei só opera turmas associadas.
