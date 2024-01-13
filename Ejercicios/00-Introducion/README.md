# Relación de Ejercicios JSX

<p align="center">
  <img src="logoReadme.jpeg" alt="Logo" width="400">
</p>


## Ejercicio 1: Renderizado condicional
Renderiza un elemento `<p>` con el texto "Bienvenido" si una variable `isLoggedIn` es true, de lo contrario muestra "Por favor, inicia sesión".

## Ejercicio 2: Uso de listas
Renderiza una lista (`<ul>`) de elementos (`<li>`) usando `map()` en un array de nombres.

## Ejercicio 3: Uso de eventos
Añade un evento `onClick` a un botón que muestre un mensaje en la consola al ser presionado.

## Ejercicio 4: Uso de componentes
Crea un componente `Header` que renderice un encabezado con un título.

## Ejercicio 5: Estilo en JSX
Aplica estilos en línea a un elemento usando el atributo `style`.

## Ejercicio 6: Uso avanzado de props
Crea un componente `CustomButton` que acepte props para personalizar su apariencia. Debe admitir props para el color de fondo, el texto y un evento `onClick`.

## Ejercicio 7: Renderizado condicional avanzado
Crea un componente `ConditionalRender` que acepte una prop `condition`. Si `condition` es true, muestra un párrafo con el texto "Condición verdadera"; de lo contrario, muestra un párrafo con el texto "Condición falsa".

## Ejercicio 8: Composición de componentes
Crea un componente `Card` que acepte props para el título (`title`), el cuerpo (`body`) y un footer (`footer`). Este componente renderizará una tarjeta con las secciones de título, cuerpo y pie.

## Ejercicio 9: Manipulación avanzada de elementos
Crea un componente `ToggleVisibility` que al hacer clic en un botón muestre u oculte un elemento `<p>`.

## Ejercicio 10: Uso de Fragmentos y Listas
Crea un componente `UserList` que acepte una lista de usuarios como props y renderice una lista ordenada (`<ol>`) con los nombres de usuarios. Además, cada nombre de usuario debe estar rodeado por un Fragmento y un enlace (`<a>`) que muestre el índice del usuario.

## Ejercicio 11: Renderizado condicional avanzado con expresiones lógicas
Crea un componente `ConditionalRenderAdvanced` que acepte dos props: `isLoggedIn` (booleano) y `userRole` (cadena de texto). Este componente debe renderizar un mensaje diferente según las siguientes condiciones:
- Si `isLoggedIn` es true, muestra un mensaje de bienvenida para el usuario.
- Si `isLoggedIn` es false, muestra un mensaje solicitando al usuario que inicie sesión.
- Si el usuario está autenticado y su `userRole` es "admin", muestra un mensaje adicional de privilegios de administrador.

---

Módulo: Desarrollo Web en Entorno Cliente DAW - IES HLanz - Profesor: Isaías FL
