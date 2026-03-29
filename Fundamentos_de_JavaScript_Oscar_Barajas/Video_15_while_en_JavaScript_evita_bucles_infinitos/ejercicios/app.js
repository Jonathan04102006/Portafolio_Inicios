/* 🧠 Ejercicio 1: Contador controlado
🎯 Objetivo:

Mostrar números del 1 al 5 usando while.

📌 Instrucciones:
Crea una variable contador iniciando en 1.
Usa un while para imprimir los números hasta 5.
Asegúrate de incrementar el contador dentro del bucle.
⚠️ Importante:

Si olvidas el incremento (contador++), el bucle será infinito.

💻 Ejemplo esperado:
1
2
3
4
5 */
console.log("****************************************************************");
let contador = 1;

while (contador  < 6) {
    console.log(contador);
    contador++;
}

/* 🧠 Ejercicio 2: Validación con límite de intentos
🎯 Objetivo:

Simular intentos de contraseña con máximo 3 intentos.

📌 Instrucciones:
Declara una variable intentos = 0.
Usa un while que se ejecute mientras intentos < 3.
En cada vuelta muestra: "Intento número: X".
Incrementa intentos en cada iteración.
Cuando termine el bucle, muestra "Acceso bloqueado".
⚠️ Importante:

Si no incrementas intentos, el programa nunca terminará.

💻 Ejemplo esperado:
Intento número: 1
Intento número: 2
Intento número: 3
Acceso bloqueado */
console.log("****************************************************************");
let intentos = 0;

while (intentos < 3) {
    console.log(`Intento número: ${intentos}`);
    intentos++;
}


/* 🧠 Ejercicio 3: Suma acumulativa con condición
🎯 Objetivo:

Sumar números hasta que la suma sea mayor a 10.

📌 Instrucciones:
Declara suma = 0 y numero = 1.
Usa un while que se ejecute mientras suma <= 10.
En cada vuelta:
Suma el número actual a suma.
Incrementa numero.
Muestra el valor final de suma.
⚠️ Importante:

Si no incrementas numero, sumarás siempre el mismo valor → bucle infinito.

💻 Ejemplo esperado:
Suma final: 15 */
console.log("****************************************************************");
suma = 0;
number = 1;

while (suma <= 10) {
    suma += number;
    number++;
}
console.log("Suma final:", suma);