const notas3 = [
    { id: 1, title: 'Nota 1', content: 'Contenido uno', esFavorita: true },
    { id: 1, title: 'Nota 2', content: 'Contenido dos', esFavorita: false },
    { id: 1, title: 'Nota 3', content: 'Contenido tres', esFavorita: true }
];

const nota = notas3.find((n) => n.id === 2);
console.log(nota);

// reduce()

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, n) => acc + n, 0);

console.log(suma);