/* Ejercicio 1: Función Genérica para Mostrar Datos
Objetivo

Crear una función genérica que reciba cualquier tipo de dato y lo muestre en consola.

Instrucciones

Crea una función llamada mostrarDato.

La función debe usar un tipo genérico <T>.

Debe recibir un parámetro llamado dato del tipo T.

La función debe retornar el mismo dato que recibe.

Imprime en consola el dato recibido con un mensaje.

Lo que debes hacer

Completa la función y prueba con diferentes tipos de datos:

string

number

boolean

Ejemplo de uso esperado
mostrarDato<string>("Hola Mundo");
mostrarDato<number>(25);
mostrarDato<boolean>(true);
Resultado esperado en consola
Dato recibido: Hola Mundo
Dato recibido: 25
Dato recibido: true */
function mostrarDato<T>(dato: T): T {
    return dato;
}

const dato1 = mostrarDato<string>("Hola Mundo");
const dato2 = mostrarDato<number>(25);
const dato3 = mostrarDato<boolean>(true);

console.log(dato1, dato2, dato3);


/* Ejercicio 2: Clase Genérica para Guardar Productos
Objetivo

Crear una clase genérica que permita guardar cualquier tipo de producto.

Instrucciones

Crea una clase llamada Almacen.

La clase debe usar un tipo genérico <T>.

Debe tener:

Una propiedad privada llamada producto.

El constructor debe recibir el producto.

Crear un método público llamado obtenerProducto() que retorne el producto.

Lo que debes hacer

Crear un objeto Almacen para:

string

number

Mostrar el producto guardado en consola.

Ejemplo de uso esperado
let almacenString = new Almacen<string>("Laptop");
console.log(almacenString.obtenerProducto());

let almacenNumero = new Almacen<number>(150);
console.log(almacenNumero.obtenerProducto());
Resultado esperado
Laptop
150 */
class Almacen<T> {
    private producto: T;

    constructor ( producto: T) {
        this.producto = producto;
    }

    public obtenerProducto(): T {
        return this.producto;
    }
}

let almacenString = new Almacen<string>("Laptop");
console.log(almacenString.obtenerProducto());

let almacenNumero = new Almacen<number>(150);
console.log(almacenNumero.obtenerProducto());

/* Ejercicio 3: Interface Genérica para Respuestas de API
Objetivo

Crear una interfaz genérica que represente una respuesta de una API.

Instrucciones

Crear una interface llamada RespuestaAPI.

Debe usar un tipo genérico <T>.

Debe tener las propiedades:

estado: number

mensaje: string

datos: T

Crear dos ejemplos de uso:

Uno donde datos sea string

Otro donde datos sea number

Lo que debes hacer

Crear dos variables que usen la interfaz genérica.

Ejemplo de uso esperado
let respuestaTexto: RespuestaAPI<string> = {
    estado: 200,
    mensaje: "Petición exitosa",
    datos: "Usuario creado"
};

let respuestaNumero: RespuestaAPI<number> = {
    estado: 200,
    mensaje: "Total de productos",
    datos: 45
};

console.log(respuestaTexto);
console.log(respuestaNumero); */

interface RespuestaAPI<T> {
    estado: number;
    mensaje: string;
    datos: T;
}

let respuestaTexto: RespuestaAPI<string> = {
    estado: 200,
    mensaje: "Petición exitosa",
    datos: "Usuario creado"
};

let respuestaNumero: RespuestaAPI<number> = {
    estado: 200,
    mensaje: "Total de productos",
    datos: 45
};

console.log(respuestaTexto);
console.log(respuestaNumero);