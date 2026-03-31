/* 🧠 Ejercicio 1: Crear y modificar un array
🎯 Objetivo:

Practicar cómo crear un array y usar métodos como push, unshift y splice.

📋 Instrucciones:
Crea un array llamado frutas con 3 frutas.
Agrega una fruta al final usando push.
Agrega una fruta al inicio usando unshift.
Inserta una fruta en la posición 2 usando splice.
Muestra el array en consola después de cada cambio.
💻 Ejemplo esperado (estructura):
const frutas = ['Manzana', 'Banana', 'Naranja'];

// Agregar al final
// Tu código aquí

// Agregar al inicio
// Tu código aquí

// Insertar en posición específica
// Tu código aquí

console.log(frutas); */
console.log("****************************************************************");
const frutas = ['manzana', 'pera', 'uva'];
frutas.push('calabaza');
frutas.shift();
frutas.splice(1,1, 'banana');
console.log(frutas);


/* 📖 Ejercicio 2: Leer datos de un array
🎯 Objetivo:

Aprender a acceder a valores y propiedades de un array.

📋 Instrucciones:
Crea un array llamado colores con al menos 4 colores.
Muestra:
El primer elemento
El último elemento
La longitud del array
Usa console.log para cada resultado.
💻 Ejemplo esperado:
const colores = ['Rojo', 'Azul', 'Verde', 'Amarillo'];

// Mostrar primer color
// Tu código aquí

// Mostrar último color
// Tu código aquí

// Mostrar longitud
// Tu código aquí */
console.log("****************************************************************");
const colores = ['Rojo', 'Azul', 'Verde', 'Amarillo'];
console.log(colores[0]);
console.log(colores[3]);
console.log(colores.length);

/* 🔄 Ejercicio 3: Actualizar y eliminar elementos
🎯 Objetivo:

Practicar cómo modificar y eliminar elementos de un array.

📋 Instrucciones:
Crea un array llamado numeros con 5 números.
Cambia el segundo valor por otro número.
Elimina:
El último elemento usando pop
El primer elemento usando shift
Elimina un elemento en una posición específica usando splice.
Muestra el array después de cada operación.
💻 Ejemplo esperado:
const numeros = [10, 20, 30, 40, 50];

// Actualizar segundo valor
// Tu código aquí

// Eliminar último elemento
// Tu código aquí

// Eliminar primer elemento
// Tu código aquí

// Eliminar elemento específico
// Tu código aquí

console.log(numeros); */
console.log("****************************************************************");
const numeros = [10, 20, 30, 40, 50];
numeros.splice(1,1, 20.1);
numeros.pop()
numeros.shift()
numeros.splice(1,1);
console.log(numeros);