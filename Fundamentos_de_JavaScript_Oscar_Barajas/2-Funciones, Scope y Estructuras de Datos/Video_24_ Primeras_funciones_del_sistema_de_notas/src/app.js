// SITEMA DE NOTAS MARRKDOWN

function gerenerateId() {
    const timestamp = Date.now();
    return timestamp;
}

// ---------------------------------------
// FUNCIONES CRUD DE NOTAS
// ---------------------------------------

function createNote(content, title) {
    const trimmendContent = content.trim();
    if (trimmendContent === '') {
        return 'Error: El contenido no puede estar vacío.';
    }

    const noteId = gerenerateId();
    const currentTime = Date.now();
    const noteTitle = title || 'Nota sin T[itulo';
    const noteExcerpt = content.length > 100 ? `${content.slice(0,100)}...` : content;
}