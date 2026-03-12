let nombre: string = "Jonathan Ariel"

console.log(nombre.length);

function obtenerLongitud<T extends { length: number }>(obj: T): number {
    let longitud : number = obj.length;
    let tipo : string = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y la longitud es: ${longitud}`);
    return obj.length;
}

console.log(obtenerLongitud("Hola"));

console.log(obtenerLongitud([1, 2, 3, 4, 5, 6]));

/* console.log(obtenerLongitud(42)); */