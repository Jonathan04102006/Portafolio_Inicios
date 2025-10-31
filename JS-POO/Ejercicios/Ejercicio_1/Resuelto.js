class Estudiante {
    constructor(nombre, edad, carrera, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.nota = nota;
    }

    toString(){
        return `${this.nombre} - ${this.carrera} (${this.nota})`;
    }
}

class grupoEstudiantes{
    constructor(){
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante){
        if (estudiante instanceof Estudiante){
            this.estudiantes.push(estudiante);
        } else {
            throw new Error ("Solo se puede agregar instancias de Estudiante");
        }
    }

    mostrarEstudiante(){
        console.log("Listado de estudiantes");
        this.estudiantes.forEach(estudiante => {
            console.log(estudiante.toString());
        });
    }

    calcularPromedio(){
        if (this.estudiantes.length === 0)
            return 0;
        const suma = this.estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
        return suma / this.estudiantes.length;
    }

    buscarPorNombre(nombre){
        return this.estudiantes.find(estudiante => estudiante.nombre === nombre) || null;
    }

    obtenerCantidad(){
        return this.estudiantes.length;
    }
}

//Mostrar estudiantes (Listado)
//Calcular y mostrar promedio
//Buscar estudiante (resultados)