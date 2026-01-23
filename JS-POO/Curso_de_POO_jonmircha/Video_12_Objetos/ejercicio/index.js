/*1️⃣ Crear y acceder a propiedades
Crea un objeto llamado persona con las propiedades: nombre, edad y ciudad. Luego muestra en consola cada propiedad usando notación de punto y notación de corchetes.
*/
console.log(`***********************ejercicio 1 de Objetos***********************`);
const persona = {
    nombre: "Jonathan",
    apellido: "Perez",
    edad: 19,
    ciudad: "San Salvador"
}

// Notacion de punto
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.ciudad);

console.log(`---------`);

// Notacion de corchetes
console.log(persona["nombre"]);
console.log(persona["apellido"]);
console.log(persona["edad"]);
console.log(persona["ciudad"]);

/*2️⃣ Objeto con métodos y this
Crea un objeto llamado auto con las propiedades: marca, modelo y anio, y agrega un método llamado descripcion que muestre un mensaje usando this con los datos del auto.
*/
console.log(`***********************ejercicio 2 de Objetos***********************`);
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2014,
    descripcion: function() {
        return `Este auto es un ${this.marca} modelo ${this.modelo} del año ${this.anio}.`
    }
}

console.log(auto.descripcion());

/*3️⃣ Objetos anidados y validación de propiedades
Crea un objeto llamado usuario que tenga un objeto interno contacto con email y telefono.
Luego:

Muestra el email en consola

Usa un método para verificar si el objeto tiene la propiedad edad
*/
console.log(`***********************ejercicio 3 de Objetos***********************`);
const usuario = {
    contacto: {
        email: "jonaperez0406@gmail.com",
        telefono: "+503 6061-2594"
    }
}

console.log(usuario.contacto.email);
console.log(usuario.hasOwnProperty("edad"));