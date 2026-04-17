// Gestión de estudiantes (versión espagueti)
let estudiantes = [];

let nombre1 = "Ana";
let edad1 = 20;
let carrera1 = "Ingeniería";
let nota1 = 8.5;
estudiantes.push({ nombre: nombre1, edad: edad1, carrera: carrera1, nota: nota1 });

let nombre2 = "Carlos";
let edad2 = 22;
let carrera2 = "Derecho";
let nota2 = 6.9;
estudiantes.push({ nombre: nombre2, edad: edad2, carrera: carrera2, nota: nota2 });

let nombre3 = "María";
let edad3 = 21;
let carrera3 = "Medicina";
let nota3 = 9.1;
estudiantes.push({ nombre: nombre3, edad: edad3, carrera: carrera3, nota: nota3 });

// Mostrar estudiantes
console.log("Listado de estudiantes:");
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i].nombre + " - " + estudiantes[i].carrera + " (" + estudiantes[i].nota + ")");
}

// Calcular promedio manual
let sumaNotas = 0;
for (let i = 0; i < estudiantes.length; i++) {
  sumaNotas += estudiantes[i].nota;
}
let promedio = sumaNotas / estudiantes.length;
console.log("Promedio general: " + promedio);

// Buscar estudiante por nombre
let nombreBuscar = "María";
let encontrado = null;
for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].nombre === nombreBuscar) {
    encontrado = estudiantes[i];
  }
}
if (encontrado) {
  console.log("Estudiante encontrado: " + encontrado.nombre + " (" + encontrado.nota + ")");
} else {
  console.log("Estudiante no encontrado");
}