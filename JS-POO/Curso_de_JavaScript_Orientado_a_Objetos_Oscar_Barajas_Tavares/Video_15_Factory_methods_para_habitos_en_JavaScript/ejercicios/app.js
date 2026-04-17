/* 🧠 Ejercicio 1: Crear hábitos básicos con Factory
🎯 Objetivo:

Aprender a crear objetos de hábitos usando un factory method simple.

📌 Instrucciones:
Crea una función llamada crearHabito.
Debe recibir:
nombre (string)
frecuencia (string: "diario", "semanal", etc.)
Debe retornar un objeto con:
nombre
frecuencia

método mostrarHabito() que imprima:

Hábito: [nombre] - Frecuencia: [frecuencia]
🧪 Ejemplo de uso esperado:
const habito1 = crearHabito("Leer", "diario");
habito1.mostrarHabito();
✅ Resultado esperado:
Hábito: Leer - Frecuencia: diario */
console.log(`************************************************************************`);
function crearHabito(nombre, frecuencia) {
    return {
        nombre,
        frecuencia,
        mostrarHabito() {
            console.log(`Hábito: ${this.nombre} - Frecuencia: ${this.frecuencia}`);
        }
    };
};

const habito1 = crearHabito("Leer", "diario");
habito1.mostrarHabito();


/* 🧠 Ejercicio 2: Factory con estado interno (progreso)
🎯 Objetivo:

Encapsular lógica interna dentro del factory (simulando propiedades privadas).

📌 Instrucciones:
Crea una función crearHabitoConProgreso.
Debe recibir:
nombre
Internamente debe tener:
variable privada progreso iniciando en 0
Retornar un objeto con métodos:
registrar() → aumenta progreso en 1
obtenerProgreso() → devuelve el progreso actual

mostrarEstado() → imprime:

Hábito: [nombre] - Progreso: [progreso]
🧪 Ejemplo:
const habito = crearHabitoConProgreso("Ejercicio");

habito.registrar();
habito.registrar();

console.log(habito.obtenerProgreso());
habito.mostrarEstado();
✅ Resultado esperado:
2
Hábito: Ejercicio - Progreso: 2 */
console.log(`************************************************************************`);
function crearHabitoConProgreso(nombre) {
    let progreso = 0;

    return {
        registrar() {
            progreso++;
        },
        obtenerProgreso() {
            return progreso;
        },
        mostrarEstado() {
            console.log(`Hábito: ${nombre} - Progreso: ${progreso}`);
        }
    };
}

const habito = crearHabitoConProgreso("Ejercicio");

habito.registrar();
habito.registrar();

console.log(habito.obtenerProgreso());
habito.mostrarEstado();

/* 🧠 Ejercicio 3: Factory Method con tipos de hábitos
🎯 Objetivo:

Aplicar Factory Method más estructurado, donde el tipo de hábito define su comportamiento.

📌 Instrucciones:
Crea una función crearHabito(tipo, nombre).
Según el tipo, debe retornar diferentes comportamientos:
🔹 Tipos:
"salud":
método accion() → "Realizando hábito saludable: [nombre]"
"productividad":
método accion() → "Mejorando productividad con: [nombre]"
"ocio":
método accion() → "Disfrutando: [nombre]"

Si el tipo no existe, mostrar:

Tipo de hábito no válido
🧪 Ejemplo:
const habito1 = crearHabito("salud", "Correr");
const habito2 = crearHabito("productividad", "Estudiar");
const habito3 = crearHabito("ocio", "Videojuegos");

habito1.accion();
habito2.accion();
habito3.accion();
✅ Resultado esperado:
Realizando hábito saludable: Correr
Mejorando productividad con: Estudiar
Disfrutando: Videojuegos */
console.log(`************************************************************************`);
function crearHabito1(tipo, nombre) {
    switch (tipo) {
        case "salud":
            return {
                accion() {
                    return `Realizando hábito saludable: ${nombre}`;
                }
            };
        case "productividad":
            return {
                accion() {
                    return `Mejorando productividad con: ${nombre}`;
                }
            };
        case "ocio":
            return {
                accion() {
                    return `Disfrutando: ${nombre}`;
                }
            };
        default:
            console.log("Tipo de hábito no válido");
            return null;
    }
}   

const habito2 = crearHabito1("productividad", "Estudiar");
console.log(habito2.accion());