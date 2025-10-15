//Clase: es una plantilla
class Animal{

    //Contructor: es un método especial que permite instanciar objetos basándose en la clase
    constructor(nombre, edad, raza) {
        // Propiedad o características
        // this hace refencia a la
        this.nombre = nombre
        this.edad = edad
        this.raza = raza


        //this.caracteristica1 = arg1
        //this.caracteristica2 = arg2
    }

    // Método: es una función que representa un comportamiento propio de esta clase
    
    hacerSonido(){
        console.log(sonido)
    }

}

const manchita = new Animal("Manchita", 1, "Perro", "Guau")
const pelusa = new Animal("Pelusa", 2, "Gato", "Miau")

manchita.hacerSonido()