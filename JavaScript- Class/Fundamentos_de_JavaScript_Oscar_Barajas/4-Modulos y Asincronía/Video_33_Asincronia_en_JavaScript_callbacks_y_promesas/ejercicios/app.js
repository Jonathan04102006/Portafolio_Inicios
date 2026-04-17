/* 🟢 Ejercicio 1: Simular una descarga con callback

🎯 Objetivo:
Practicar cómo usar un callback para ejecutar código después de una tarea asincrónica.

📝 Instrucciones:

Crea una función llamada descargarArchivo.
Esta función debe recibir:
Un nombre de archivo (string)
Un callback
Usa setTimeout para simular una descarga de 2 segundos.
Cuando termine, ejecuta el callback enviando un mensaje como:
"Archivo [nombre] descargado"

📌 Ejemplo de uso esperado:

descargarArchivo('foto.png', (mensaje) => {
    console.log(mensaje);
});

✅ Lo que debes lograr:

Archivo foto.png descargado */
function descargarArchivo (mensaje) {
    setTimeout(() => {
        console.log(`****************************************************************\nArchivo ${mensaje} descargado`);
    }, 2000)
};
descargarArchivo('ejercicio número 1');

/* 🟢 Ejercicio 2: Encadenar callbacks (sin caer en caos 😅)

🎯 Objetivo:
Entender cómo se encadenan múltiples operaciones asincrónicas con callbacks.

📝 Instrucciones:

Crea estas funciones:
obtenerCliente(cb)
obtenerPedidos(clienteId, cb)
mostrarPedidos(pedidos, cb)
Cada función debe usar setTimeout (1 segundo cada una).
Flujo:
Primero obtienes un cliente { id: 1, nombre: 'Carlos' }
Luego obtienes pedidos: ['Pizza', 'Hamburguesa']
Luego transformas los pedidos a mayúsculas
Muestra en consola:
Cliente: Carlos
Pedidos: [ 'PIZZA', 'HAMBURGUESA' ]

📌 Restricción:
Debes usar callbacks anidados (como el ejemplo de callback hell). */
function obtenerCliente (cb) {
    setTimeout(() => cb({ id: 1, nombre: 'Carlos' }), 1000);
};

function obtenerPedidos (clienteId, cb) {
    setTimeout(() => cb(['PIZZA', 'HAMBURGUESA']), 1000);
};

function mostrarPedidos (pedidos, cb) {
    setTimeout(() => cb(pedidos.map((n) => n.toUpperCase())), 1000);
};

obtenerCliente((usuario) => {
    obtenerPedidos(usuario.id, (pedido) => {
        mostrarPedidos(pedido, (resultado) => {
            console.log(`****************************************************************\nEjercicio número 2\nUsuario: ${usuario.nombre}`);
            console.log('Resultado:', resultado);
        });
    });
});

/* 🟢 Ejercicio 3: Convertir a Promesas

🎯 Objetivo:
Reemplazar callbacks por Promesas para un código más limpio.

📝 Instrucciones:

Convierte el ejercicio anterior a Promesas:
obtenerCliente() → devuelve Promise
obtenerPedidos(clienteId) → devuelve Promise
procesarPedidos(pedidos) → devuelve Promise
Usa .then() para encadenar.

📌 Ejemplo de estructura esperada:

obtenerCliente()
    .then(cliente => obtenerPedidos(cliente.id))
    .then(pedidos => procesarPedidos(pedidos))
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
El resultado final debe ser:
[ 'PIZZA', 'HAMBURGUESA' ] */

function obtenerCliente1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: 'Carlos' });
        }, 4000);
    });
}

function obtenerPedidos1(clienteId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`Pizza, Hamburguesa`]);
        }, 1000);
    });
}

function procesarPedidos1(pedidos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(pedidos.map((pedido) => pedido.toUpperCase()));
        }, 1000);
    });
}

obtenerCliente1()
    .then((cliente) => {
        console.log(`****************************************************************\nEjercicio número 3\nCliente: ${cliente.nombre}`);
        return obtenerPedidos1(cliente.id);
    })
    .then((pedidos) => {
        return procesarPedidos1(pedidos);
    })
    .then((resultado) => {
        console.log(`Pedidos: ${resultado}`);
    })
    .catch((error) => {
        console.error(`****************************************************************\nEjercicio número 3\nError en la cadena de promesas: ${error}`);
    });