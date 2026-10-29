# UI/UX — fonte da verdade

**Protótipo:** [`design/judo-casa-ui-prototype.html`](./design/judo-casa-ui-prototype.html)  
**Origem:** entregue pelo Gabriel (Downloads/`Judo Casa.html`) em 2026-10-29.  
**Status:** seguir este arquivo; o app Expo deve espelhar tokens, tipografia e telas.

## Telas do protótipo

| id | Bottom nav | Conteúdo |
|----|------------|----------|
| `home` | Início | Saudação, progresso de faixa, próxima aula, comunicados |
| `presenca` | Presença | Check-in / lista de aula |
| `progressao` | Faixa | Checklist e elegibilidade |
| `campeonato` | Torneios | Lista + inscrição |
| `avaliacao` | Avaliação | Feedbacks / avaliação |

## Tokens (light)

| Token | Hex / valor | Uso |
|-------|-------------|-----|
| `--red` | `#FF0D19` | Primária CAP / CTA / “Casa” |
| `--red-dim` | `#CC0A14` | Pressed |
| `--red-ghost` | `rgba(255,13,25,0.10)` | Chips / avatar |
| `--bg` | `#F7F7F5` | Fundo app |
| `--bg-card` | `#FFFFFF` | Cards / header / tab bar |
| `--bg-section` | `#EFEFED` | Blocos suaves |
| `--fg` | `#1A1A1B` | Texto principal |
| `--fg-2` | `#56595B` | Texto secundário |
| `--fg-3` | `#9A9B9C` | Labels / muted |
| `--success` | `#1A9E5B` | OK |
| `--warn` | `#E08000` | Atenção |
| `--info` | `#1474C4` | Info |

Dark mode: ver CSS no protótipo (`--bg #141415`, etc.).

## Tipografia

| Papel | Família |
|-------|---------|
| Display (títulos JudoCasa, saudação) | **Bebas Neue** |
| Corpo | **DM Sans** |
| Mono (% progresso) | **DM Mono** |

Wordmark: `Judo` + `Casa` em vermelho.

## Componentes-chave

- Cards `border-radius: 16px`, sombra leve
- Chips red/green/orange/blue
- Barra de progresso de faixa com `--belt-color`
- Bloco vermelho “dia” na próxima aula
- Bottom nav 5 itens (Início, Presença, Faixa, Torneios, Avaliação)

## Expo

Tokens em `src/theme/`. Telas em `app/(tabs)/`. Não reinventar layout sem atualizar este doc + o HTML.
