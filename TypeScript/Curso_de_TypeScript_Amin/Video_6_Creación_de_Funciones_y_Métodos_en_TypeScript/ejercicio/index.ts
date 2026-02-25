/* ✅ Ejercicio 1: Función con parámetro opcional

Crea una función llamada saludarUsuario que reciba un parámetro nombre de tipo string y un parámetro opcional edad de tipo number.

La función debe imprimir un mensaje como:

"Hola Juan" si no se envía la edad.

"Hola Juan, tienes 20 años" si se envía la edad.

La función no debe retornar nada (void). */
console.log(`*********************ejercicio 1 de Creación de Funciones y Métodos en TypeScript*********************`);
function saludarUsuario(nombre: string, edad?: number): void{
    if(edad !== undefined) {
        console.log(`Hola ${nombre}, tienes ${edad} años`);
    }else {
        console.log(`Hola ${nombre}`);
    }
}

saludarUsuario("Ariel");
saludarUsuario("Jonathan", 19);

/* ✅ Ejercicio 2: Función con valor por defecto

Crea una función llamada calcularDescuento que reciba:

precio (number)

descuento (number) con valor por defecto de 0.10 (10%)

La función debe retornar el precio final aplicando el descuento.
Luego imprime el resultado en consola. */
console.log(`*********************ejercicio 2 de Creación de Funciones y Métodos en TypeScript*********************`);
function calcularDescuento(precio: number, descuento: number = 0.10): number{
    const precioFinal = precio - (precio * descuento);
    return precioFinal;
}

const resultado = calcularDescuento(100);
const resultado1 = calcularDescuento(100, 0.30);

console.log(`Precio final (10% de descuento): $${resultado}`);
console.log(`Precio final (30% de descuento): $${resultado1}`);

/* ✅ Ejercicio 3: Método dentro de un objeto

Crea un objeto llamado persona con las siguientes propiedades:

nombre (string)

edad (number)

Agrega un método llamado presentarse que retorne un mensaje como:
"Hola, mi nombre es Carlos y tengo 25 años"

Luego muestra el resultado en consola llamando al método. */
console.log(`*********************ejercicio 3 de Creación de Funciones y Métodos en TypeScript*********************`);
const persona = {
    nombre: "Jonathan",
    edad: 19,
    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

console.log(persona.presentarse());