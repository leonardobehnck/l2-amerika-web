# Modernização — L2 Amerika Web

Plano de modernização do `index.html` (1.554 linhas, monolítico) do site institucional do servidor **Amerika - High Five - PvP Server - L2J**.

---

## 1. Estado atual

O arquivo `index.html` concentra **toda** a página inicial: marcação, dezenas de blocos `<style>` inline, scripts embutidos, contadores de evento, integração com Cloudflare Rocket Loader e dependências carregadas via CDN.

### Stack legada identificada

| Camada | Tecnologia atual | Observação |
| --- | --- | --- |
| Doctype | Ausente (declaração XHTML 1999) | Renderiza em quirks mode em alguns parsers |
| CSS framework | Bootstrap **4.5.2** via `maxcdn.bootstrapcdn.com` | CDN descontinuada; versão sem suporte |
| JS | jQuery **3.7.0** + Bootstrap JS | Carregados via Google CDN |
| Ícones | RPG Awesome + Font Awesome 5.15.3 (duplicado) | Dois CSS de ícones carregados juntos |
| Fontes | Google Fonts (Space Grotesk 500) | OK, com `preconnect` |
| Loader | Cloudflare Rocket Loader | Reescreve `type` dos scripts (`81c0c91b…-text/javascript`) |
| Efeitos | Neve de Natal (`#snow-container`) | Fora de época, ativo o ano todo |
| Estilo | Centenas de linhas de CSS inline + `!important` em cascata | Difícil manter, conflitos visíveis |
| SEO | `<meta name="keywords">` com ~70 termos repetidos | Padrão deprecado/penalizado |
| Acessibilidade | Sem `lang`, sem landmarks, sem `alt` consistente | Score baixo em Lighthouse |

---

## 2. Diagnóstico

### 2.1 Relatório Lighthouse
https://pagespeed.web.dev/analysis/https-www-l2amerika-com/copcw1qqqp?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=pt&utm_source=lh-chrome-ext

### 2.2 Problemas críticos
- **Sem `<!DOCTYPE html>`** e sem atributo `lang` no `<html>`.
- **CSS inline gigantesco** (~800+ linhas só de estilos espalhados em `<style>` no `<head>` e no `<body>`).
- **JS inline** com lógica de negócio (contador de evento PvP global) acoplado ao HTML.
- **Duplicação de regras** (`#snow-container` e `.snowflake` declarados duas vezes).
- **Uso massivo de `!important`** mascarando conflitos com Bootstrap.
- **Bootstrap 4 + jQuery** para uma página majoritariamente estática — ~250 KB de JS desnecessário.
- **Rocket Loader** quebra inspeção e debugging (todo script vira `text/rocketscript`).
- **Bloco comentado** do `event-bar` (linhas 1447–1466) deixado no fonte.
- **Texto misto** PT/EN sem i18n estruturada.

### 2.3 Problemas moderados
- `meta keywords` poluído e contraproducente.
- Sem `<meta name="theme-color">`, sem manifest, sem favicons modernos (apenas `.ico`).
- Sem Open Graph image (`og:image` ausente).
- Imagens sem `width`/`height` e sem `loading="lazy"`.
- Sem cache busting nos assets internos (`style.css`, `text_style.css`).

---

## 3. Objetivos da modernização

1. **Performance** — meta de LCP < 2.5s e bundle JS inicial < 50 KB.
2. **Manutenibilidade** — separar HTML, CSS e JS; remover duplicações.
3. **SEO técnico** — semântica correta, Open Graph completo, dados estruturados (`Organization` / `VideoGame`).
4. **Acessibilidade** — meta de Lighthouse a11y ≥ 90.
5. **Mobile-first** — manter o layout mobile que já existe, mas sem `!important`.
6. **Sazonalidade** — efeito de neve controlado por data (dezembro/janeiro), não fixo.

---

## 4. Stack-alvo

| Camada | Proposta | Justificativa |
| --- | --- | --- |
| Markup | HTML5 semântico (`<header>`, `<nav>`, `<main>`, `<footer>`) | Acessibilidade + SEO |
| CSS | CSS custom properties + utilitários próprios (sem Bootstrap) **ou** Tailwind via CLI | Remover ~200 KB de CSS não usado |
| JS | Vanilla ES2022 modular, sem jQuery | Contador, menu mobile e snow rodam em < 5 KB |
| Build | Vite (dev server + minificação + hashing) | Zero config para site estático |
| Ícones | Subset SVG inline + Lucide (apenas os usados) | Elimina Font Awesome + RPG Awesome |
| Fontes | `font-display: swap` + self-host opcional do Space Grotesk | Remove dependência do `fonts.gstatic.com` no path crítico |

---

## 5. Roadmap

### Fase 1 — Higienização (sem mudar visual)
- [ ] Adicionar `<!DOCTYPE html>` e `<html lang="pt-BR">`.
- [ ] Extrair os blocos `<style>` para `assets/css/site.css`.
- [ ] Extrair scripts inline (contador, menu mobile, neve) para `assets/js/`.
- [ ] Remover CSS/JS duplicado (snow, blocos comentados, `event-bar` morto).
- [ ] Remover `meta keywords`; manter `description` e Open Graph.
- [ ] Adicionar `og:image` e favicons modernos (`16/32/180/512`, `site.webmanifest`).

### Fase 2 — Substituição de dependências
- [ ] Remover Bootstrap 4 e jQuery; reescrever menu/colapsos em CSS + ~30 linhas de JS.
- [ ] Remover Font Awesome **ou** RPG Awesome (escolher um — provavelmente nenhum, indo para SVG).
- [ ] Desativar Rocket Loader para os scripts internos (`data-cfasync="false"`) ou substituir por `defer`.

### Fase 3 — Componentização e build
- [ ] Introduzir Vite + estrutura `src/` (`components/`, `styles/`, `scripts/`).
- [ ] Quebrar `index.html` em parciais (header, topbar, hero, footer, discord-float).
- [ ] Pipeline de build com hashing e minificação.

### Fase 4 — Qualidade
- [ ] Lighthouse CI: orçamentos de performance, a11y, SEO, best-practices ≥ 90.
- [ ] Validação HTML (W3C) e CSS (stylelint).
- [ ] Testes manuais em iOS Safari, Chrome Android, Firefox e Edge.
- [ ] Documentar variáveis de tema (cores douradas `#d4af37`, `rgba(212,175,55,*)`) como tokens.

### Fase 5 — Features
- [ ] Banner de evento PvP global controlado por config (JSON), não hard-coded.
- [ ] Neve sazonal automática (UTC: 1 dez – 7 jan).
- [ ] i18n PT/EN/ES via JSON + `<html lang>` dinâmico.

---

## 6. Estrutura proposta

```
l2-amerika-web/
├── index.html                 # apenas marcação semântica
├── assets/
│   ├── css/
│   │   ├── tokens.css         # cores, fontes, espaçamentos
│   │   ├── base.css           # reset + tipografia
│   │   ├── layout.css         # header, topbar, grid
│   │   └── components.css     # botões, cards, discord-float
│   ├── js/
│   │   ├── menu-mobile.js
│   │   ├── event-countdown.js
│   │   └── snow.js
│   └── img/
├── site.webmanifest
└── readme.md
```

---

## 7. Critérios de aceite

- `index.html` < 300 linhas, apenas markup.
- Nenhum `!important` no CSS final (exceto utilitários explícitos).
- Lighthouse mobile: Performance ≥ 85, SEO ≥ 95, A11y ≥ 90.
- Sem regressão visual no header, hero, topbar e botão flutuante do Discord.
- Contador de evento PvP continua exibindo dias/horários atuais (quarta 19:30 UTC, quinta 23:30 UTC).
