# jmaranda2006.github.io
# DevIA - Documentación del Proyecto Web

Este documento detalla el funcionamiento y estructura del proyecto web "DevIA", una página ficticia diseñada para una empresa de desarrollo de inteligencia artificial. A continuación se explican en profundidad todos los elementos incluidos en los archivos principales del proyecto: HTML y CSS de la página principal, y HTML y CSS de la página de contacto.

---

## Archivo HTML principal (`index.html`)

### 1. Estructura general

Contiene la declaración del tipo de documento y la estructura estándar con etiquetas `<html>`, `<head>` y `<body>`. Dentro del `<head>` se incluye la configuración de metadatos, el título de la página, enlaces al archivo de estilos CSS, y en su caso, fuentes o iconos externos. En `<body>` se dispone todo el contenido visible de la web.

### 2. Cabecera (`<header>`)

- **Logo**: Aparece alineado a la izquierda; al hacer clic sobre él, redirige a la página principal.
- **Menú de navegación**: Conjunto de enlaces a secciones internas de la misma página. Los enlaces tienen efecto *hover* para mejorar la experiencia del usuario.

### 3. Sección de inicio (Hero)

- Imagen de fondo que ocupa toda la pantalla inicial.
- Texto promocional que presenta la esencia de la empresa.
- Botón que enlaza a la página de contacto para atraer posibles clientes.

### 4. Sobre nosotros

Breve descripción sobre la empresa, su propósito, valores y objetivos. Se utilizan elementos visuales que refuerzan la identidad de marca.

### 5. Logros

Sección con tarjetas que presentan cifras o hitos alcanzados por la empresa: proyectos completados, clientes, reconocimiento, etc.

### 6. Reseñas

Tarjetas individuales con opiniones de clientes satisfechos. Cada tarjeta contiene el nombre del cliente, la reseña textual y un posible avatar.

### 7. Metodología

Describe paso a paso el método de trabajo de la empresa. Los pasos pueden representarse con gráficos o iconos alineados horizontal o verticalmente.

### 8. Pie de página (Footer)

Contiene:

- Navegación secundaria.
- Información de contacto: teléfono, email, dirección.
- Enlaces a redes sociales mediante iconos.

---

## Archivo CSS principal (`estilos.css`)

### 1. Estilos globales

Define colores, tipos de letra, márgenes, rellenos, tamaño de fuente base y estilos para elementos como `body`, `a`, `h1`, `p`, etc.

### 2. Cabecera

- Fondo semi-transparente o fijo con color.
- Alineación horizontal de logo y menú.
- Efectos *hover* para los enlaces.

### 3. Sección de inicio

- Fondo con `background-size: cover`.
- Texto principal con gran tamaño y contraste.
- Botón con transiciones visuales al interactuar.

### 4. Tarjetas (logros y reseñas)

- Diseño con sombras, bordes redondeados y distribución en cuadrícula.
- Espaciado uniforme y tipografía legible.

### 5. Responsividad

- Uso de `@media queries` para adaptar la web a dispositivos móviles.
- Reorganiza columnas y oculta/ajusta elementos según el ancho de pantalla.

### 6. Pie de página

- Fondo oscuro con texto claro.
- Columnas para organizar enlaces y datos.
- Iconos sociales con animaciones sutiles.

---

## Archivo HTML de contacto (`contacto.html`)

### 1. Cabecera

- Igual a la de `index.html`, para coherencia visual y funcional.

### 2. Formulario de contacto

Incluye los siguientes campos:

- Nombre (input de texto)
- Correo electrónico (input tipo email)
- Asunto (input de texto)
- Mensaje (textarea)
- Botón para enviar

Todos los elementos están envueltos en un formulario con diseño centrado y accesible.

### 3. Confirmación de envío

Espacio previsto para mostrar un mensaje de éxito tras enviar el formulario (si se implementa con JS o backend).

---

## Archivo CSS de contacto (`contacto.css`)

### 1. Estilos generales

- Fondo neutro.
- Contenedor del formulario centrado.
- Tipografía uniforme.

### 2. Inputs y textarea

- Bordes suaves y sombras ligeras.
- Espaciado entre campos.
- Cambio de estilo al hacer foco (`focus`).

### 3. Botón de envío

- Color llamativo.
- Animaciones al pasar el cursor.
- Estilo consistente con el diseño general de la web.

### 4. Adaptabilidad

- El formulario se adapta a móviles y pantallas pequeñas.
- Campos apilados verticalmente y márgenes ajustados.

---

Este README ofrece una descripción detallada de todos los componentes y estilos aplicados en el proyecto web **DevIA**, facilitando su comprensión, mantenimiento y ampliación.
