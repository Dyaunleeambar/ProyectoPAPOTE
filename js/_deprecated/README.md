# Archivos Deprecados

Esta carpeta contiene código legacy y referencia histórica.

**NO DEBEN SER IMPORTADOS NI USADOS** en el proyecto actual.

## Contenido

- `app.js` — Duplicado antiguo de `main.js`
- `mobile-menu.js` — Componente anterior (lógica ahora en `main.js`)
- `form.js`, `forms.js` — Validación anterior (ahora en `main.js`)
- `scroll.js` — Efectos de scroll anteriores (ahora en `main.js`)

## Cuándo usar esto

- **Referencia histórica:** Si necesitas ver cómo se estructuraba el código antes
- **Migración futura:** Si el proyecto migra a un bundler (Webpack, Vite, etc.)

Mientras tanto, toda la lógica activa está centralizada en `../main.js`.
