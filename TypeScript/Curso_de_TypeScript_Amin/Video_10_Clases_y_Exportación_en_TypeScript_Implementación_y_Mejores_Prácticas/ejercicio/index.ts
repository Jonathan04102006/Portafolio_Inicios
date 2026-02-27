/* 🧩 Ejercicio 1: Agregar un Método Nuevo a la Clase

Modifica la clase Persona para:

Agregar un nuevo método llamado descripcionProfesional().

Este método debe:

Retornar "Soy desarrollador" si esDesarrollador es true.

Retornar "No soy desarrollador" si es false.

Luego:

Importa la clase en implementacion.ts.

Crea dos objetos Persona con diferentes valores.

Imprime en consola el resultado del nuevo método. */
export class Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    constructor( nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    descripcionProfesional(): string{
        if(this.esDesarrollador){
            return `Hola soy ${this.nombre}, tengo ${this.edad} años y soy desarrollador`;
        }else{
            return `Hola soy ${this.nombre}, tengo ${this.edad} años y no soy desarrollador`;
        }
    }
}

/* 🧩 Ejercicio 2: Encapsulamiento y Buenas Prácticas

Refactoriza la clase Persona aplicando buenas prácticas:

Convierte las propiedades en private.

Crea métodos get para obtener nombre y edad.

Crea un método set para modificar la edad.

Evita que la edad pueda ser negativa (validación dentro del setter).

Luego:

En implementacion.ts, crea una persona.

Modifica su edad usando el setter.

Muestra los datos usando los getters. */
export class Persona1 {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    constructor( nombre: string, edad: number, esDesarrolador: boolean ) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrolador;
    }

    getNombre(): string {
        return this.nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(nuevaEdad: number): void {
        if(nuevaEdad < 0 ){
            throw new Error("La edad no puede ser negativa");
        }
    }
}

/* 🧩 Ejercicio 3: Exportar Múltiples Clases

Crea una nueva clase llamada Empleado en index.ts que:

Extienda de Persona.

Agregue una nueva propiedad: salario.

Sobrescriba el método saludar() para que también mencione el salario.

Luego:

Exporta ambas clases.

En implementacion.ts, importa las clases.

Crea un objeto Empleado.

Llama al método saludar() y verifica que use la versión sobrescrita. */
export class Empleado extends Persona {
    salario: number;

    constructor ( nombre: string, edad: number, esDesarrollador: boolean, salario: number ) {
        super(nombre, edad, esDesarrollador);
        this.salario = salario;
    }

    saludar(): string {
        return `${super.descripcionProfesional()} y mi salario es de $${this.salario}. `
    }
}