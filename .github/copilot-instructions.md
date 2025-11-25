# Shree Sawariya Events - AI Coding Guidelines

## Project Overview
Single-page luxury event management website built with React, TypeScript, Vite, shadcn/ui, and Tailwind CSS. Features a premium design system with gold/burgundy color palette and cinematic animations.

## Architecture & Structure

### Single-Page Application Pattern
- **Homepage**: `src/pages/Index.tsx` imports and stacks section components (`HeroSection`, `ServicesSection`, `GallerySection`, `AboutSection`, `ContactSection`)
- **Layout wrapper**: All pages wrap content in `<Layout>` component which provides `<Navigation>` and `<WhatsAppFloat>` globally
- **Routing**: React Router v6 in `App.tsx` - add new routes ABOVE the catch-all `"*"` NotFound route
- **Navigation**: Uses hash-based smooth scroll (`#home`, `#services`) via `scrollToSection()` in `Navigation.tsx`

### Component Organization
```
src/components/
  ├── Layout.tsx           # Fixed nav + main wrapper + WhatsApp float
  ├── Navigation.tsx       # Mobile-responsive nav with smooth scroll
  ├── WhatsAppFloat.tsx    # Fixed bottom-right CTA button
  ├── *Section.tsx         # Page sections (Hero, Services, Gallery, etc.)
  └── ui/                  # shadcn components - DO NOT manually edit
```

## Design System (src/index.css)

### Custom Button Variants
Always use these custom variants instead of creating new styles:
```tsx
<Button variant="luxury" />      // Gold gradient with pulse animation
<Button variant="elegant" />     // Burgundy solid color
<Button variant="ghost-luxury" /> // Transparent with gold border
<Button variant="whatsapp" />    // Green WhatsApp branded
```

### Custom CSS Utilities
```css
.hero-text            // Large responsive hero titles
.gradient-text        // Gold gradient text (for headings)
.gradient-text-elegant // Burgundy gradient text
.card-luxury          // Glass-morphism card with hover effects
.image-elegant        // Rounded images with hover scale
.fade-in-up           // Bottom-up entrance animation
.fade-in-left         // Left-to-right entrance animation
.luxury-glow          // Pulsing text shadow animation
```

### Color System (HSL Variables)
- Primary: Gold `--primary: 45 95% 50%`
- Secondary: Deep burgundy `--secondary: 345 70% 25%`
- Accent: Warm orange `--accent: 25 85% 60%`
- Use `hsl(var(--primary))` in Tailwind classes

## Development Workflows

### Starting Development
```bash
npm run dev           # Starts Vite dev server on port 8080
npm run build         # Production build
npm run build:dev     # Development mode build
npm run preview       # Preview production build
```

### Adding shadcn/ui Components
Use the CLI to add components (never manually create):
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```
Configuration in `components.json` uses `@/` aliases.

### Path Aliases
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- Always use `@/` imports, never relative paths

## TypeScript Configuration

### Relaxed Type Rules (tsconfig.json)
```jsonc
{
  "noImplicitAny": false,
  "strictNullChecks": false,
  "noUnusedParameters": false,
  "noUnusedLocals": false
}
```
Type checking is intentionally lenient - don't add strict type annotations unless explicitly needed.

## Project-Specific Patterns

### WhatsApp Integration
All CTA buttons open WhatsApp with pre-filled messages:
```tsx
const phoneNumber = "+919999999999"; // Update with real number
const message = "Your pre-filled message";
window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
```

### Phone Call Links
```tsx
onClick={() => window.open("tel:+919999999999", "_self")}
```

### Image Handling
- Static images in `src/assets/`
- Import at top: `import heroWedding from "@/assets/hero-wedding.jpg"`
- Use `className="image-elegant"` or `className="image-hero"` for consistent styling

### Smooth Scroll Navigation
Navigation links use hash anchors with smooth scroll behavior:
```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace('#', ''));
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
```
Ensure all sections have corresponding `id` attributes.

## Build & Deploy

### Lovable Platform Integration
- Primary deployment via Lovable platform: https://lovable.dev/projects/c8a8b78f-dd4b-41cb-8722-4f63ea089ea5
- Lovable changes auto-commit to this repo
- Local changes pushed to git also sync to Lovable

### Vite Configuration
- Dev server: `host: "::"` (IPv6), port 8080
- Uses `@vitejs/plugin-react-swc` for fast refresh
- Development mode includes `lovable-tagger` plugin

## Key Dependencies

### UI Framework
- React 18 + TypeScript + Vite
- shadcn/ui (Radix UI primitives + custom styling)
- Tailwind CSS with custom luxury theme
- Lucide React for icons

### State & Routing
- React Router v6 for routing
- TanStack Query for data fetching (not currently used)
- React Hook Form + Zod for forms (installed but not implemented)

### Utilities
- `cn()` utility: `cn(className1, className2)` merges Tailwind classes with proper overrides (uses `clsx` + `tailwind-merge`)
- `date-fns` for date formatting
- `sonner` for toast notifications

## Common Pitfalls

1. **Don't manually edit shadcn components** in `src/components/ui/` - regenerate via CLI instead
2. **Route order matters** - always add routes ABOVE the `path="*"` catch-all in `App.tsx`
3. **CSS variables must be HSL** - use `hsl(var(--primary))` syntax, never hex colors
4. **Mobile-first responsive** - all components must work on mobile screens
5. **Animation performance** - use `transform` and `opacity` for animations (GPU-accelerated)

## Contact Info Placeholders
Replace these in production:
- WhatsApp: `+919999999999`
- Phone: `+919999999999`
- Business details in ContactSection.tsx
