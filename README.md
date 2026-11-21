<div align="center">

<img src="docs/01-title.jpg" alt="Mathematical Problems: title page" width="100%">

# 📐 Mathematical Problems

### Eight exercises in set theory, linear algebra and calculus: an interactive, textbook-style slide deck

*Ivory paper, serif type and a faint graph-paper grid. Two problems per page,<br>with solutions that stay hidden until you press <kbd>↓</kbd>.*

<br>

![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/dependencies-none-2f6b4f?style=for-the-badge)
![No build](https://img.shields.io/badge/build_step-none-8a3b2e?style=for-the-badge)

**[▶ Quick start](#-quick-start)** · **[🎮 Controls](#-controls)** · **[📖 Pages](#-the-pages)** · **[⚙️ How it works](#%EF%B8%8F-how-it-works)** · **[🛠 Customising](#-customising)**

</div>

---

## ✨ Highlights

| | Feature | What it means |
|:-:|---|---|
| 📜 | **Classical textbook look** | Warm paper, a graph-paper grid, thin rules and serif type. Problems are set like a textbook: **Problem 1.** in small caps, then the task, the formula and an italic *Solution.* |
| 🙈 | **Solutions hidden by default** | Each problem keeps a reserved solution box. Press <kbd>↓</kbd> to reveal the solutions one at a time and <kbd>↑</kbd> to hide them again. Nothing else on the page moves. |
| 🎨 | **One ink colour per page** | Oxblood, green, ochre, blue and violet. The paper, grid, rules and text are all tinted by the page's colour, and the whole page fades smoothly to the next colour when you turn the page. |
| ∫ | **Math without a library** | Powers, integral signs with limits, fractions and matrices in round brackets are all built with plain HTML and CSS on the *STIX Two* math font. No KaTeX, no MathJax. |
| 📈 | **Self-drawing figure** | The title page has a "Fig. 1" plate: the parabola `y = 2x²` and its tangent line draw themselves in when the page opens. |
| 🪶 | **Three small files** | `index.html`, `style.css` and `main.js` (about 90 lines). No framework, no bundler, no server. |

---

## 🚀 Quick start

No install, no build, no server. Just open the file:

```bash
# from this folder
xdg-open index.html        # Linux
open index.html            # macOS
start index.html           # Windows
```

Then press <kbd>F</kbd> for full screen and <kbd>→</kbd> to begin.

> [!TIP]
> The deck runs straight from `file://`. Only the three fonts (*Cormorant Garamond*, *EB Garamond* and *STIX Two Text*) come from Google Fonts. Without internet it still works and falls back to Georgia and Times.

---

## 🎮 Controls

| Key | Action |
|:---:|---|
| <kbd>→</kbd> &nbsp; <kbd>Space</kbd> &nbsp; <kbd>PgDn</kbd> | Next page |
| <kbd>←</kbd> &nbsp; <kbd>PgUp</kbd> | Previous page |
| <kbd>↓</kbd> | **Reveal** the next solution on this page |
| <kbd>↑</kbd> | **Hide** the last revealed solution |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to first / last page |
| <kbd>F</kbd> | Toggle full screen |
| 🖱 Click a problem | Toggle that problem's solution |
| 👆 Swipe | Next / previous on touch screens |
| 🔗 `index.html#4` | Open directly on page 4, Derivatives (works for `#1` – `#5`) |

Solutions are hidden again whenever you come back to a page. The two small circles marked *Solutions* in the footer show which ones are currently visible.

<table>
<tr>
<td width="50%"><img src="docs/05-integrals.jpg" alt="Integrals page with solutions hidden"></td>
<td width="50%"><img src="docs/05-integrals-solved.jpg" alt="Integrals page with solutions revealed"></td>
</tr>
<tr>
<td align="center"><b>Before</b>: solutions hidden</td>
<td align="center"><b>After</b> <kbd>↓</kbd> <kbd>↓</kbd>: both solutions revealed</td>
</tr>
</table>

---

## 📖 The pages

Each problem page holds the **two problems from one source picture**, with only the problem itself and the instruction for what to do.

| # | Page | Colour | Problems |
|:-:|---|:-:|---|
| 1 | **Mathematical *Problems*** | ![oxblood](https://img.shields.io/badge/-oxblood-8a3b2e?style=flat-square) | Title page, table of contents, Fig. 1 |
| 2 | **§ I · Set *notation*** | ![ochre](https://img.shields.io/badge/-ochre-9a6420?style=flat-square) | **1.** `A = {2, 4, 6, 8, 10}` in set-builder notation · **2.** `B = {x ∈ ℤ \| −3 < x ≤ 4}` in roster form |
| 3 | **§ II · Matrix *operations*** | ![violet](https://img.shields.io/badge/-violet-5e4785?style=flat-square) | **3.** `2A − B` and `AB` · **4.** Determinant of `M` |
| 4 | **§ III · Slope and the *derivative*** | ![green](https://img.shields.io/badge/-green-2f6b4f?style=flat-square) | **5.** Slope of `y = 2x²` at `x = 6` · **6.** Derivative of `5x⁵(12x² + 4)` |
| 5 | **§ IV · Find the *integrals*** | ![blue](https://img.shields.io/badge/-blue-2a5a8a?style=flat-square) | **7.** `∫(3x² − 4x + 5) dx` · **8.** `∫₀² (x³ + 2x) dx` |

<details>
<summary><b>📸 All pages</b></summary>
<br>

| | |
|:-:|:-:|
| <img src="docs/02-sets.jpg" alt="Sets page"> | <img src="docs/02-sets-solved.jpg" alt="Sets page, solved"> |
| **2 · Sets** | **2 · Sets, solved** |
| <img src="docs/03-matrices.jpg" alt="Matrices page"> | <img src="docs/03-matrices-solved.jpg" alt="Matrices page, solved"> |
| **3 · Matrices** | **3 · Matrices, solved** |
| <img src="docs/04-derivatives.jpg" alt="Derivatives page"> | <img src="docs/04-derivatives-solved.jpg" alt="Derivatives page, solved"> |
| **4 · Derivatives** | **4 · Derivatives, solved** |

</details>

<details>
<summary><b>🔑 Answer key</b> (spoilers)</summary>
<br>

| # | Problem | Answer |
|:-:|---|---|
| 1 | `A = {2, 4, 6, 8, 10}` | **`A = {x \| x = 2n, n ∈ ℕ, 1 ≤ n ≤ 5}`** |
| 2 | `B = {x ∈ ℤ \| −3 < x ≤ 4}` | **`B = {−2, −1, 0, 1, 2, 3, 4}`** |
| 3 | `2A − B`, `AB` | **`2A − B = (3 4; 6 3)`**, **`AB = (2 1; 3 14)`** |
| 4 | `det M`, `M = (4 7; 2 6)` | `4·6 − 7·2` = **10** |
| 5 | Slope of `y = 2x²` at `x = 6` | `y′ = 4x`, so the slope is **24** |
| 6 | `d/dx [5x⁵(12x² + 4)]` | `60x⁷ + 20x⁵` → **`420x⁶ + 100x⁴`** |
| 7 | `∫(3x² − 4x + 5) dx` | **`x³ − 2x² + 5x + C`** |
| 8 | `∫₀² (x³ + 2x) dx` | `[x⁴/4 + x²]₀² = (4 + 4) − 0` = **8** |

</details>

---

## ⚙️ How it works

```mermaid
flowchart LR
    K([⌨️ ← → / swipe]) --> GO["go(i)"]
    GO --> A["--accent = slide colour"]
    A --> MIX["color-mix()<br/>paper · grid · ink · rules"]
    GO --> RV["is-active<br/>headline rises · blocks fade in"]
    GO --> H["solutions reset to hidden"]
    D([⌨️ ↓ / ↑ / click]) --> O[".prob.open<br/>solution fades in / out"]
    style MIX fill:#f3ece0,stroke:#8a3b2e
    style O fill:#eef1ea,stroke:#2f6b4f
```

- **One colour drives the whole page.** Every slide has a `data-accent` colour. `main.js` copies it into the CSS variable `--accent`, and `style.css` mixes all the other colours from it with `color-mix()`: paper, grid lines, ink, rules and solution boxes. Because `--accent` is registered with `@property` as a real `<color>`, the browser can animate it, so the entire page fades from one ink colour to the next.
- **Solutions never shift the layout.** The solution box always takes up its full space. While it is hidden only a quiet italic hint is visible, and revealing it just fades the content in. Nothing above or beside it moves.
- **Math is typeset with CSS.** Small helper classes build the notation on top of the *STIX Two* font:

  | Class | Renders |
  |---|---|
  | `.m` | Math font; `<i>` for italic variables |
  | `<sup>` | Exponents |
  | `.int` + `.lim` | Integral sign, with optional upper/lower limits |
  | `.frac` | Stacked fraction |
  | `.mat` | 2×2 matrix in round brackets (four `<span>`s, row by row) |

- **Gentle motion.** Headlines rise out of a mask, blocks fade in one after another, and the title figure draws itself with `stroke-dashoffset`. If your system has *reduced motion* turned on, all of it is switched off.

### 📁 Project structure

```text
math_presentation/
├── index.html          ← all 5 pages: title + 8 problems with their solutions
├── style.css           ← paper theme, colour mixing, layout, math typesetting
├── main.js             ← navigation, solution reveal, progress bar
├── docs/               ← README screenshots
└── math 1–4 (.png/.jpg) ← source pictures the problems were taken from
```

---

## 🛠 Customising

<details>
<summary><b>➕ Add or edit a problem</b></summary>
<br>

Each problem is one `<article class="prob">` inside a page's `<div class="pair">`:

```html
<article class="prob rv">
  <h3><b>Problem 9.</b> <em>Chain rule</em></h3>
  <p class="task">Find the derivative of the function.</p>
  <div class="math"><span class="m">(3<i>x</i> + 1)<sup>4</sup></span></div>
  <div class="ans">
    <span class="alabel">Solution.</span>
    <p class="step">Outer power times inner derivative:</p>
    <p class="res"><span class="m">12(3<i>x</i> + 1)<sup>3</sup></span></p>
  </div>
</article>
```

`.step` lines are the small working; `.res` is the large, coloured final answer.

</details>

<details>
<summary><b>📄 Add a page</b></summary>
<br>

Copy any `<section class="slide">` and give it a `data-title` (shown in the progress bar tooltip) and a `data-accent` colour. The page counter, progress bar and keyboard navigation pick it up automatically.

```html
<section class="slide" data-title="Limits" data-accent="#7a4a2a">
```

</details>

<details>
<summary><b>🎨 Change the colours</b></summary>
<br>

- **A single page:** edit its `data-accent` in `index.html`. Everything on that page follows.
- **The whole theme:** the base paper and ink tones are at the top of `style.css`:

```css
--paper:color-mix(in srgb,var(--accent) 5%,#f7f3ea);
--ink:color-mix(in srgb,var(--accent) 12%,#1d1b18);
```

Raise the percentages for a stronger tint, lower them for a plainer page.

</details>

---

## 💡 Presenting tips

1. Open the deck and press <kbd>F</kbd> before you start. The title figure draws itself in about two seconds.
2. Read each problem aloud and give the audience a moment to try it.
3. Press <kbd>↓</kbd> once to reveal the left solution, then again for the right one. Press <kbd>↑</kbd> if you revealed one too early.
4. To return to a page for a question, use <kbd>←</kbd> or add `#N` to the URL. The solutions will be hidden again.

---

<div align="center">

*“Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.”*<br>
<sub>— William Paul Thurston</sub>

<sub>Made with plain HTML, CSS & JavaScript · No frameworks · No build step</sub>

</div>
