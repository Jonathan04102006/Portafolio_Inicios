/* While:
Crea un ciclo while que muestre en consola los números del 1 al 10, pero solo los números pares.
*/
console.log(`***********************ejercicio 1 de Loops***********************`);
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

/* For:
Dado un arreglo de números, usa un for para sumar todos los valores y mostrar el total final en consola.
*/
console.log(`***********************ejercicio 2 de Loops***********************`);
const numeros = [10, 20, 30, 40, 50];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
}

console.log("El total final es: ", total);


/* For of / For in
Dado un objeto con datos de una persona (nombre, edad, ciudad, etc.), recórrelo y muestra en consola cada propiedad junto con su valor.
*/
console.log(`***********************ejercicio 3 de Loops***********************`);
const Ariel = {
    nombre: "Jonathan",
    edad: 19,
    ciudad: "San Salvador",
    contacto: {
        email: "jonaperez0406@gmail.com",
        telefono: "60612495",
    }
};

for(const propiedades in Ariel){
    console.log(`Key: ${propiedades}, Value: ${Ariel[propiedades]}`);
}

for(const elemento of numeros){
    console.log(elemento);
}