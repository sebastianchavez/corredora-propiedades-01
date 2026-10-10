# 🏠 Inmobiliaria Aurora — Landing Template

Template de landing page multipágina para una **corredora de propiedades**. Diseño moderno con paleta oscura + acentos dorados, ideal para inmobiliarias, agentes inmobiliarios independientes, brokers o estudios de arquitectura que ofrecen servicios residenciales/comerciales.

---

## ✨ Características

- **10 páginas HTML** totalmente navegables y enlazadas entre sí.
- **100% responsive** (mobile, tablet, desktop).
- **Tailwind CSS** vía CDN + **CSS propio** crítico para fallback sin conexión.
- **JS vanilla** (sin frameworks ni dependencias de build).
- **Datos centralizados** en `js/data.js` — fácil de personalizar sin tocar el HTML.
- **Animaciones suaves** on-scroll con `IntersectionObserver` (sin librerías).
- **Navbar sticky** con efecto glass + transición al hacer scroll.
- **Galería con filtros** por tipo de propiedad + lightbox.
- **Formulario de contacto** con validación nativa y toast de confirmación.
- **Accesibilidad**: `aria-label`, `prefers-reduced-motion`, navegación por teclado.
- **SEO-ready**: meta description, Open Graph básico, HTML semántico.

---

## 📂 Estructura del proyecto

```
corredora-propiedades-01/
├── index.html              # Inicio (hero + destacados + servicios + testimonios + CTA)
├── nosotros.html           # Sobre la corredora + equipo + valores + historia
├── servicios.html          # Catálogo completo de servicios
├── galeria.html            # Propiedades con filtros por tipo + lightbox
├── precios.html            # Planes / paquetes de servicios
├── horarios.html           # Horarios de atención + talleres
├── contacto.html           # Formulario de contacto + datos
├── privacidad.html         # Política de privacidad
├── terminos.html           # Términos y condiciones
│
├── css/
│   └── styles.css          # Estilos críticos + fallback Tailwind + animaciones
│
└── js/
    ├── data.js             # 📦 Toda la data del sitio (propiedades, servicios, etc.)
    └── main.js             # 🎯 Lógica de UI (navbar, reveal, contadores, filtros, form)
```

---

## 🚀 Cómo usar

### Opción 1 — Apertura directa (la más simple)

1. Abre `index.html` en cualquier navegador moderno.
2. ¡Listo! No requiere build, instalación ni servidor.

> ⚠️ Algunas funciones (como animaciones `reveal`) requieren JS activo. El sitio se ve correctamente sin JS, solo pierde las animaciones.

### Opción 2 — Servidor local (recomendado para desarrollo)

```bash
# Con Python 3
python -m http.server 8080

# Con Node.js (http-server)
npx http-server -p 8080

# Con PHP
php -S localhost:8080
```

Luego visita `http://localhost:8080`.

---

## 🎨 Personalización rápida

### 1. Cambiar textos, imágenes y datos

Edita **`js/data.js`**. Toda la información del sitio proviene de aquí:

- `propiedades[]` → catálogo de propiedades
- `servicios[]` → servicios ofrecidos
- `stats[]` → contadores del hero
- `testimonios[]` → testimonios de clientes
- `equipo[]` → corredores/agentes
- `valores[]` → valores de la empresa
- `historia[]` → timeline de la empresa
- `talleres[]` → talleres/charlas
- `planes[]` → planes de precios

### 2. Cambiar colores y branding

En **`index.html`** (líneas 12-20) está la config de Tailwind. Modifica la paleta directamente en **`css/styles.css`** si quieres sobreescribir.

Paleta principal:

| Color | Hex | Uso |
|-------|-----|-----|
| `slate-900` | `#0f172a` | Fondos oscuros, navbar |
| `slate-50`  | `#f8fafc` | Fondos claros alternos |
| `amber-500` | `#f59e0b` | Acentos, CTAs, logo |
| `amber-400` | `#fbbf24` | Highlights, hover |
| `white`     | `#ffffff` | Textos sobre fondos oscuros |

### 3. Cambiar el logo y nombre

En cada HTML busca:

```html
<span class="font-extrabold text-xl tracking-tight">Aurora<span class="text-amber-400">.</span></span>
```

Reemplaza `Aurora` por el nombre de tu marca.

### 4. Reemplazar imágenes

Las URLs de Unsplash están en:
- `index.html` (hero + imagen lateral)
- `css/styles.css` (`.hero-gradient` — fondo del hero)
- `js/data.js` (catálogo de propiedades, equipo, servicios, etc.)

Recomendado: descarga las imágenes y sírvelas localmente para evitar dependencias externas.

---

## 🧩 Stack técnico

| Capa | Tecnología |
|------|------------|
| Markup | HTML5 semántico |
| Estilos | Tailwind CSS 3 (CDN) + CSS crítico propio |
| Lógica | JavaScript vanilla (ES6+) |
| Animaciones | CSS `@keyframes` + `IntersectionObserver` |
| Iconos | SVG inline (sin dependencias) |
| Tipografía | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

**Sin build step.** Sin npm. Sin webpack. Editas un archivo → refrescas el navegador.

---

## 📱 Responsive breakpoints

| Breakpoint | Tamaño | Uso |
|------------|--------|-----|
| Base | < 640px | Mobile |
| `sm` | ≥ 640px | Tablet vertical |
| `md` | ≥ 768px | Tablet horizontal |
| `lg` | ≥ 1024px | Desktop |

El menú móvil se activa por debajo de `1024px`.

---

## 🌐 Compatibilidad de navegadores

- ✅ Chrome / Edge / Brave (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari 14+
- ⚠️ IE11 no soportado (Tailwind CDN lo desaconseja)

---

## 📝 Notas

- El sitio está preparado para ser **deployado en cualquier hosting estático** (Netlify, Vercel, GitHub Pages, S3, hosting tradicional).
- Si quieres agregar un **backend real** al formulario de contacto, edita la función `initContactForm` en `js/main.js` (línea ~432) y reemplaza el bloque del `setTimeout` por una llamada `fetch()` a tu endpoint.
- Las páginas `privacidad.html` y `terminos.html` incluyen texto placeholder — **reemplázalo con tu contenido legal real** antes de publicar.
- La imagen de fondo del hero se sirve desde Unsplash; si la URL se rompe, el sitio mantiene un fondo oscuro sólido de respaldo (slate-900).

---

## 📄 Licencia

Template libre para uso comercial y personal. Personaliza, vende o regala — sin restricciones.

---

**Hecho con ♥ en Chile 🇨🇱**