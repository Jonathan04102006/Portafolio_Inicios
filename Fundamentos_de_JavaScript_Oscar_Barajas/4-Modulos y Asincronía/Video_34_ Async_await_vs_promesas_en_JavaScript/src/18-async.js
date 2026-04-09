// Async/await

/* async function obtenerUsuario () {
    await esperar(200);
    return {...}
} */

function esperar (ms) {
    return new Promise((resolver) => setTimeout(resolver, ms));
}

async function obtenerUsuario () {
    await esperar(200);
    return {id: 1, nombre: 'Lion' };
}

async function obtenerNotas (userId) {
    await esperar(200);
    return ['nota 1', 'nota 2'];
}

async function procesarNotas (notas) {
    await esperar(200);
    return notas.map((n) => n.toUpperCase());
}

async function cargarDatos () {
    try {
        const usuario = await obtenerUsuario();
        const notas = await obtenerNotas(usuario.id);
        const resultado = await procesarNotas(notas);
        console.log('Usuario: ', usuario.id);
        console.log('Resultado: ', resultado);
    } catch (error) {
        console.error('Error', error.message);
    }
}

cargarDatos();