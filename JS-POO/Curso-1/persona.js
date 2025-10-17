//Clase: es una plantilla
class Persona{

    //Contructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(nombre, edad, profesion) {
        // Propiedad o características
        // this hace refencia a la
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion


        //this.caracteristica1 = arg1
        //this.caracteristica2 = arg2
    }

    
}

// De esta forma estamos instanciando un objeto basado en la clase (plantilla)
const carolina = new Persona("carolina", 35, "Astronauta")
const ricardo = new Persona("Ricardo", 18, "Estudiante de Programación")

// GET : obtención de datos
carolina.edad = 45
ricardo.profesion = "Estudiante de Artes"

// SET : cambiar la información
console.log(carolina.edad)
console.log(ricardo.profesion)

//const persona = new Persona("alto", "ingeniero")
//const persona2 = new Persona("inteligente", "arquitectura")

//console.log(persona2)
//console.log(persona2.caracteristica1)
//console.log(persona2.caracteristica2)