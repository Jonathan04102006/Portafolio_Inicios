/* 🧩 Ejercicio 1: Mensaje personalizado con Template Literals
🎯 Objetivo:

Practicar la interpolación de variables usando ${}.

📌 Instrucciones:
Declara tres variables:
nombreUsuario
lenguaje
nivel (por ejemplo: "básico", "intermedio", "avanzado")

Crea un mensaje usando template literals que diga:

"Hola [nombreUsuario], estás aprendiendo [lenguaje] en nivel [nivel]"

Muestra el resultado en consola.
🧪 Ejemplo esperado:
Hola Juan, estás aprendiendo JavaScript en nivel básico */
console.log("****************************************************************");
let nombreUsuario = "Ariel";
let lenguaje = "español";
let nivel = "básico";

console.log(`Hola ${nombreUsuario}, estás aprendiendo ${lenguaje} en nivel ${nivel}`);

/* 🧩 Ejercicio 2: Cálculo dinámico dentro de Template Literals
🎯 Objetivo:

Usar expresiones dentro de ${}.

📌 Instrucciones:
Declara:
producto (string)
precio
cantidad

Usa un template literal para mostrar:

"Compraste [cantidad] producto
. Total a pagar: $[total]"

El total debe calcularse dentro del template literal (precio * cantidad).
🧪 Ejemplo esperado:
Compraste 2 libros(s). Total a pagar: $40 */
console.log("****************************************************************");
let producto = "queso";
let precio = 3.99;
let cantidad = 1;
console.log(`Compraste ${cantidad} ${producto}.\nTotal a pagar: ${precio}`);

/* 🧩 Ejercicio 3: Texto multilínea con formato
🎯 Objetivo:

Aplicar template literals para crear textos multilínea.

📌 Instrucciones:
Crea variables:
titulo
contenido
Genera una nota usando template literals que tenga este formato:
# [titulo]

[contenido]

- Punto 1
- Punto 2
Imprime la nota en consola.
🧪 Ejemplo esperado:
# Mi Nota

Aprendiendo Template Literals

- Punto 1
- Punto 2 */
console.log("****************************************************************");
const titulo = "Mi Nota";
const contenido = "Aprendiendo Template Literals";

const nota = `# ${titulo}

${contenido}

- Punto 1
- Punto 2`;

console.log(nota);