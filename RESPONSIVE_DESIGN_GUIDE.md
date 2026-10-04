# Responsive Design Guide

## Quick Reference

Your portfolio is now fully responsive across **all device sizes** using a mobile-first approach.

---

## 📐 Device Breakpoints

| Device Type | Screen Width | Layout | Sidebar | Grid Columns |
|---|---|---|---|---|
| **Mobile Phone** | 320px - 640px | Single Column | Hidden | 1 |
| **Small Tablet** | 641px - 912px | Single/Double | Hidden | 1-2 |
| **Large Tablet** | 913px - 1024px | Double | Hidden | 2 |
| **Desktop** | 1025px - 1280px | Multi | Fixed Left | 3 |
| **Ultra-Wide** | 1920px+ | Multi | Fixed Left | 3 |

---

## 📱 Mobile Devices (320px - 640px)

### Visible Elements:
- ✅ Full-width content
- ✅ Hero section (50vh height)
- ✅ Single-column projects
- ✅ Single-column skills
- ✅ Touch-optimized buttons
- ✅ Responsive images

### Hidden Elements:
- ❌ Sidebar navigation (hidden)
- ❌ Multi-column layouts (stacked)

### Typography:
- Hero H1: `clamp(26px, 8vw, 42px)`
- Section H2: `clamp(24px, 5vw, 36px)`
- Body text: 12px - 13px

### Example View:
```
┌─────────────────┐
│  Hero Section   │
│   (50vh high)   │
└─────────────────┘
┌─────────────────┐
│  About Section  │
│   (1 column)    │
└─────────────────┘
┌─────────────────┐
│ Project 1       │
└─────────────────┘
┌─────────────────┐
│ Project 2       │
└─────────────────┘
```

---

## 📱 Tablets (641px - 1024px)

### Small Tablets (641px - 912px):
- 2-column grid for projects
- 2-column grid for skills
- Portrait orientation optimized
- About section: single column

### Large Tablets (913px - 1024px):
- Maintains 2-column grid
- About section: side-by-side (1fr 1.1fr)
- Better spacing

### Example View:
```
┌────────────┬────────────┐
│ Project 1  │ Project 2  │
└────────────┴────────────┘
┌────────────┬────────────┐
│ Skill 1    │ Skill 2    │
└────────────┴────────────┘
```

---

## 🖥️ Desktop & Monitors (1025px+)

### Layout Features:
- **Fixed Sidebar** on left (280px wide)
- **Main content** with left margin
- **3-column grids** for projects and skills
- **70vh** hero section height
- Full navigation available

### Sidebar Content:
- Profile card with avatar
- Social links
- Navigation menu
- Download CV button
- Footer information

### Example View:
```
┌─────────┬──────────────────────────────────────┐
│         │     Hero Section (70vh)              │
│ SIDEBAR │     Full Width                       │
│  280px  ├─────────────────────────────────────┤
│         │ Project 1 │ Project 2 │ Project 3   │
│  Fixed  │           │           │             │
│ Position├─────────────────────────────────────┤
│         │ Skill 1   │ Skill 2   │ Skill 3     │
└─────────┴──────────────────────────────────────┘
```

---

## 🎨 Responsive Features

### 1. Fluid Typography (clamp)
Uses CSS `clamp()` for automatic scaling:
```css
/* Mobile: 26px → Desktop: 42px */
font-size: clamp(26px, 8vw, 42px);
```

**Benefits:**
- No abrupt size changes at breakpoints
- Smooth, continuous scaling
- Better readability at all sizes

### 2. Flexible Grids
```css
/* Projects and skills auto-wrap */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

**Benefits:**
- Automatic column count based on space
- No manual breakpoint management for each item
- Optimal viewing at any width

### 3. Sidebar Toggle
```css
/* Desktop: shows sidebar */
@media (min-width: 1025px) {
  .sidebar { display: block; position: fixed; }
}

/* Mobile/Tablet: hides sidebar */
@media (max-width: 1024px) {
  .sidebar { display: none; }
}
```

### 4. Touch Optimization
```css
/* Larger tap targets on touch devices */
@media (hover: none) and (pointer: coarse) {
  .button { padding: 14px 24px; }
}
```

### 5. Accessibility
```css
/* Better focus visibility */
:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 2px;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms; }
}
```

---

## 🔍 How to Test Responsiveness

### Using Browser DevTools:

**Chrome/Edge:**
1. Press `F12` to open DevTools
2. Click the **Device Toolbar** icon (top-left)
3. Select different devices:
   - iPhone 12 (390 × 844)
   - iPad (768 × 1024)
   - Desktop (1280 × 720)

**Firefox:**
1. Press `Ctrl+Shift+M` for Responsive Design Mode
2. Choose preset devices or enter custom size

### Test These Sections:
- ✅ Hero section responsiveness
- ✅ Sidebar visibility (appears at 1025px+)
- ✅ Grid column count (1 → 2 → 3)
- ✅ Typography scaling
- ✅ Button spacing
- ✅ Form fields
- ✅ Navigation menu

---

## 🎯 CSS Media Query Rules

### Rule 1: Mobile-First
Start with mobile styles, then enhance with larger screens:
```css
/* Mobile base styles (no query needed) */
.element { width: 100%; }

/* Enhanced for tablets and up */
@media (min-width: 641px) {
  .element { width: 50%; }
}
```

### Rule 2: Progressive Enhancement
Features should work on all sizes, just displayed differently:
- Mobile: Essential info only
- Tablet: Balanced layout
- Desktop: Full experience with sidebar

### Rule 3: Breakpoint Logic
```
Mobile         Tablet         Desktop
0 - 640px  |  641 - 1024px  |  1025px+

Max-width ≤ 640
       AND
Max-width ≤ 1024
       AND
Min-width ≥ 641 AND Max-width ≤ 1024
       AND
Min-width ≥ 1025
```

---

## 🚀 Performance Tips

### Optimizations Implemented:
- ✅ Image lazy loading (`loading="lazy"`)
- ✅ Fetch priority hints
- ✅ CSS media queries (no extra file downloads)
- ✅ SVG icons (scalable, lightweight)
- ✅ No JavaScript required for responsive layout
- ✅ Smooth animations (60fps)

### Tested Performance:
- Mobile: Fast (CSS-only, no JS overhead)
- Tablet: Smooth transitions
- Desktop: No lag with fixed sidebar
- Print: Optimized for paper

---

## ✅ Checklist for New Content

When adding new sections/content, ensure:

- [ ] **Mobile (320px)**: Single column, readable
- [ ] **Tablet (768px)**: 2-column grid, proper spacing
- [ ] **Desktop (1280px)**: 3-column grid, sidebar visible
- [ ] **Typography**: Use `clamp()` for scaling
- [ ] **Touch**: Large enough tap targets (44px minimum)
- [ ] **Focus**: Visible outline for keyboard navigation
- [ ] **Reduced Motion**: No animation if `prefers-reduced-motion`

---

## 🎨 Design System

### Colors (Mobile-first):
```css
--ink:     #17211b;  /* Text */
--muted:   #667169;  /* Muted text */
--paper:   #f4f2eb;  /* Background */
--coral:   #f47c5b;  /* Accent/Hover */
--line:    #d5d9d1;  /* Borders */
```

### Typography (Fluid Scaling):
```css
--sans:  'Manrope', sans-serif;
--mono:  'DM Mono', monospace;
--serif: 'Playfair Display', Georgia, serif;
```

### Spacing Scale:
```
Mobile:  16px base
Tablet:  24px base
Desktop: 32px - 40px base
```

---

## 🔗 CSS Media Query Syntax

### Basic Format:
```css
@media (min-width: 641px) and (max-width: 912px) {
  /* Styles apply only within this range */
}
```

### Common Queries Used:
```css
/* Mobile only */
@media (max-width: 640px) { }

/* Tablet range */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Desktop and up */
@media (min-width: 1025px) { }

/* Touch devices */
@media (hover: none) and (pointer: coarse) { }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) { }

/* Dark mode */
@media (prefers-color-scheme: dark) { }

/* Print */
@media print { }
```

---

## 📊 Device Landscape Orientation

Mobile devices in landscape (600px height max):
```css
@media (max-height: 600px) and (orientation: landscape) {
  /* Reduce heights, hide non-essential elements */
}
```

Example: iPhone 12 landscape = 844 × 390 (width × height)

---

## 🎓 Learning Resources

To understand this responsive design better:

1. **MDN - Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
2. **CSS clamp()**: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
3. **CSS Grid**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
4. **Media Queries**: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

---

## 🐛 Troubleshooting

### Content looks broken at certain width:
→ Check if there's a media query affecting it
→ Adjust `clamp()` min/max values

### Sidebar not showing:
→ Ensure viewport width > 1025px
→ Check DevTools device settings

### Text too small/large:
→ Adjust `clamp()` min/max values in CSS
→ Example: `clamp(20px, 5vw, 28px)`

### Touch buttons too small:
→ Check tap target size (minimum 44px × 44px)
→ Increase padding in `@media (hover: none)` rule

### Performance sluggish:
→ Profile with DevTools Performance tab
→ Check for unnecessary animations
→ Verify image sizes

---

**Portfolio Version:** 2.0 (Responsive)  
**Last Updated:** October 4, 2026  
**Tested Breakpoints:** 5  
**Accessibility Level:** WCAG 2.1 AA  
