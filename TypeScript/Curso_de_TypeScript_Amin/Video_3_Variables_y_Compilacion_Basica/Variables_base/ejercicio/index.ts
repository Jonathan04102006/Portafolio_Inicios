/* Declara cinco variables tipadas en TypeScript: un string para el nombre de una ciudad, un number para su población, un boolean que indique si es capital, una variable que pueda ser string | undefined para el nombre del alcalde y una variable de tipo null. Luego imprime todos los valores en consola antes y después de asignarle valor a la variable opcional. */
console.log(`**********************ejercicio 1 de Variables y Compilación Básica**********************`);
let ciudad: string = "San Salvador";
let numero: number = 2400;
let boolean: boolean = true;
let nombreAlcalde: string | undefined = "Javier";
let anulado: null = null;

/* Crea un archivo app.ts donde declares al menos cuatro variables con tipos explícitos (string, number, boolean y null). Compila el archivo a JavaScript usando el compilador de TypeScript y ejecuta el archivo generado con Node.js para verificar los resultados en consola. */
console.log(`**********************ejercicio 2 de Variables y Compilación Básica**********************`);
let palabra: string = "estudiante";
let numero1: number = 19;
let boolean1: boolean = true;
let nulo: null = null;

console.log(palabra, numero1, boolean1, nulo);

/* Declara una variable que pueda ser number | undefined para representar la nota de un estudiante. Imprime su valor antes de asignarle una nota, luego asígnale un número y vuelve a imprimirlo. Finalmente, muestra un mensaje personalizado usando template strings que incluya el nombre del estudiante y su nota. */
console.log(`**********************ejercicio 3 de Variables y Compilación Básica**********************`);
let numero2: number | undefined = undefined;
console.log(numero2);

numero2 = 8;
console.log(numero2);