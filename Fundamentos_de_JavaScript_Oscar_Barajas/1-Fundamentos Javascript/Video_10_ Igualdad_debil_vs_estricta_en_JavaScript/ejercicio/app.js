/* 🧠 Ejercicio 1: Predicción de resultados (Coerción vs comparación estricta)
🎯 Objetivo:

Entender cómo JavaScript convierte tipos automáticamente en == y cómo === evita eso.

📌 Instrucciones:

Analiza el siguiente código sin ejecutarlo primero y escribe qué resultado crees que mostrará cada línea.

console.log('10' == 10);
console.log('10' === 10);

console.log(false == '0');
console.log(false === '0');

console.log(null == undefined);
console.log(null === undefined);
❓ Preguntas:
¿Qué resultados son true y cuáles false?
¿Por qué == da resultados diferentes a ===?
¿En qué casos JavaScript hace coerción de tipos? */
console.log("****************************************************************");
console.log('10' == 10); // true
console.log('10' === 10); // false

console.log(false == '0'); // true
console.log(false === '0'); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

/* 🧠 Ejercicio 2: Corrige el código (Bug por uso incorrecto de ==)
🎯 Objetivo:

Identificar errores comunes al usar == en lugar de ===.

📌 Instrucciones:

El siguiente código tiene un comportamiento inesperado. Corrígelo usando igualdad estricta (===).

const password = 1234;

if (password == '1234') {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado');
}
❓ Preguntas:
¿Por qué el código permite el acceso aunque el tipo sea diferente?
¿Qué cambio debes hacer para que la validación sea correcta?
¿Qué resultado obtienes después de corregirlo? */
console.log("****************************************************************");
const password = 1234;

if (password === '1234') {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado');
}

/* 🧠 Ejercicio 3: Crea tu propio comparador
🎯 Objetivo:

Aplicar lo aprendido creando lógica condicional con == y ===.

📌 Instrucciones:

Crea una función llamada compararValores que reciba dos parámetros y muestre:

Si son iguales con ==
Si son iguales con ===
💻 Ejemplo de estructura:
function compararValores(a, b) {
    // comparación débil
    // comparación estricta
}

compararValores('5', 5);
compararValores(true, 1);
compararValores(null, undefined);
📌 Salida esperada (ejemplo):
Comparación con == : true
Comparación con === : false
❓ Preguntas:
¿Qué diferencias observas en los resultados?
¿En qué situaciones usarías === en lugar de ==?
¿Cuál es la mejor práctica en JavaScript moderno?
🚀 Consejo clave (muy importante)

👉 En JavaScript moderno, casi siempre deberías usar ===
porque evita errores inesperados por conversión de tipos. */
console.log("****************************************************************");
function compararValores(a, b) {
    console.log("Comparación con == :", a == b);
    console.log("Comparación con === :", a === b);
}

compararValores('5', 5);
compararValores(true, 1);
compararValores(null, undefined);