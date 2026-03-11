# Scale.com Design System — AQLAAN Implementation Guide

Apply this design system consistently across all pages and components.

---

## Core Philosophy
- Dark-only, typography-driven, zero decorative clutter
- Enterprise-grade, technical, achromatic — Apple restraint + engineering precision
- **Anti-purple**: Never use indigo/violet AI gradients. Use white + gray + single blue accent only.

---

## Color Tokens

| CSS Variable | Value | Usage |
|---|---|---|
| `--bg` | `#00000f` | Page background (NOT pure black) |
| `--surface` | `rgba(255,255,255,0.02)` | Card / surface fills |
| `--border` | `rgba(255,255,255,0.10)` | All borders |
| `--text` | `#ffffff` | Primary text |
| `--muted` | `#a3a3a3` | Secondary text, nav links, descriptions |
| `--accent` | `#006CAD` | Brand blue — used sparingly |
| `--accent-soft` | `#F4F0FF` | Lavender — secondary CTA labels only |

```css
:root {
  --bg: #00000f;
  --surface: rgba(255,255,255,0.02);
  --border: rgba(255,255,255,0.10);
  --text: #ffffff;
  --muted: #a3a3a3;
  --accent: #006CAD;
  --accent-soft: #F4F0FF;
}
```

---

## Typography

| Element | Tailwind Classes | Notes |
|---|---|---|
| Hero H1 | `text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight` | White, no gradient |
| Section H2 | `text-4xl font-bold leading-[1.2] tracking-tight` | White |
| H3 | `text-2xl font-semibold` | White |
| Body | `text-xl leading-[1.6]` | `text-[#a3a3a3]` |
| Overline/Label | `text-xs font-mono tracking-[1px] uppercase` | `text-[#a3a3a3]`, placed above headings |
| Small/meta | `text-sm` | `text-[#a3a3a3]` |

**Font stack:**
```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
/* Labels/overlines: */
font-family: 'GeistMono', 'JetBrains Mono', ui-monospace, monospace;
```

---

## The Glass Button (Signature Component)

```tsx
// Primary CTA — gradient border wrapper + glass inner
<div className="p-[1px] rounded-full bg-gradient-to-br from-[#9a9a9a] via-[#1a1a1a] to-[#6a6a6a]">
  <button className="rounded-full px-6 py-2.5 bg-white/[0.04] backdrop-blur-sm
                     shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]
                     text-white text-sm font-medium
                     hover:scale-[1.02] hover:brightness-[1.15]
                     active:scale-[0.97] transition-all duration-500 ease-out">
    Get Started →
  </button>
</div>

// Secondary — plain text link
<button className="text-[#a3a3a3] hover:text-white transition-colors duration-300 text-sm">
  Learn more →
</button>
```

---

## Card Pattern

```tsx
<div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden
                shadow-xl hover:border-white/20 transition-colors duration-300">
  {/* content */}
</div>
```

---

## Section Pattern

Every section follows this structure:
```tsx
<section className="py-20 md:py-24 border-t border-white/[0.06]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Overline */}
    <p className="text-xs font-mono tracking-[1px] uppercase text-[#a3a3a3] mb-4">
      Section Label
    </p>
    {/* Heading */}
    <h2 className="text-4xl font-bold text-white leading-[1.2] tracking-tight mb-4">
      Section Title
    </h2>
    {/* Body */}
    <p className="text-xl text-[#a3a3a3] leading-[1.6] max-w-2xl mb-12">
      Description text here.
    </p>
    {/* Content grid */}
  </div>
</section>
```

---

## Visual Effects

### Glow (white-only, never colored)
```css
/* Card hover glow */
box-shadow: 0 0 20px rgba(255,255,255,0.06);

/* Super shadow for featured cards */
box-shadow: 0 25px 80px -12px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.03);
```

### Glass surface
```css
background: rgba(255,255,255,0.02);
border: 1px solid rgba(255,255,255,0.10);
backdrop-filter: blur(2px); /* backdrop-blur-xs — very subtle */
```

### Gradient border trick (buttons/cards)
```css
/* 1px wrapper with gradient, inner element fills the gap */
padding: 1px;
background: linear-gradient(135deg, #9a9a9a, #1a1a1a, #6a6a6a);
border-radius: inherit;
```

---

## Navbar Rules
- Transparent on top: `bg-transparent`
- Scrolled: `bg-[#00000f]/90 backdrop-blur-md border-b border-white/[0.08]`
- Nav links: `text-[#a3a3a3] hover:text-white transition-colors duration-300`
- No colored underlines — use `hover:text-white` only
- CTA buttons: glass button pattern
- Dropdown: `bg-[#0a0a0f] border border-white/10 rounded-xl shadow-xl`

---

## DO / DON'T

| DO | DON'T |
|---|---|
| Use `#00000f` as background | Use `#000000` pure black or `#090D1A` |
| Use `text-[#a3a3a3]` for muted | Use `text-gray-400` (close but different tone) |
| White-only glows | Colored glows (blue, purple, cyan) |
| Grayscale metallic gradient buttons | Blue/purple gradient buttons |
| `border-white/10` borders | `border-gray-800` borders |
| Mono overlines above headings | Colored section labels |
| `bg-white/[0.02]` card fills | `bg-gray-900` card fills |
| Single `#006CAD` accent (sparingly) | Multi-color accent palette |
| `text-5xl font-bold` hero title | `text-5xl font-extralight` or gradient text |

---

## Tailwind Config Extensions Needed

```js
// tailwind.config.js or CSS layer
theme: {
  extend: {
    colors: {
      'scale-bg': '#00000f',
      'scale-blue': '#006CAD',
      'scale-lavender': '#F4F0FF',
    },
    boxShadow: {
      'super': '0 25px 80px -12px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.03)',
      'glow-white': '0 0 20px rgba(255,255,255,0.12)',
      'inner-highlight': 'inset 0 1px 1px rgba(255,255,255,0.10)',
    },
    backdropBlur: {
      'xs': '2px',
    },
  }
}
```

---

## Animation Timing

| Interaction | Duration | Easing |
|---|---|---|
| Color/opacity | `duration-300` | `ease-in-out` |
| Scale/transform | `duration-500` | `ease-out` |
| Button press up | `hover:scale-[1.02]` | `ease-out` |
| Button press down | `active:scale-[0.97]` | `ease-out` |

---

## Page-by-Page Checklist
- [ ] globals.css — design tokens, base styles
- [ ] Navbar — glass effect, muted links, glass CTA buttons
- [ ] Hero — dark bg, bold white type, overline, glass buttons, no WebGL colors
- [ ] Partners — glass cards, grayscale logos, white hover
- [ ] Features — glass cards, white H3, muted body, mono overline
- [ ] Solutions — same card pattern
- [ ] CTA — centered, bold H2, glass buttons, muted trust signals
- [ ] Footer — dark bg, muted links, white on hover, no colored social icons
