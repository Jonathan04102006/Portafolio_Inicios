// const persona ={
//     nombre: "Ariel",
//     apellidos: "Perez",
//     edad: 30,
// };

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona();

console.log(persona1);
