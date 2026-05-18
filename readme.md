# Modernização Visual — L2 Amerika Web

Plano de modernização **estritamente visual** do `index.html` do site institucional do servidor **Amerika - High Five - PvP Server - L2J**.

> Escopo: estética, hierarquia, tipografia, cor, componentes e micro-interações.
> Fora de escopo: refatoração de stack (Bootstrap/jQuery permanecem), build tools, arquitetura de arquivos, SEO técnico e i18n.

---

## 1. Diagnóstico visual

### 1.1 Referência

- Lighthouse / contexto: <https://pagespeed.web.dev/analysis/https-www-l2amerika-com/copcw1qqqp?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=pt&utm_source=lh-chrome-ext>

### 1.2 Áreas analisadas

| Seção | Elementos atuais | Avaliação visual |
| --- | --- | --- |
| **Topbar** | Links Community, Bug Policy, Wiki, Media, Boss Status, Castle Siege + bandeiras de idioma | Boa densidade, mas falta separação do menu principal |
| **Menu principal** | Logo, Home, News, Information, Downloads, Register, Rankings + botões Login / Install | Botão dourado pulsante OK; tipografia uppercase com tracking adequado |
| **Hero** | Vídeo `cinematicl2.mp4` em loop, título outline `AMERIKA`, subtítulo `HIGH FIVE SERVER!`, parágrafo institucional, CTA `REGISTER` | Vídeo sem overlay legível; parágrafo longo demais; CTA único e pouco proeminente |
| **Server orbs** | Dois cards (200x High Five online, BETA offline) com anéis decorativos | Conceito forte, mas pouco contraste entre online/offline; “glass” pouco perceptível |
| **Community Videos** | Carousel Swiper com thumbs TikTok/YouTube | Thumbs sem moldura/hover, sem indicador de play |
| **Discord float** | Pill flutuante azul fixa no canto | Boa; pode ganhar pulse sutil e badge de membros online |
| **Cores** | Dourado `#d4af37` + tons rgba do mesmo + cinzas frios | Paleta coerente, mas usada de forma inconsistente — falta sistema de tokens |
| **Tipografia** | Space Grotesk 500 + fallbacks | Apenas um peso; falta escala e diferenciação de hierarquia |
| **Efeito neve** | `#snow-container` com `❄` em queda (só dezembro) | OK, mas pode trocar por partículas com blur e parallax leve |

### 1.3 Problemas visuais centrais

1. **Hero sem profundidade** — vídeo cobre 100% sem gradient overlay, prejudicando leitura do título.
2. **Hierarquia tipográfica fraca** — só um peso (500) para títulos, subtítulos e corpo.
3. **Estados hover genéricos** — quase tudo usa só mudança de cor; falta elevação, glow e transform.
4. **Cards `glass-panel` sem real glassmorphism** — falta `backdrop-filter`, borda interna e ruído.
5. **CTA `REGISTER` apagado** perto do botão dourado pulsante do menu — concorrência visual.
6. **Status `Online/Offline`** com a mesma forma — falta semaforização (verde/vermelho com pulse).
7. **Carousel de vídeos sem affordance** — não parece clicável; sem ícone de play, sem zoom.
8. **Spacing inconsistente** — paddings em px arbitrários (`45px`, `50px`, `10px`) sem escala.
9. **Bordas hard** em todos os componentes — falta raio uniforme (`--radius-sm/md/lg`).
10. **Botão Discord** sem hierarquia em relação ao botão Install — competem pela atenção.

---

## 2. Direção de design

### 2.1 Mood
**Dark fantasy premium** — referência a interfaces de MMO modernas (Lost Ark launcher, Throne and Liberty site, Diablo IV) com a paleta dourada já existente da marca.

### 2.2 Princípios
- **Dourado é acento, não cobertura** — usado em CTAs primários, hairlines e títulos chave.
- **Vidro escuro com luz dourada interna** — substituir os "pretos chapados" por gradientes sutis e blur.
- **Movimento intencional** — cada animação reforça status (online pulse, hover lift, CTA glow).
- **Tipografia em três níveis claros** — display / heading / body, todos em Space Grotesk com pesos diferentes.

---

## 3. Tokens de design propostos

```css
:root {
  /* Cores — neutras */
  --bg-900: #0a0a0c;
  --bg-800: #111114;
  --bg-700: #1a1a20;
  --surface-glass: rgba(20, 20, 25, 0.55);
  --hairline: rgba(255, 255, 255, 0.06);
  --hairline-gold: rgba(212, 175, 55, 0.25);

  /* Cores — acento (dourado da marca) */
  --gold-500: #d4af37;
  --gold-400: #e6c450;
  --gold-600: #a8861f;
  --gold-glow: rgba(212, 175, 55, 0.45);

  /* Cores — semânticas */
  --status-online:  #22c55e;
  --status-offline: #ef4444;
  --status-beta:    #6366f1;

  /* Tipografia */
  --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --text-xs: 11px;
  --text-sm: 13px;
  --text-md: 15px;
  --text-lg: 18px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-display: clamp(48px, 7vw, 96px);

  /* Espaçamento (escala 4) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;

  /* Raio e elevação */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  --shadow-soft: 0 8px 30px rgba(0,0,0,0.45);
  --shadow-gold: 0 0 24px var(--gold-glow);
}
```

> Inserir esses tokens no topo do `<style>` ou em `style.css` e refatorar valores hard-coded para usá-los.

---

## 4. Modernizações por seção

### 4.1 Topbar
- Reduzir altura para `36px`; texto em `--text-xs`.
- Adicionar **separador vertical** sutil (`1px solid var(--hairline)`) entre grupos de links.
- Bandeiras de idioma viram **chips circulares** de `22px` com borda dourada no hover.
- Underline animado (left-to-right) nos links no hover, em vez de só troca de cor.

### 4.2 Menu principal
- Adicionar **fundo sticky com blur** ao scrollar:
  ```css
  .Top_Menu.scrolled {
    backdrop-filter: blur(12px);
    background: rgba(10, 10, 12, 0.7);
    border-bottom: 1px solid var(--hairline-gold);
  }
  ```
- Link ativo recebe `border-bottom: 2px solid var(--gold-500)` + glow leve.
- Botão **Install Amerika** ganha ícone Windows + chevron animado, mantendo o pulse atual mais sutil (reduzir opacidade de `0.60` para `0.35`).
- Botão **Login ACC** ganha ícone de usuário em `var(--gold-400)`.

### 4.3 Hero
- **Overlay gradiente** sobre o vídeo:
  ```css
  background: linear-gradient(180deg, rgba(10,10,12,0.2) 0%, rgba(10,10,12,0.85) 100%),
              linear-gradient(90deg, rgba(10,10,12,0.7) 0%, transparent 60%);
  ```
- Título `AMERIKA` outline ganha **letter-spacing maior** (`0.04em`) e fill com gradiente dourado em hover.
- Subtítulo `HIGH FIVE SERVER!` em peso 700, com sublinhado dourado decorativo de `40px` acima.
- Parágrafo institucional **encurtado** para 2 frases (CTA do texto longo vira link "Read more").
- Dois CTAs lado a lado: **REGISTER** (dourado, primário) e **DOWNLOAD CLIENT** (outline, secundário).
- Adicionar **badges flutuantes** abaixo do título: `17 YEARS ONLINE` · `NO WIPES` · `1813 PLAYERS NOW`.

### 4.4 Server orbs
- Manter o conceito de anéis, mas:
  - Anel externo gira lentamente (`animation: spin 20s linear infinite`).
  - Centro recebe **glass real**:
    ```css
    background: var(--surface-glass);
    backdrop-filter: blur(16px) saturate(140%);
    border: 1px solid var(--hairline-gold);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), var(--shadow-soft);
    ```
- Status `Online` vira **pill verde com dot pulsante**; `Offline` em vermelho escuro com opacidade reduzida.
- Rate (`200x`) em `--text-2xl` com gradiente `gold-400 → gold-600`.
- Card BETA recebe overlay esmaecido (`opacity: 0.55`) e badge "COMING SOON".

### 4.5 Carousel Community Videos
- Cada thumb ganha:
  - **Ícone de play centralizado** (SVG branco em círculo dourado, surge no hover).
  - Borda dourada `1px` no hover + `transform: translateY(-4px) scale(1.02)`.
  - Sombra `var(--shadow-soft)` no hover.
  - Overlay gradiente bottom com título do criador (se houver) e ícone TikTok/YouTube.
- Setas `swiper-button-prev/next` viram círculos com glass + ícone chevron dourado.
- Título "Community Videos" recebe **eyebrow** acima ("HIGHLIGHTS") em `--text-xs` dourado.

### 4.6 Botão Discord float
- Trocar gradiente azul por **dark glass com ring dourado**:
  ```css
  background: rgba(88, 101, 242, 0.18);
  border: 1px solid rgba(88, 101, 242, 0.5);
  backdrop-filter: blur(12px);
  ```
- Adicionar **dot verde pulsante** ("X online") — pode ser estático no primeiro momento.
- No mobile, colapsar para só o ícone (sem texto).

### 4.7 Banner de evento PvP (atualmente comentado)
- Restaurar como **slim bar fixa no topo** (não no rodapé), 32px de altura.
- Quando há evento ativo: fundo `linear-gradient(90deg, var(--gold-600), var(--gold-400))` com texto preto.
- Countdown em fonte mono (`JetBrains Mono` opcional) com dígitos tabulares.

### 4.8 Efeito neve (dezembro)
- Trocar caractere `❄` por **SVG branco com `filter: blur(0.5px)`**.
- Tamanhos em três camadas (parallax leve: pequenos rápidos, grandes lentos).
- Reduzir opacidade máxima de `1` para `0.7`.

---

## 5. Micro-interações

| Elemento | Interação |
| --- | --- |
| Botões primários | Hover → `box-shadow: var(--shadow-gold)` + `translateY(-1px)` |
| Cards | Hover → borda dourada acende em `200ms` |
| Links de menu | Hover → underline cresce de 0 → 100% em `180ms ease-out` |
| Server status online | Dot verde com `@keyframes pulse` (2s) |
| Logo | Hover → leve brilho dourado em `filter: drop-shadow` |
| Scroll | Header colapsa de `80px` → `60px` ao scrollar > 40px |
| Carousel thumbs | Hover → play icon `scale(0) → scale(1)` em `200ms` |

Todas com `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Acessibilidade visual (sem mexer em markup)

- Garantir **contraste mínimo 4.5:1** em corpo de texto: `rgba(241,245,249,0.85)` está OK; revisar `rgba(241,245,249,0.7)` da topbar.
- Estado `:focus-visible` com **anel dourado** de `2px` + offset `2px` em todos os interativos.
- Aumentar **área de clique mínima** dos chips de idioma para `32px`.
- Substituir `cursor: pointer` aplicado em elementos não interativos.

---

## 7. Entregáveis

1. **`style.css` v2** com tokens (`:root`) no topo e refator das classes existentes para usá-los — **sem renomear classes** (preservar compatibilidade com o backend que renderiza o HTML).
2. **Patch de marcação mínima** apenas onde necessário (ex.: adicionar `<span class="dot"></span>` no status online, eyebrow no título da seção de vídeos, segundo CTA no hero).
3. **Mockup do hero** (Figma ou screenshot anotado) antes de implementar, para alinhamento.
4. **Antes/depois** das 4 seções principais (topbar, menu, hero, orbs).

---

## 8. Roadmap visual (5 sprints curtos)

| Sprint | Entrega | Esforço |
| --- | --- | --- |
| **S1** | Tokens + tipografia + refactor de cores hard-coded | 1 dia |
| **S2** | Hero (overlay, CTAs, badges, parágrafo curto) | 1 dia |
| **S3** | Server orbs (glass real, status semafórico, anéis animados) | 1 dia |
| **S4** | Topbar + menu sticky + Discord float redesenhado | 1 dia |
| **S5** | Carousel + micro-interações + revisão de acessibilidade | 1 dia |

---

## 9. Critérios de aceite visuais

- Hero legível sobre o vídeo em qualquer frame (contraste do título ≥ 7:1).
- Status `Online` reconhecível **sem ler o texto** (semáforo verde pulsante).
- CTAs primário/secundário no hero claramente diferenciados.
- Nenhuma cor dourada hard-coded no CSS final — tudo via `var(--gold-*)`.
- Hover state visível em **todos** os elementos clicáveis.
- `prefers-reduced-motion` respeitado.
- Visual mantém personalidade L2 (dourado, sério, épico) — **não vira site SaaS genérico**.
