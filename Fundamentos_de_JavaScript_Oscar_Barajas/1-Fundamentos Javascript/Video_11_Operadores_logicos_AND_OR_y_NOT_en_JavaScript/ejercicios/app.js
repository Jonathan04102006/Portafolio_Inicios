/* 🧠 Ejercicio 1: Validar acceso a un sistema (AND &&)
📌 Enunciado:

Crea un programa que valide si un usuario puede acceder a un sistema.

Condiciones:

Debe tener usuarioCorrecto = true
Debe tener passwordCorrecto = true

👉 Solo si ambas condiciones se cumplen, puede acceder.

📂 Código base (app.js):
const usuarioCorrecto = true;
const passwordCorrecto = false;

// Escribe tu lógica aquí
🎯 Lo que debes hacer:
Usa el operador &&
Muestra en consola:
"Acceso concedido" si ambas son true
"Acceso denegado" en caso contrario */
console.log("****************************************************************");
let usuarioCorrecto = true;
let passwordCorrecto = true;

if (usuarioCorrecto && passwordCorrecto) {
    console.log(`Acceso concedido`);
} else {
    console.log(`Acceso denegado`);
}

passwordCorrecto = false;

if (usuarioCorrecto && passwordCorrecto) {
    console.log(`Acceso concedido`);
} else {
    console.log(`Acceso denegado`);
}


/* 🧠 Ejercicio 2: Permiso de entrada (OR ||)
📌 Enunciado:

Una persona puede entrar a un evento si cumple al menos una condición:

Es mayor de edad (esMayor = true)
Tiene invitación (tieneInvitacion = true)
📂 Código base (app.js):
const esMayor = false;
const tieneInvitacion = true;

// Escribe tu lógica aquí
🎯 Lo que debes hacer:
Usa el operador ||
Muestra en consola:
"Puede entrar" si cumple al menos una condición
"No puede entrar" si no cumple ninguna */
console.log("****************************************************************");
let esMayor = true;
let tieneInvitacion = true;

if (esMayor || tieneInvitacion) {
    console.log(`Puede entrar`);
} else {
    console.log(`No puede entrar`);
}

esMayor = false;
tieneInvitacion = false;

if (esMayor || tieneInvitacion) {
    console.log(`Puede entrar`);
} else {
    console.log(`No puede entrar`);
}

/* 🧠 Ejercicio 3: Activar/desactivar estado (NOT !)
📌 Enunciado:

Tienes una variable que indica si un sistema está activo:

sistemaActivo = true

Debes invertir su estado.

📂 Código base (app.js):
let sistemaActivo = true;

// Escribe tu lógica aquí
🎯 Lo que debes hacer:
Usa el operador !
Invierte el valor de sistemaActivo
Muestra el nuevo valor en consola */
console.log("****************************************************************");
let sistemaActivo = true;
console.log(sistemaActivo);

sistemaActivo = !true; // sistemaActivo = !sistemaActivo;
console.log(sistemaActivo);