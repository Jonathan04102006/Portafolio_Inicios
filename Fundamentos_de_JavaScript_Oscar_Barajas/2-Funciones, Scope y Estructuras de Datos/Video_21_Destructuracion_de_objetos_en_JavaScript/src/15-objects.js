// Objects

const nota = {
    id: 1,
    title: 'Mi primera nota',
    cotent: 'Contenido de la nota',
    createAt: Date.now()
};
console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo]);
console.log(nota.autor?.name);

const nota2 = {
    id: 1,
    title: 'Mi primera nota',
    cotent: 'Contenido de la nota',
    createAt: Date.now()
};

const id = nota2.id;
const title = nota2.title;
console.log(id, title);

const{ title: titulo, content } = nota2;
console.log(titulo, content);

// Spead

const nota3 = {id: 2, title: 'Hola'};
const data = { esAriel: true };

const copia = {...nota3};

console.log(nota3);
console.log(copia);

const notaActualizada = {
    ... nota3,
    ... data,
    edad: 19
};

console.log(notaActualizada);

// Verificar

const nota4 = {
    id: 1,
    title: 'Mi primera nota',
    cotent: 'Contenido de la nota',
    createAt: Date.now()
};

console.log('title' in nota4);

// Object.keys

console.log(Object.keys(nota4));
/* [ 'id', 'title', 'cotent', 'createAt' ] */

// Object.values

console.log(Object.values(nota4));
/* [ 1, 'Mi primera nota', 'Contenido de la nota', 1774910112800 ] */

// Object.entries

console.log(Object.entries(nota4));
/* [
  [ 'id', 1 ],
  [ 'title', 'Mi primera nota' ],
  [ 'cotent', 'Contenido de la nota' ],
  [ 'createAt', 1774910112800 ]
] */