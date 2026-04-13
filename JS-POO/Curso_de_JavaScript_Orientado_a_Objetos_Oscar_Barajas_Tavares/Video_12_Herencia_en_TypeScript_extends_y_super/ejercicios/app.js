/* 🧩 Ejercicio 1: Herencia básica de una clase
🎯 Objetivo:

Aprender a usar extends para heredar propiedades y métodos.

📌 Enunciado:

Crea una clase base llamada Animal que tenga:

Una propiedad nombre
Un método hacerSonido() que imprima: "Este animal hace un sonido"

Luego:

Crea una clase Perro que herede de Animal
Sobrescribe el método hacerSonido() para que imprima: "El perro ladra"
✅ Se te pide:
Crear ambas clases (Animal y Perro)
Instanciar un objeto Perro
Llamar al método hacerSonido() */
console.log(`************************************************************************`);
// Clase base Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log("Este animal hace un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log("El perro ladra");
    }
}

const miPerro = new Perro("Fido");

miPerro.hacerSonido();

/* 🧩 Ejercicio 2: Uso de super en el constructor
🎯 Objetivo:

Entender cómo usar super para inicializar propiedades de la clase padre.

📌 Enunciado:

Crea una clase base Persona con:

Propiedades: nombre y edad
Un constructor que reciba ambos valores

Luego:

Crea una clase Estudiante que herede de Persona
Agrega una propiedad grado
Usa super en el constructor para inicializar nombre y edad
✅ Se te pide:
Definir ambas clases
Crear un objeto Estudiante
Mostrar en consola sus propiedades (nombre, edad, grado) */
console.log(`************************************************************************`);
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }
}

const estudiante1 = new Estudiante("Ana", 16, "10° grado");

console.log(estudiante1.nombre);
console.log(estudiante1.edad);
console.log(estudiante1.grado);

/* 🧩 Ejercicio 3: Método heredado + método propio
🎯 Objetivo:

Combinar herencia, super y métodos adicionales.

📌 Enunciado:

Crea una clase base Vehiculo con:

Propiedad marca
Método mostrarMarca() que imprima: "Marca: [marca]"

Luego:

Crea una clase Auto que herede de Vehiculo
Agrega una propiedad modelo
Crea un método mostrarInfo() que:
Use super.mostrarMarca()
Luego imprima el modelo
✅ Se te pide:
Crear ambas clases
Instanciar un Auto
Llamar a mostrarInfo() */
console.log(`************************************************************************`);
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    mostrarMarca() {
        console.log(`Marca: ${this.marca}`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }

    mostrarInfo() {
        super.mostrarMarca();
        console.log(`Modelo: ${this.modelo}`);
    }
}

const miAuto = new Auto("Toyota", "Corolla");

miAuto.mostrarInfo();