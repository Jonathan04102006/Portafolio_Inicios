var variableAny;
variableAny = "Hello";
console.log("Valor de variable ".concat(variableAny));
variableAny = 42;
console.log("Valor de variable ".concat(variableAny));
variableAny = true;
console.log("Valor de variable ".concat(variableAny));
var variableDesconocida;
variableDesconocida = "Hola";
// variableDesconocida = 42;
// variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown is a string: ".concat(variableDesconocida));
}
/* function throwError(message : string): never {
    throw new Error(message);
}

throwError(`Esto es un error`); */
function logMessage(message) {
    console.log("Log message ".concat(message));
}
logMessage("Es es un mensaje de log");
