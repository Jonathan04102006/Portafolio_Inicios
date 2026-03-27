/* 🧠 Ejercicio 1: Calculadora básica
🎯 Objetivo:

Practicar los operadores: suma, resta, multiplicación, división y potencia.

📌 Instrucciones:
Declara dos variables num1 y num2.
Realiza las siguientes operaciones:
Suma
Resta
Multiplicación
División
Potencia (**)
Muestra cada resultado en consola.
💻 Ejemplo esperado:
let num1 = 10;
let num2 = 5;

// Aquí haces las operaciones
✅ Resultado esperado en consola:
Suma: 15
Resta: 5
Multiplicación: 50
División: 2
Potencia: 100000 */
console.log("****************************************************************");
let num1 = 10;
let num2 = 5;

console.log("Suma:", num1 + num2)
console.log("Resta:", num1 - num2)
console.log("Multiplicacion", num1 * num2)
console.log("Division:", num1 / num2)
console.log("Potencia:", num1 ** num2)

/* 🔄 Ejercicio 2: Modificando valores con operadores de asignación
🎯 Objetivo:

Usar operadores como +=, -=, *=, /=.

📌 Instrucciones:
Declara una variable valor con número inicial.
Aplica las siguientes operaciones:
Sumar 10 usando +=
Restar 5 usando -=
Multiplicar por 2 usando *=
Dividir entre 3 usando /=
Imprime el valor después de cada operación.
💻 Ejemplo:
let valor = 20;

// Aplica operaciones aquí
💡 Tip:

Recuerda que:

valor += 10; // equivale a valor = valor + 10 */
console.log("****************************************************************");
let valor = 20;

valor += 10;
console.log(valor); // 30

valor -= 5;
console.log(valor); // 25

valor *= 2;
console.log(valor); // 50

valor /= 3;
console.log(valor); // 16.666666666666668   
/* 🔢 Ejercicio 3: Contador y casos especiales
🎯 Objetivo:

Practicar incremento, decremento y entender Infinity y NaN.

📌 Instrucciones:
Crea una variable contador iniciando en 0.
Incrementa el contador 3 veces usando ++.
Decrementa el contador 2 veces usando --.
Muestra el valor final.
Luego imprime en consola:
1 / 0
-1 / 0
0 / 0
"texto" * 2
💻 Ejemplo:
let contador = 0;

// Incrementos y decrementos

console.log(contador);

// Casos especiales */
console.log("****************************************************************");
let contador = 0;
contador++;
console.log(contador);
contador--;
console.log(contador);