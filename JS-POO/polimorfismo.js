class Instrumento {
    constructor(nombre){
        this.nombre = nombre
    }

    //Método
    tocar(){
        console.log(`${this.nombre} esta produciendo un sonido`)
    }
}

class Guitarra extends Instrumento{
    constructor(){
        super('Guitarra')
    }

    // POLIMORFISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    // Sobreescribir o pisar [OVERRIDE] el método heredado
    tocar(){
        console.log("\x1b[31m%s\x1b[0m", `La ${this.nombre} está un solo impresionante`)
    }
}

console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es rojo")
console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es verde")
console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es amarillo")
console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es azul")
console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es magenta")
console.log("\x1b[31m%s\x1b[0m", "La ${this.nombre} Este texto es cian")