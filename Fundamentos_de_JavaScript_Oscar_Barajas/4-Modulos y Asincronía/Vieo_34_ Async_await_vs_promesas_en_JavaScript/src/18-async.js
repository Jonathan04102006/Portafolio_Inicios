// Promise

function esperar (ms) {
    return new Promise((resolver) => setTimeout(resolver, ms));
}

function obtenerUsuario () {
    return esperar(200).then(() => ({ id: 1, nombre: 'Ariel' }));
}

function obtenerNotas (userId) {
    return esperar(200).then(() => ['Nota 1','Nota 2']);
}

function procesarNotas (notas) {
    return esperar(200).then(() => notas.map((n) => n.toUpperCase()));
}

obtenerUsuario()
    .then((usuario) => obtenerNotas(usuario.id))
    .then((notas) => procesarNotas(notas))
    .then((resultado) => console.log('Resultado: ', resultado))
    .catch((error) => console.error('Error en algún paso: ', error.message));

// Async/await

/* async function obtenerUsuario () {
    await esperar(200);
    return {...}
} */

function esperar () {
    
}