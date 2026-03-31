// Objects

const nota = {
    id: 1,
    title: 'Mi primera nota',
    cotent: 'Contenido de la nota',
    createAt: Date.now()
}

console.log(nota.id);
console.log(nota.title);

const campo = 'content';
console.log(nota[campo]);
console.log(nota.autor?.name);