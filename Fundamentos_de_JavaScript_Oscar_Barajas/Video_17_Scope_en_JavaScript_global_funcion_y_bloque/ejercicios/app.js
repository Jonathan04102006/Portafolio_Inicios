/* 🧩 Ejercicio 1: Identificando el scope
🎯 Objetivo:

Entender desde dónde se puede acceder a cada variable (global, función, bloque).

📌 Instrucciones:
Analiza el siguiente código.
Antes de ejecutarlo, intenta predecir qué líneas funcionarán y cuáles darán error.
Luego ejecútalo y confirma.
💻 Código:
const mensajeGlobal = 'Soy global';

function pruebaScope() {
    const mensajeFuncion = 'Soy de función';

    if (true) {
        const mensajeBloque = 'Soy de bloque';

        console.log(mensajeGlobal);   // ?
        console.log(mensajeFuncion); // ?
        console.log(mensajeBloque);  // ?
    }

    console.log(mensajeGlobal);   // ?
    console.log(mensajeFuncion); // ?
    // console.log(mensajeBloque); // ?
}

console.log(mensajeGlobal); // ?
// console.log(mensajeFuncion); // ?
// console.log(mensajeBloque); // ?
❓ Preguntas:
¿Dónde se puede usar mensajeGlobal?
¿Por qué mensajeBloque no funciona fuera del if?
¿Qué tipo de error aparece si descomentas las líneas comentadas? */
console.log("****************************************************************");
const mensajeGlobal = 'Soy global';

function pruebaScope() {
    const mensajeFuncion = 'Soy de función';

    if (true) {
        const mensajeBloque = 'Soy de bloque';

        console.log(mensajeGlobal);   // Soy global
        console.log(mensajeFuncion); // Soy de función
        console.log(mensajeBloque);  // Soy de bloque
    }

    console.log(mensajeGlobal);   // Soy global
    console.log(mensajeFuncion); // Soy de función
    // console.log(mensajeBloque); // mensajeBloque is not defined
}

console.log(mensajeGlobal); // Soy global
pruebaScope();
// console.log(mensajeFuncion); // ReferenceError: mensajeFuncion is not define
// console.log(mensajeBloque); // ReferenceError: mensajeBloque is not defined

/* 🧩 Ejercicio 2: Corrigiendo errores de scope
🎯 Objetivo:

Detectar y corregir errores relacionados con el scope.

📌 Instrucciones:
El siguiente código tiene errores.
Corrígelo para que todo funcione correctamente sin eliminar lógica.
Solo puedes mover variables o cambiar dónde se declaran.
💻 Código:
function mostrarDatos() {
    if (true) {
        const nombre = 'Juan';
    }

    console.log(nombre); // ERROR
}

mostrarDatos();
❓ Preguntas:
¿Por qué ocurre el error?
¿Qué cambio hiciste para solucionarlo?
¿En qué tipo de scope debería estar nombre? */
console.log("****************************************************************");
function mostrarDatos() {
    if (true) {
        const nombre = 'Juan';
        console.log(nombre);
    }

}

mostrarDatos();

/* 🧩 Ejercicio 3: Creando tu propio ejemplo de scope
🎯 Objetivo:

Aplicar correctamente los 3 tipos de scope.

📌 Instrucciones:
Crea un programa que tenga:
Una variable global llamada pais
Una función llamada mostrarPais
Un bloque if dentro de la función
Dentro de cada nivel:
Declara una variable distinta (ciudad, barrio, etc.)
Imprime todas las variables accesibles en cada nivel
💡 Ejemplo de estructura (completa tú):
const pais = 'El Salvador';

function mostrarPais() {
    const ciudad = 'San Salvador';

    if (true) {
        const barrio = 'Centro';

        // Imprime TODO lo accesible aquí
    }

    // Imprime lo accesible aquí
}

// Imprime lo accesible aquí
❓ Preguntas:
¿Qué variables puedes usar dentro del if?
¿Qué variables puedes usar fuera de la función?
¿Qué pasaría si intentas acceder a barrio fuera del if? */
console.log("****************************************************************");
const pais = 'El Salvador';

function mostrarPais() {
    const ciudad = 'San Salvador';

    if (true) {
        const barrio = 'Centro';
        console.log(pais);
        console.log(ciudad);
        console.log(barrio);
        // Imprime TODO lo accesible aquí
    }
    console.log(pais);
    console.log(ciudad);
    // Imprime lo accesible aquí
}

mostrarPais();