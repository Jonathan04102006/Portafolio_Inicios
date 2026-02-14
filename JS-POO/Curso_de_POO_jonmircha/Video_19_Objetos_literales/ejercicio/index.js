/* Crea un objeto literal llamado persona que tenga las propiedades nombre, edad y pais, y un método saludar que muestre un mensaje en consola usando esas propiedades. */
console.log(`**********************ejercicio 1 de Objetos literales**********************`);
let nombre = "Michelle",
    edad = 23,
    pais = "Argentina";

const persona = {
    nombre,
    edad,
    pais,
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años y mi pais natal es ${pais}.`)
    }
};

console.log(persona);
persona.saludar();

/* Crea un objeto literal llamado auto usando propiedad abreviada (shorthand) con las variables marca, modelo y anio, y agrega un método encender que muestre un mensaje en consola. */
console.log(`**********************ejercicio 2 de Objetos literales**********************`);
let marca = "Toyota",
    modelo = "Mirai",
    anio = 2014;

const auto = {
    marca,
    modelo,
    anio,
    encender(){
        console.log(`El carro esta encendido`)
    }
};

console.log(auto);
auto.encender();

/* Crea un objeto literal llamado producto con las propiedades nombre, precio y cantidad, y un método que calcule el total a pagar multiplicando el precio por la cantidad. */
console.log(`**********************ejercicio 3 de Objetos literales**********************`);
let nombre1 = "leche",
    precio = 2.90,
    cantidad = 5;

const producto = {
    nombre1,
    precio,
    cantidad,
    calcule(){
        console.log(`El total a pagar es: $${precio*cantidad}`)
    }
};

console.log(producto);
producto.calcule();