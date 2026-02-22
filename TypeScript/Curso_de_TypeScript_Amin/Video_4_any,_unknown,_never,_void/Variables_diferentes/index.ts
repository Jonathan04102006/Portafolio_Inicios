let variableAny: any;

variableAny = `Hello`;
console.log(`Valor de variable ${variableAny}`);

variableAny = 42;
console.log(`Valor de variable ${variableAny}`);

variableAny = true;
console.log(`Valor de variable ${variableAny}`);

let variableDesconocida: unknown;

variableDesconocida = `Hola`;
// variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === `string`){
    console.log(`Variable unknown is a string: ${variableDesconocida}`);
}

/* function throwError(message : string): never {
    throw new Error(message);
}

throwError(`Esto es un error`); */

function logMessage(message : string): void {
    console.log(`Log message ${message}`);
}

logMessage(`Es es un mensaje de log`);