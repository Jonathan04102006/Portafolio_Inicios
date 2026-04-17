// Métodos de orden superior

// Map()

const notas = [
    { id: 1, title: 'Nota 1', content: 'Contenido uno' },
    { id: 1, title: 'Nota 2', content: 'Contenido dos' },
    { id: 1, title: 'Nota 3', content: 'Contenido tres' }
];

const titulos = notas.map((nota) => nota.title);
console.log(titulos);

const notaConFecha = notas.map((nota) => ({
    ...nota,
    fechaCreacion: Date.now()
}));

console.log(notaConFecha);

// Filter()

const notas2 = [
    { id: 1, title: 'Nota 1', content: 'Contenido uno', esFavorita: true },
    { id: 1, title: 'Nota 2', content: 'Contenido dos', esFavorita: true },
    { id: 1, title: 'Nota 3', content: 'Contenido tres', esFavorita: true }
];

const favoritas = notas2.filter((nota) => nota.esFavorita);

/* console.log(favoritas); */

const titulo = notas2.filter((nota) => nota.title.toLocaleLowerCase().includes('nota 1'));
console.log(titulo);