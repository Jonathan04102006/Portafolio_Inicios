// Scope

const global = 'Soy global';

function ejemplo() {
    const funcion = 'Soy de función';

    if (true) {
        const bloque = 'Soy de bloque';
    console.log(`Bloque - Función: ${funcion}`);
    console.log(`Bloque - Bloque: ${bloque}`);
    console.log(`Bloque - Global: ${global}`);
    }
    console.log(`Función: ${funcion}`);
    /* console.log(`Bloque: ${bloque}`); */
    console.log(`Global: ${global}`);
}

console.log(global);
/* console.log(`Global - Función: ${funcion}`); */
/* console.log(`Global - Bloque: ${bloque}`); */
console.log(`Global - Global: ${global}`);