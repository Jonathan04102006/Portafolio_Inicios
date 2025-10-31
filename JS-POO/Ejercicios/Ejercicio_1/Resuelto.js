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
        return `${this.nombre} - ${this.carrera} (${this.nota})`;
    }
}

// Clase grupoEstudiantes: gestiona una colección de estudiantes
class grupoEstudiantes{
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

//Mostrar estudiantes (Listado)
//Calcular y mostrar promedio
//Buscar estudiante (resultados)