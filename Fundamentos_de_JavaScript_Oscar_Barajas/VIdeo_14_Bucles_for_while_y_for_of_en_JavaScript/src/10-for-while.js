// For/While

/* for (inializacion, condicion, incremento){ ';' expected.

} */

/* for (let i = 0; i < 5; i++) {
    console.log(i);
} */

let notas = ['Nota 1', 'Nota 2', 'Nota 3'];

for (let i = 0; i < notas.length; i++) {
    console.log(`Indice ${i}: ${notas[i]}`);
}

// For of
const frutas = ['manzana', 'pera', 'uva'];

for (const fruta of frutas) {
    console.log(fruta);
    if (fruta === 'mazana') {
        console.log(`Es una rica manzana`);
    }
}

// For in

const persona = {
    nombre: 'Ana',
    edad: 25
};

for (const clave in persona){
    console.log(`${clave}: ${persona[clave]}`);
}