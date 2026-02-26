interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string; /* Opcional */
}

let direccion: Direccion = {
    calle: "calle aleatoria",
    numero: 178,
    ciudad: "Racoon City" /* No es obligatoria */
};

console.log(direccion);

// Read only
interface Persona {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}

const personaRead: Persona = {
    nombre: "Lion",
    edad: 47,
    esDesarrollador: false
}

console.log("Persona", personaRead);

// personaRead.nombre = "Ashley"; /* No se puede reescribir por que se establecio en "Persona" el "readonly" */

// Interface extendida
interface Empleado extends Persona {
    readonly puesto: string;
}

const empleadoRead: Empleado = {
    nombre: "Lion",
    edad: 47,
    esDesarrollador: true,
    puesto: "Desarrolador Jr"
};

console.log("Empleado: ", empleadoRead);