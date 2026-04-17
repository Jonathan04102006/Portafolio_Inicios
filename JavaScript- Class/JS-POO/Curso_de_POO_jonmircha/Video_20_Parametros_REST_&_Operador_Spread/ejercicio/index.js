/* Crea una función llamada promediar que reciba un primer número obligatorio y luego cualquier cantidad de números adicionales usando parámetros REST. La función debe devolver el promedio de todos los números recibidos. */
console.log(`*******************************ejercicio 1 de Parámetros REST & Operador Spread*******************************`);
function promediar(a, ...b) {
    let numeros = [a, ...b];
    let sumar = numeros.reduce((acumular, numero) => acumular + numero);
    let cantidad = numeros.length;

    return sumar / cantidad;
}

console.log(promediar(1,2,3,4,5,6));

/* Declara dos arreglos con nombres de frutas diferentes y crea un tercer arreglo que los combine usando el operador Spread. Luego agrega dos frutas más directamente al nuevo arreglo usando Spread. */
console.log(`*******************************ejercicio 2 de Parámetros REST & Operador Spread*******************************`);
const frutas = ["Manzana", "Albaricoque", "Banana", "Mora"];
const frutas1 = ["Arándano", "Melón", "Cereza", "Coco"];
const frutasJuntas = [...frutas, ...frutas1];

console.log(frutasJuntas);

const frutasExtras = [...frutasJuntas, "Kiwi", "Piña"];

console.log(frutasExtras);


/* Crea una función llamada crearUsuario que reciba un objeto con datos básicos (nombre y edad) y luego use el operador Spread para crear un nuevo objeto que incluya esos datos más una propiedad adicional activo: true. */
console.log(`*******************************ejercicio 3 de Parámetros REST & Operador Spread*******************************`);
function crearUsuario(datos) {
  return {
    ...datos,
    activo: true
  };
}

const usuario = crearUsuario({
    nombre: "Ariel",
    edad: 19
});

console.log(usuario);
