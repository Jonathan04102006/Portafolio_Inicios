// Arrays

const notas = ['Nota 1', 'Nota 2', 'Nota 3'];
const numeros = [1, 2, 3, 4, 5, 6];
const mixtos = [1, 'textp', null, true, {id: 1}];

// Crear (create)

// push()

notas.push('Nota 4');
console.log(notas);

// unshif()

notas.unshift('Nota 0');
console.log(notas);

// splice()

notas.splice(1,0, 'Notas 1.2')
console.log(notas);

// Leer (Read)

console.log(notas[0]);
console.log(notas[1]);
console.log(notas.length);

// Actualizar (Update)

const notas2 = ['Nota 1', 'Nota 2'];
notas2[1] = 'Nota 3';

console.log(notas2);

notas2.splice(1,0, 'Nota 4');
console.log(notas2);

// Eliminar (Delete)

const notas3 = ['Nota 1', 'Nota 2'];
console.log(notas3.pop());
console.log(notas3);

const notas4 = ['Nota 1', 'Nota 2'];
/* console.log(notas4.shift());
console.log(notas4); */
console.log(notas4.splice(1,1));
console.log(notas4);