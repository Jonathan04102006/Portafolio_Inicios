/* 🧠 Ejercicio 1: Detectando coerción implícita
🎯 Objetivo:

Entender cómo JavaScript convierte tipos automáticamente en operaciones.

📌 Instrucciones:

Analiza el siguiente código y antes de ejecutarlo, escribe en comentarios qué crees que va a imprimir cada línea.

// Ejercicio 1

console.log('10' + 5);     // ?
console.log('10' - 5);     // ?
console.log(false + 1);    // ?
console.log(true + true);  // ?
console.log('20' * '2');   // ?
✅ Lo que debes hacer:
Escribe tu respuesta esperada en comentarios.
Ejecuta el código.
Explica por qué ocurre cada resultado.
💡 Pista:
+ puede concatenar strings.
Otros operadores (-, *, /) fuerzan conversión a número. */
console.log("****************************************************************");
console.log('10' + 5);     // 150
console.log('10' - 5);     // 5
console.log(false + 1);    // 1
console.log(true + true);  // 2
console.log('20' * '2');   // 40

/* 🔄 Ejercicio 2: Corrigiendo errores de coerción
🎯 Objetivo:

Evitar errores causados por coerción implícita usando conversión explícita.

📌 Instrucciones:

El siguiente código tiene resultados inesperados. Corrígelo usando Number(), parseInt() o parseFloat().

// Ejercicio 2

const valor1 = '100';
const valor2 = '50';

const resultado = valor1 + valor2;

console.log('Resultado:', resultado);
❌ Problema:

El resultado actual es "10050" (concatenación).

✅ Lo que debes hacer:
Convierte correctamente los valores a número.
Haz que el resultado sea 150.
Imprime también el tipo de dato del resultado.
💡 Extra:

Intenta hacerlo usando:

Number()
parseInt() */
console.log("****************************************************************");
const valor1 = '100';
const valor2 = '50';
const resultado = valor1 + valor2;
console.log('Resultado:', resultado);

const numero1 = Number(valor1);
const numero2 = Number(valor2);
const resultado1 = numero1 + numero2;
console.log(typeof resultado1, resultado1);

const float = parseFloat(resultado1);
console.log(float);

/* 🔍 Ejercicio 3: Conversión explícita completa
🎯 Objetivo:

Practicar diferentes formas de convertir tipos de datos.

📌 Instrucciones:

Completa el siguiente código para que todas las conversiones funcionen correctamente.

// Ejercicio 3

const dato1 = '25.8';
const dato2 = '100px';
const dato3 = 500;

// 1. Convertir dato1 a número decimal
const numeroDecimal = // ?

// 2. Convertir dato2 a entero (solo el número)
const numeroEntero = // ?

// 3. Convertir dato3 a string
const texto = // ?

console.log(numeroDecimal, typeof numeroDecimal);
console.log(numeroEntero, typeof numeroEntero);
console.log(texto, typeof texto);
✅ Lo que debes lograr:
numeroDecimal → 25.8 (number)
numeroEntero → 100 (number)
texto → "500" (string)
💡 Pista:
Usa parseFloat()
Usa parseInt()
Usa String() */
console.log("****************************************************************");
const dato1 = '25.8';
const dato2 = '100px';
const dato3 = 500;

const number1 = parseFloat(dato1);
console.log(number1);

const number2 = parseInt(dato2);
console.log(number2);

const number3 = String(dato3);
console.log(number3);