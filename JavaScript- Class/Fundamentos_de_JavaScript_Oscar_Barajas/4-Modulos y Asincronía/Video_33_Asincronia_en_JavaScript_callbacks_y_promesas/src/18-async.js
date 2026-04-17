// Async

console.log('1. Inicio');

setTimeout(() => {
    console.log('2. Timeout Ejecutado')
}, 3000);

console.log('3. Fin');

// Callbacks

function obtenerDatos (callback) {
    setTimeout(() => {
        callback('Datos Obtenidos');
    }, 4000)
};

obtenerDatos((resultado) => {
    console.log(resultado);
});

// Callback Hell

function obtenerUsuario (cb) {
    setTimeout(() => cb({ id: 1, nombre: 'Jonathan' }), 300);
};

function obtenerNotas (userId, cb) {
    setTimeout(() => cb(['nota 1', 'nota 2']), 300);
};

function procesarNotas (notas, cb) {
    setTimeout(() => cb(notas.map((n) => n.toUpperCase())), 300);
};

obtenerUsuario((usuario) => {
    obtenerNotas(usuario.id, (notas) => {
        procesarNotas(notas, (resultado) => {
            console.log('Usuario:', usuario.nombre);
            console.log('Resultado:', resultado);
        });
    });
});

// Promise

const promesa = new Promise((resolve, reject) => {
    const exito = true;

    setTimeout(() => {
        if (exito) {
            resolve('Operación exitosa')
        } else {
            reject(new Error('Algo salió mal'));
        }
    }, 1000)
});

promesa.then((mensaje) => console.log(mensaje)).catch((error) => console.error(error.message));