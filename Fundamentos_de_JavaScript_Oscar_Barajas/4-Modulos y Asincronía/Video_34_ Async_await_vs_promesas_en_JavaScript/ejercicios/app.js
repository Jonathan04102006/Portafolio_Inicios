/* 🟢 Ejercicio 1: Convertir Promesas a Async/Await
🎯 Objetivo:

Aprender a transformar código basado en .then() a async/await.

📝 Instrucciones:

Se te da el siguiente código usando promesas:

function obtenerProducto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: 'Laptop' });
        }, 500);
    });
}

function obtenerPrecio(productoId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(800);
        }, 500);
    });
}

// USO CON PROMESAS
obtenerProducto()
    .then((producto) => {
        return obtenerPrecio(producto.id)
            .then((precio) => {
                console.log(producto.nombre, precio);
            });
    })
    .catch((error) => console.log(error));
✅ Tu tarea:
Convertir todo el flujo a async/await.
Crear una función async function mostrarProducto().
Usar try/catch para manejar errores.

Mostrar en consola:

Laptop 800 */

function obtenerProducto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: 'Laptop' });
        }, 100);
    });
}

function obtenerPrecio(productoId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(800);
        }, 100);
    });
}

async function mostrarProducto() {
    try {
        const producto = await obtenerProducto();
        const precio = await obtenerPrecio(producto.id);
        console.log(`****************************************************************\nEjercicio 1\n${producto.nombre} ${precio}`);
    } catch (error) {
        console.log(error);
    }
}

mostrarProducto();

/* 🟢 Ejercicio 2: Comparar ejecución secuencial vs paralela
🎯 Objetivo:

Entender la diferencia entre ejecutar promesas una por una vs al mismo tiempo.

📝 Instrucciones:

Tienes estas funciones:

function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea 1 lista'), 1000);
    });
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea 2 lista'), 1000);
    });
}
✅ Tu tarea:
Crear una función async ejecutarSecuencial():
Usa await uno por uno.
Mide el tiempo con console.time() y console.timeEnd().
Crear una función async ejecutarParalelo():
Usa Promise.all().
Mide el tiempo.
Mostrar resultados en consola.
💡 Resultado esperado:
Secuencial ≈ 2000ms
Paralelo ≈ 1000ms */

function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea 1 lista'), 1000);
    });
}

function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea 2 lista'), 1000);
    });
}

async function ejecutarSecuencial() {
    console.time('Secuencial');
    await tarea1();
    await tarea2();
    console.timeEnd('Secuencial'); // 2000ms
}

async function ejecutarParalelo() {
    console.time('Paralelo');
    await Promise.all([tarea1(), tarea2()]);
    console.timeEnd('Paralelo'); // 1000ms
}

ejecutarSecuencial();
ejecutarParalelo();   

/* 🟢 Ejercicio 3: Manejo de errores (Promesas vs Async/Await)
🎯 Objetivo:

Aprender a manejar errores en ambos enfoques.

📝 Instrucciones:

Se te da esta función que falla aleatoriamente:

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) {
                resolve('Datos obtenidos');
            } else {
                reject(new Error('Error al obtener datos'));
            }
        }, 500);
    });
}
✅ Tu tarea:
Parte A: Usando Promesas
Consumir la función con .then() y .catch().
Mostrar:
Si funciona: "OK: Datos obtenidos"
Si falla: "ERROR: Error al obtener datos"
Parte B: Usando Async/Await
Crear función async manejarDatos().
Usar try/catch.
Mostrar los mismos mensajes que en la Parte A. */
console.log("****************************************************************");
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) {
                resolve('Datos obtenidos');
            } else {
                reject(new Error('Error al obtener datos'));
            }
        }, 500);
    });
}

obtenerDatos()
    .then((mensaje) => {
        console.log('OK:', mensaje);
    })
    .catch((error) => {
        console.log('ERROR:', error.message);
    });

// Parte B: Usando Async/Await
async function manejarDatos() {
    try {
        const mensaje = await obtenerDatos();
        console.log('OK:', mensaje);
    } catch (error) {
        console.log('ERROR:', error.message);
    }
}

manejarDatos();   