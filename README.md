# PAPOTE — Sistemas solares

Sitio web profesional para **PAPOTE**, empresa especializada en instalación de sistemas fotovoltaicos en Cuba.

---

## 📁 Estructura del Proyecto

```
PAPOTE/
├── index.html                    # Punto de entrada HTML — único archivo en la raíz
├── README.md
│
├── assets/
│   └── images/
│       ├── hero-bg.webp          # Fotografía de fondo del hero (parallax)
│       └── about-papote.jpg      # Foto del fundador / equipo en sección About
│
├── css/
│   ├── main.css                  # ★ Punto de entrada CSS — solo @imports, no estilos
│   ├── variables.css             # Variables CSS globales, reset y body
│   ├── animations.css            # @keyframes y clases de animación (.reveal, .fade-up…)
│   ├── utilities.css             # .gradient-text, .badge, .section-title, .brand-lockup…
│   ├── buttons.css               # .btn-primary, .btn-ghost, .btn-card, .btn-submit
│   ├── ui.css                    # Botón flotante WhatsApp y Toast de notificación
│   ├── navigation.css            # Nav pill flotante + menú móvil
│   ├── hero.css                  # Sección hero + parallax (mouse y scroll)
│   ├── footer.css                # Footer
│   ├── responsive.css            # Media queries (≤1024px, ≤768px, ≤480px)
│   ├── about.css                 # Sección "Nuestra historia"
│   ├── services.css              # Grid de 6 tarjetas de servicios
│   ├── how-it-works.css          # Proceso en 4 pasos + diagrama del sistema
│   ├── benefits.css              # Grid de 6 beneficios
│   ├── testimonials.css          # 3 testimonios de clientes
│   ├── booking.css               # Sección de contacto y formulario principal
│   └── agendar.css               # Estilos del formulario de agendamiento (reservados para uso futuro)
│
└── js/
    ├── main.js                   # ★ Punto de entrada JS — contiene toda la lógica activa
    ├── app.js                    # Duplicado de referencia de main.js (no activo en producción)
    ├── mobile-menu.js            # Módulo ES6 de referencia (no activo en producción)
    ├── form.js                   # Módulo ES6 de referencia (no activo en producción)
    ├── forms.js                  # Módulo ES6 de referencia (no activo en producción)
    └── scroll.js                 # Módulo ES6 de referencia (no activo en producción)
```

> **★ Archivo JS activo:** Toda la lógica del sitio vive en `js/main.js`. Se carga como script
> clásico (sin `type="module"`) para compatibilidad directa con `file:///` sin necesidad de servidor local.
> Los demás archivos `.js` son módulos ES6 de referencia disponibles si el proyecto migra a un bundler.

> **★ Estructura CSS plana:** Los archivos CSS están todos en `/css/` sin subdirectorios.
> El orden de `@import` en `main.css` garantiza la cascada correcta.

---

## 🎯 Características

- **Diseño responsivo** con media queries para mobile, tablet y desktop
- **Hero parallax** — efecto de profundidad con mouse (3 planos) y scroll
- **Foto real del equipo** en la sección About con animación de reveal
- **Animaciones de entrada** con CSS3 (fade-up, float, pulseGlow, scroll reveal vía IntersectionObserver)
- **Formulario de contacto** con validación en cliente
- **Menú móvil** funcional con JavaScript vanilla
- **CSS modular** — un archivo por responsabilidad, un `@import` central
- **Botón flotante de WhatsApp** con tooltip
- **Toast de confirmación** al enviar formularios
- **Tema oscuro premium** con acentos dorados/naranjas
- **Accesibilidad** — `aria-label`, HTML semántico, `prefers-reduced-motion`

---

## 🚀 Cómo usar

```bash
# Opción A — abrir directamente (sin servidor)
Doble clic en index.html  →  se abre en el navegador

# Opción B — servidor local recomendado para desarrollo
npx serve .           # Node
python -m http.server # Python
```

> Con `file:///` todo funciona salvo el hot-reload. Para desarrollo activo
> se recomienda un servidor local.

---

## 📝 Secciones

| ID              | Sección           | Descripción                                                              |
|-----------------|-------------------|--------------------------------------------------------------------------|
| `#hero`         | Hero              | Propuesta de valor, estadísticas, tarjeta de garantía y fondo parallax   |
| `#about`        | Nuestra historia  | Historia del equipo, foto real y 4 características clave                 |
| `#services`     | Servicios         | 6 servicios: paneles, inversores, baterías, mantenimiento, calentadores, bombeo |
| `#how`          | Cómo trabajamos   | 4 pasos del proceso + diagrama interactivo del sistema fotovoltaico      |
| `#benefits`     | Beneficios        | 6 beneficios concretos para el cliente cubano                            |
| `#testimonials` | Testimonios       | 3 testimonios de clientes reales                                         |
| `#contact`      | Contacto          | Formulario de consulta + datos de contacto y redes sociales              |
| —               | Footer            | Navegación secundaria, listado de servicios e información legal          |

> **Nota:** La sección `#agendar` (agendamiento de visita técnica con fecha y hora) fue retirada
> del HTML activo. Sus estilos (`agendar.css`) y lógica JS (`initAgendarForm()`) se conservan
> en el código por si se reactiva en el futuro.

---

## 🎨 Paleta de colores

| Variable           | Valor              | Uso                            |
|--------------------|--------------------|--------------------------------|
| `--brand-400`      | `#e8c060`          | Acentos secundarios            |
| `--brand-500`      | `#c89830`          | Color de marca principal       |
| `--brand-600`      | `#a87818`          | Hover y gradientes             |
| `--brand-700`      | `#745010`          | Estados activos                |
| `--bg`             | `#0a0a0a`          | Fondo principal                |
| `--bg-card`        | rgba(10,10,10,0.3) | Fondo de tarjetas              |
| `--bg-card-solid`  | `#0e0e0e`          | Fondo sólido de tarjetas       |
| `--border`         | rgba blanco 5%     | Bordes sutiles                 |
| `--border-light`   | rgba blanco 10%    | Bordes visibles                |
| `--text`           | `#e5e5e5`          | Texto principal                |
| `--text-secondary` | `#9ca3af`          | Texto secundario               |
| `--text-muted`     | `#6b7280`          | Texto apagado                  |
| `--text-dim`       | `#4b5563`          | Texto muy apagado              |

---

## 📱 Responsividad

| Breakpoint  | Cambios principales                                                       |
|-------------|---------------------------------------------------------------------------|
| ≤ 1024px    | Grids de 3 col → 2 col; estadísticas del hero ocultas                    |
| ≤ 768px     | Todos los grids → 1 col; menú hamburguesa; diagrama del sistema vertical  |
| ≤ 480px     | Hero compacto; botones full-width; títulos reducidos                      |

---

## 🖼️ Hero Parallax

El fondo del hero usa un sistema de parallax en dos modos:

**Mouse parallax** — al mover el cursor sobre el hero, el fondo se desplaza en dirección opuesta creando sensación de profundidad. Se activa con `mouseenter` y vuelve al centro con una ease cúbica en `mouseleave`.

**Scroll parallax** — al hacer scroll, el fondo sube más lento que el contenido (desplazamiento máximo de 90px). Se desactiva automáticamente cuando el mouse parallax está activo para que no se interfieran.

Ambos efectos respetan `prefers-reduced-motion`: si el usuario tiene activada la preferencia de movimiento reducido en su sistema, el parallax se desactiva completamente.

> **Nota técnica sobre la ruta de la imagen:** el `background-image` se declara directamente
> como `style=""` en el elemento `#heroBg` del HTML (`url('assets/images/hero-bg.webp')`).
> Esto garantiza que la ruta se resuelva siempre relativa a `index.html`,
> independientemente de la cadena de `@import` CSS — compatible con `file:///` y HTTP.

---

## ⚙️ Tecnologías

- HTML5 semántico
- CSS3 puro — sin frameworks
- JavaScript vanilla — sin librerías externas
- Google Fonts — Inter (300, 400, 500, 600)

---

## 🔧 Funciones JS activas (`js/main.js`)

| Función                | Descripción                                                              |
|------------------------|--------------------------------------------------------------------------|
| `initMobileMenu()`     | Abre/cierra menú móvil; cierra al hacer clic en cualquier enlace         |
| `initScrollReveal()`   | IntersectionObserver — anima `.reveal` al entrar en el viewport          |
| `initSmoothScroll()`   | Scroll suave a anclas `href="#..."` con offset de 100px para la nav      |
| `initFormValidation()` | Validación y envío simulado del formulario de contacto (`#contactForm`)  |
| `initAgendarForm()`    | Validación del formulario de agendamiento — inactivo, `#agendarForm` no existe en el HTML actual |
| `initHeroParallax()`   | Parallax de mouse (3 planos) + parallax de scroll sobre `.hero-bg`       |
| `showToast(msg)`       | Notificación temporal en esquina inferior derecha (4 segundos)           |
| `requestQuote(service)`| Preselecciona servicio en el formulario y hace scroll hasta `#contact`   |

---

## 📦 Cómo añadir una nueva sección

1. Crear `css/nueva-seccion.css`
2. Añadir `@import url('./nueva-seccion.css');` en `css/main.css` antes de `responsive.css`
3. Si necesita lógica JS, añadir la función en `js/main.js` y llamarla desde el `DOMContentLoaded`
4. Añadir el HTML semántico en `index.html` con `id` consistente

---

## 🗂️ Archivos de referencia (no activos en producción)

| Archivo             | Descripción                                                              |
|---------------------|--------------------------------------------------------------------------|
| `js/app.js`         | Copia funcional de `main.js` — disponible para refactorización futura    |
| `js/mobile-menu.js` | Versión modular ES6 de `initMobileMenu()`                                |
| `js/form.js`        | Versión modular ES6 de la validación de formularios                      |
| `js/forms.js`       | Variante adicional del módulo de formularios                             |
| `js/scroll.js`      | Versión modular ES6 de scroll reveal y smooth scroll                     |
| `css/agendar.css`   | Estilos de la sección de agendamiento (reservados)                       |

> Estos archivos están disponibles si el proyecto migra a un bundler (Vite, Webpack, etc.)
> o si se reactivan las funcionalidades asociadas.

---

## 📋 Convenciones de código

| Contexto      | Convención     | Ejemplo                 |
|---------------|----------------|-------------------------|
| Archivos      | `kebab-case`   | `how-it-works.css`      |
| Clases CSS    | `kebab-case`   | `.hero-title`           |
| IDs HTML      | `camelCase`    | `#contactForm`          |
| Variables JS  | `camelCase`    | `const mobileMenu`      |
| Funciones JS  | `camelCase`    | `initScrollReveal()`    |
| Variables CSS | `--kebab-case` | `--brand-500`           |
