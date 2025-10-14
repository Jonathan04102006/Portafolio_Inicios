//Clase: es una plantilla
class Persona{

    //Contructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(arg1, arg2) {
        this.caracteristica1 = arg1
        this.caracteristica2 = arg2
    }

}

// De esta forma estamos instanciando un objeto basado en la clase (plantilla)
const persona = new Persona("alto", "ingeniero")
const persona2 = new Persona("inteligente","arquitectura")

console.log(persona2)
console.log(persona2.caracteristica1)
console.log(persona2.caracteristica2)