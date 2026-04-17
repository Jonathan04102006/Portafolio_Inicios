// SITEMA DE NOTAS MARRKDOWN

function gerenerateId() {
    const timestamp = Date.now();
    return timestamp;
}

// ---------------------------------------
// FUNCIONES CRUD DE NOTAS
// ---------------------------------------
function creatNote(content, title) {
    const trimmendContent = content.trim();
    if (trimmendContent === '') {
        return 'Error: El contenido no puede estar vacío.';
    }

    const noteId = gerenerateId;
    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin T[itulo';
    const noteExcerpt = content.length > 100 ? `${content.slice(0,100)}...` : content;

    const noteInfo = `
        ID: ${noteId} | Título: ${noteTitle} | Contenido: ${content} | Excerpt: ${noteExcerpt}
        | Creado: ${currentTime} | Actualizado: ${currentTime}
    `;

    return noteInfo;
};

function updateNote(noteId, newContent) {
    if (noteId === undefined || noteId === null || noteId === "") {
        return 'Error: ID nválido';
    }

    const trimmendContent = newContent.trim();
    if (trimmendContent === '') {
        return 'Error: El contenido no puede estar vacío.';
    }

    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin T[itulo';
    const noteExcerpt = newContent.length > 100 ? `${newContent.slice(0,100)}...` : newContent;

    const updateNoteInfo = `
        ID: ${noteId} | Título: ${noteTitle} | Contenido: ${newContent} | Excerpt: ${noteExcerpt}
        | Creado: ${currentTime} | Actualizado: ${currentTime}
    `;

    return updateNote;
};

function deleteNote(noteId) {
    if (noteId === undefined || noteId === null || noteId == '') {
        return 'Error: ID inválido';
    }

    const message = `Nota con ID: ${noteId}, fue elminado`;

    return message;
};

function listNotes() {
    const message = 'Listando todas la notas disponibles';
    return message;
};

// Ejemplo 1: Crear una nota
console.log('=== CREAR NOTA ===');
const nota1 = creatNote('# Mi primera nota\nEste es el contenido de mi primera nota de Markdown.');
console.log(nota1);

// Ejemplo 2: Crear nota con título personalizado
console.log('\n=== CREAR NOTA CON TÍTULO ===');
const nota2 = creatNote('Contenido de la segunda nota', 'Nota Importante');
console.log(nota2);

// Ejemplo 3: Intentar crear nota vacía (validación)
console.log('\n=== VALIDACIÓN:  NOTA VACÍA ===');
const notaVacia = creatNote('   ');
console.log(notaVacia);