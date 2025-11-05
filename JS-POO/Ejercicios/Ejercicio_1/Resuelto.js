// Clase Estudiante: representa a un estudiante individual
class Estudiante {
    constructor(nombre, edad, carrera, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.nota = nota;
    }

    // Método para obtener una representación
    toString(){
        return `${this.nombre} - ${this.edad} - ${this.carrera} (${this.nota})`;
    }
}

// Clase GrupoEstudiantes: gestiona una colección de estudiantes
class GrupoEstudiantes{
    constructor(){
        this.estudiantes = [];
    }

    //Agregar un estudiante al grupo
    agregarEstudiante(estudiante){
        if (estudiante instanceof Estudiante){
            this.estudiantes.push(estudiante);
        } else {
            throw new Error ("Solo se puede agregar instancias de Estudiante");
        }
    }

    // Mostrar todos los estudiantes
    mostrarEstudiante(){
        console.log("Listado de estudiantes");
        this.estudiantes.forEach(estudiante => {
            console.log(estudiante.toString());
        });
    }

    // Calcular el promedio de notas del grupo
    calcularPromedio(){
        if (this.estudiantes.length === 0)
            return 0;
        const suma = this.estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
        return suma / this.estudiantes.length;
    }

    // Buscar un estudiante por nombre (devuelva el primer que coincida)
    buscarPorNombre(nombre){
        return this.estudiantes.find(estudiante => estudiante.nombre === nombre) || null;
    }

    //obtener el número total de estudiantes
    obtenerCantidad(){
        return this.estudiantes.length;
    }
}

//Uso de código
const grupo = new GrupoEstudiantes();

grupo.agregarEstudiante(new Estudiante("Ana", "20 años", "Ingienería", 8.5));
grupo.agregarEstudiante(new Estudiante("Carlos", "22 años", "Derecho", 6.9));
grupo.agregarEstudiante(new Estudiante("María", "21 años", "Medicina", 9.1));

//Mostrar estudiantes (Listado)
grupo.mostrarEstudiante();

//Calcular y mostrar promedio
console.log("Promedio general: ", grupo.calcularPromedio().toFixed(2));

//Buscar estudiante (resultados)
const estudianteBuscando = grupo.buscarPorNombre("Carlos");
if (estudianteBuscando){
    console.log("Estudiante encontrado: ", estudianteBuscando.toString());
} else {
    console.log("Estudiante no encontrado");
}