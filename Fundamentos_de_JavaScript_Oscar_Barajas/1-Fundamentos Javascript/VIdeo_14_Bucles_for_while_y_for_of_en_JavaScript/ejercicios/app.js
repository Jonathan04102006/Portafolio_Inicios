/* 🟢 Ejercicio 1: Recorrer un arreglo con for
🎯 Objetivo:

Practicar el uso del bucle for para recorrer un arreglo usando índices.

📌 Instrucciones:
Crea un arreglo llamado numeros con los valores: [10, 20, 30, 40, 50].
Usa un bucle for para recorrer el arreglo.
En cada iteración debes imprimir:
El índice
El valor del número

El resultado debe verse así:

Índice 0: 10
Índice 1: 20
...
💡 Pista:
Usa numeros.length como condición del bucle. */
console.log("****************************************************************");
const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: ${numeros[i]}`);
}

/* 🟡 Ejercicio 2: Contador con while
🎯 Objetivo:

Entender cómo funciona el bucle while con una condición.

📌 Instrucciones:
Declara una variable contador inicializada en 1.
Usa un bucle while que se ejecute mientras contador sea menor o igual a 5.
En cada iteración:
Imprime: "Número actual: X"
Incrementa el contador en cada vuelta.
⚠️ Importante:
Si no incrementas el contador, tendrás un bucle infinito.
💡 Resultado esperado:
Número actual: 1
Número actual: 2
...
Número actual: 5 */
console.log("****************************************************************");
let contador = 1;

while (contador <= 5) {
    console.log(`Número actual: ${contador}`);
    contador++;
}

/* 🔵 Ejercicio 3: Recorrer elementos con for...of
🎯 Objetivo:

Usar for...of para recorrer directamente los valores de un arreglo.

📌 Instrucciones:
Crea un arreglo llamado colores con los valores:
['rojo', 'verde', 'azul', 'amarillo']
Usa for...of para recorrer el arreglo.
En cada iteración:
Imprime el color
Si el color es "azul":
Imprime: "Este es mi color favorito"
💡 Pista:
Usa una condición if dentro del bucle. */
console.log("****************************************************************");
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

for (let color of colores) {
    console.log(color);
    if (color === "azul") {
        console.log("Este es mi color favorito");
    }
}   