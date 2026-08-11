# AEC Design System

## Overview

Marca exclusiva de SUPER HIDROMACK, C.A. Landing page institucional con estética premium industrial. Limpia, directa, corporativa sin ser aburrida.

## Philosophy

- **Menos es más.** Sin gradientes excesivos, sin sombras dramáticas, sin animaciones que distraigan.
- **Datos primero.** La confianza se gana con números y especificaciones, no con copy vacío.
- **Consistencia estricta.** Cada sección debe sentirse como parte de la misma familia visual.

## Color Palette (60-30-10)

### 60% — Neutros / Base
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#ffffff` | Fondo principal |
| `--bg-secondary` | `#f1f5f9` | Fondo de secciones alternadas |
| `--bg-elevated` | `#e2e8f0` | Cards, elevaciones sutiles |
| `--text-primary` | `#0f172a` | Títulos, texto principal |
| `--text-secondary` | `#64748b` | Subtítulos, descripciones |
| `--text-muted` | `#94a3b8` | Labels, metadata |

### 30% — Azul / Acento principal
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#2563eb` | CTAs primarios, links activos, badges |
| `--accent-hover` | `#1d4ed8` | Hover de CTAs |
| `--accent-glow` | `rgba(37,99,235,0.25)` | Sombras de glow |

### 10% — Verde / Acento secundario
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-secondary` | `#059669` | Resaltados estratégicos, "AEC-VE", stock disponible |
| `--accent-secondary-hover` | `#047857` | Hover verde |

### Fondos alternativos por sección
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-blue-50` | `#eff6ff` | Hero, headers de tabla |
| `--bg-green-50` | `#f0fdf4` | Secciones de garantía/ventajas |
| `--bg-dark` | `#1e3a5f` | Elementos oscuros de contraste (mínimo uso) |

## Typography

| Rol | Fuente | Fallback | Usage |
|-----|--------|----------|-------|
| Display | Bebas Neue | Impact | Headlines, números grandes, brand bar |
| Body | Plus Jakarta Sans | system-ui | Todo el texto de cuerpo, CTAs, labels |
| Mono | Space Mono | Courier New | Badges, códigos de producto, overlines, metadata |

### Escala
| Elemento | Tamaño | Peso | Tracking |
|----------|--------|------|----------|
| H1 (Hero) | `clamp(52px, 7vw, 100px)` | 400 | 2px |
| H2 (Sección) | `clamp(36px, 5vw, 64px)` | 400 | 2px |
| Overline | `11px` | 700 | 2px (mono) |
| Body | `15px` | 400 | normal |
| Label | `13px` | 500-700 | 0.8px |
| Mono badge | `11px` | 700 | 1.5px |

## Spacing

- **Max-width del layout:** `1440px`
- **Padding horizontal desktop:** `48px`
- **Padding horizontal mobile:** `20px`
- **Gap entre secciones:** `80px` vertical
- **Grid gap:** `24px` estándar, `16px` en mobile

## Border Radius

| Elemento | Valor |
|----------|-------|
| Cards / secciones | `16px` |
| Botones / inputs | `12px` |
| Badges / pills | `100px` |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(15,23,42,0.06)` | Elementos sutiles |
| `--shadow-md` | `0 4px 16px rgba(15,23,42,0.08)` | Cards, dropdowns |
| `--shadow-lg` | `0 12px 40px rgba(15,23,42,0.10)` | Modales, tooltips |
| `--shadow-glow` | `0 0 30px rgba(37,99,235,0.15)` | Focus states, hover de productos |

## Component Patterns

### Cards
- Fondo: `--bg-primary` o `--bg-secondary`
- Borde: `1px solid var(--border-subtle)`
- Sombra: `--shadow-md`
- Padding: `24px` desktop, `16px` mobile
- Hover: `translateY(-2px)` + `--shadow-lg` (si es interactiva)

### Buttons
- Primary: `bg: --accent-primary`, `color: #fff`, `radius: 12px`
- Hover: `bg: --accent-hover`, `scale(1.04)`, glow azul
- Font: `13px`, `700`, `letter-spacing: 0.8px`, `uppercase`
- Height mínimo: `52px` mobile, `56px` desktop

### Badges / Pills
- Background: tinte al 8% del color del badge
- Border: `1px solid` al 20% del color
- Radius: `100px`
- Font: mono, `11px`, `700`, `letter-spacing: 1.5px`

## Animation Rules

- **Entrada de secciones:** `revealUp` — `opacity: 0→1`, `translateY(35px→0)`
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo)
- **Trigger:** IntersectionObserver a `threshold: 0.1–0.3`, `triggerOnce: true`
- **Stagger:** `0.06s–0.15s` entre elementos
- **Duración:** `0.5s–0.85s`
- **Hover transitions:** `0.25s ease`
- **No animar:** layout properties (width, height, top, left). Usar solo `transform` y `opacity`.

## Iconography

- **Librería:** `@tabler/icons-react`
- **Stroke:** `1.5` por defecto, `2` para iconos pequeños de UI, `2.5` para checkmarks
- **Color:** heredar `currentColor` o usar tokens de texto
- **Size:** `16px`–`28px` según contexto

## Responsive Breakpoints

| Breakpoint | Ancho | Cambios principales |
|------------|-------|---------------------|
| Desktop | `> 1024px` | Layout completo, 2 columnas |
| Tablet | `640px–1024px` | 1 columna, ajustes de gap |
| Mobile | `< 640px` | Stacks verticales, paddings reducidos, tipografía escalada |

## Accessibility

- **Contraste mínimo:** 4.5:1 para todo texto de cuerpo
- **Focus visible:** `box-shadow: 0 0 0 3px var(--accent-glow)` en inputs y links
- **Labels visibles:** Todo input debe tener `<label>` asociado (puede ser `.visuallyHidden`)
- **Skip content:** Navbar debe tener `aria-label` en botones sin texto
- **Links externos:** Siempre `target="_blank"` + `rel="noopener noreferrer"`

## What NOT to Do

- ❌ No usar bordes redondeados excesivos (`> 16px` en cards)
- ❌ No usar más de 2 colores de acento en una misma sección
- ❌ No usar animaciones que duren más de `1s`
- ❌ No usar sombras negras puras; siempre con tinte azul (`#0f172a` base)
- ❌ No inventar nuevos tonos de azul/verde; usar siempre los tokens del root
- ❌ No mezclar gradients decorativos (solo los orbs del Hero están permitidos)
- ❌ No usar serif fonts
- ❌ No usar emojis en la UI
