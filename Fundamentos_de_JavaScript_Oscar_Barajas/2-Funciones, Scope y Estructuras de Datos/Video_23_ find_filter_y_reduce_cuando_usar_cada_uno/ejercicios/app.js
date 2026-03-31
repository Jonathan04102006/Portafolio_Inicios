/* 🟢 Ejercicio 1: Usar find() (buscar un solo elemento)

🎯 Objetivo:
Aprender a usar find() para obtener UN solo elemento que cumpla una condición.

📝 Instrucciones:

Dado el siguiente arreglo:

const notas = [
    { id: 1, title: 'Nota 1', esFavorita: true },
    { id: 2, title: 'Nota 2', esFavorita: false },
    { id: 3, title: 'Nota 3', esFavorita: true }
];

👉 Debes:

Buscar la nota que tenga id === 2
Guardarla en una variable llamada notaEncontrada
Mostrarla en consola

💡 Pista:

find() devuelve el primer elemento que coincide
Si no encuentra nada → devuelve undefined

✅ Salida esperada:

{ id: 2, title: 'Nota 2', esFavorita: false } */
console.log("****************************************************************");
const notas = [
    { id: 1, title: 'Nota 1', esFavorita: true },
    { id: 2, title: 'Nota 2', esFavorita: false },
    { id: 3, title: 'Nota 3', esFavorita: true }
];

const notaEncontrada = notas.find((n) => n.id === 2);
console.log(notaEncontrada);

/* 🟡 Ejercicio 2: Usar filter() (filtrar varios elementos)

🎯 Objetivo:
Aprender a usar filter() para obtener VARIOS elementos que cumplan una condición.

📝 Instrucciones:

Usando el mismo arreglo:

const notas = [
    { id: 1, title: 'Nota 1', esFavorita: true },
    { id: 2, title: 'Nota 2', esFavorita: false },
    { id: 3, title: 'Nota 3', esFavorita: true }
];

👉 Debes:

Obtener todas las notas que sean favoritas (esFavorita === true)
Guardarlas en una variable llamada favoritas
Mostrar el resultado en consola

💡 Pista:

filter() devuelve un nuevo arreglo
Puede traer 0, 1 o muchos elementos

✅ Salida esperada:

[
  { id: 1, title: 'Nota 1', esFavorita: true },
  { id: 3, title: 'Nota 3', esFavorita: true }
] */
console.log("****************************************************************");
const notas1 = [
    { id: 1, title: 'Nota 1', esFavorita: true },
    { id: 2, title: 'Nota 2', esFavorita: false },
    { id: 3, title: 'Nota 3', esFavorita: true }
];

const favoritas = notas1.filter((n) => n.esFavorita);
console.log(favoritas);

/* 🔵 Ejercicio 3: Usar reduce() (reducir a un valor)

🎯 Objetivo:
Aprender a usar reduce() para transformar un arreglo en un solo valor.

📝 Instrucciones:

Dado el siguiente arreglo:

const numeros = [1, 2, 3, 4, 5];

👉 Debes:

Sumar todos los números usando reduce()
Guardar el resultado en una variable llamada total
Mostrarlo en consola

💡 Pista:

reduce() usa un acumulador (acc)
El segundo parámetro es el valor inicial

✅ Salida esperada:

15 */
console.log("****************************************************************");
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((n1, n2) => n1 + n2, 0);

console.log(suma);