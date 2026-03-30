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