# Itzel & Julian — Invitación de boda

Invitación web estática con formulario RSVP personalizado.

## Estructura

- `index.html` — estructura y contenido.
- `styles.css` — diseño visual y responsive.
- `script.js` — navegación entre vistas y envío del RSVP.
- `apps-script/Code.gs` — backend mínimo para guardar respuestas en Google Sheets.

## Prueba local

Puedes abrir `index.html` directamente en el navegador.

Mientras `GOOGLE_SCRIPT_URL` esté vacío, el formulario funciona en modo demostración:
- no guarda datos;
- simula el envío;
- muestra la pantalla de confirmación.

## Conectar Google Sheets

1. Crea un Google Sheet.
2. Ve a **Extensiones → Apps Script**.
3. Copia el contenido de `apps-script/Code.gs`.
4. Guarda el proyecto.
5. Ve a **Implementar → Nueva implementación**.
6. Selecciona **Aplicación web**.
7. Ejecutar como: **tú**.
8. Quién tiene acceso: **Cualquiera**.
9. Implementa y copia la URL que termina en `/exec`.
10. Pégala en `script.js`:

```js
const GOOGLE_SCRIPT_URL = "TU_URL_AQUI";
```

La primera respuesta creará automáticamente la hoja `Confirmaciones` con estas columnas:

- Fecha de registro
- Nombre
- Asistencia
- Timestamp

## Publicación

Como sólo usamos HTML/CSS/JS, después podemos publicarla en GitHub Pages, Netlify o Vercel sin agregar un servidor propio.

## Próximas mejoras posibles

- Número de acompañantes.
- Restricción de invitados autorizados.
- Código/nombre de invitación.
- Mensaje personalizado por familia.
- Ubicación y botón de Google Maps.
- Cuenta regresiva.
- Galería/fotos.
- Música opcional.
