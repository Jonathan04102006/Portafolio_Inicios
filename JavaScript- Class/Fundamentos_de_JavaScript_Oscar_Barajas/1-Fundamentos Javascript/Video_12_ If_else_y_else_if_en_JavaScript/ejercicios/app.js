/* 🧠 Ejercicio 1: Clasificación de número
🎯 Instrucciones:

Crea una variable llamada numero.
Debes evaluar:

Si el número es mayor que 0 → mostrar "Número positivo"
Si el número es igual a 0 → mostrar "Número neutro"
Si el número es menor que 0 → mostrar "Número negativo"
📌 Ejemplo esperado:
const numero = -5;

// Resultado: Número negativo */
console.log("****************************************************************");
const numero = 0;

if (numero > 0) {
    console.log(`Número positivo`);
} else if ( numero == 0) {
    console.log(`Número neutro`);
} else {
    console.log(`Número negativo`);
}

/* 🧠 Ejercicio 2: Sistema de calificaciones
🎯 Instrucciones:

Crea una variable llamada nota (del 0 al 100).
Evalúa lo siguiente:

Si la nota es 90 o más → "Excelente"
Si es entre 70 y 89 → "Aprobado"
Si es menor a 70 → "Reprobado"
📌 Ejemplo esperado:
const nota = 85;

// Resultado: Aprobado */
console.log("****************************************************************");
const nota = 69;

if (nota >= 90) {
    console.log(`Excelente`);
} else if (nota >= 70) {
    console.log(`Aprobado`);
} else if (nota <= 69) {
    console.log(`Reprobado`);
} else {
    console.log(`No hay nota`);
}

/* 🧠 Ejercicio 3: Acceso a una discoteca
🎯 Instrucciones:

Crea una variable edad.
Evalúa:

Si es mayor a 21 → "Puedes entrar y beber alcohol"
Si es entre 18 y 21 → "Puedes entrar pero no beber alcohol"
Si es menor de 18 → "No puedes entrar"
📌 Ejemplo esperado:
const edad = 19;

// Resultado: Puedes entrar pero no beber alcohol */
console.log("****************************************************************");
const edad = 17;

if (edad > 21) {
    console.log(`Puedes entrar y beber alcohol`);
} else if (edad >= 18) {
    console.log(`Puedes entrar pero no beber alcohol`);
} else {
    console.log(`No puedes entrar`);
}