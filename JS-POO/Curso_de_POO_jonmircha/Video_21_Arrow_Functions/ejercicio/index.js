/* Crea una arrow function llamada multiplicar que reciba dos parámetros y retorne el resultado de multiplicarlos. Luego imprime el resultado en consola. */
console.log(`**********************************ejercicio 1 de Arrow Functions**********************************`);
const multiplicar = (a, b) => a + b;
console.log(multiplicar(5, 6));

/* Crea una arrow function llamada esPar que reciba un número como parámetro y retorne true si es par o false si es impar. Después, prueba la función con diferentes números. */
console.log(`**********************************ejercicio 2 de Arrow Functions**********************************`);
const esPar = (numero) => numero % 2 === 0;
console.log(esPar(2));
console.log(esPar(6));
console.log(esPar(4));
console.log(esPar(3));
console.log(esPar(7));

/* Crea un arreglo de nombres y utiliza el método forEach con una arrow function para mostrar en consola un mensaje como: "Hola, mi nombre es ___" para cada elemento del arreglo. */
console.log(`**********************************ejercicio 3 de Arrow Functions**********************************`);
const nombres = ["Jonathan", "Javier", "Enrique", "Rogelio", "Steven", "Anderson"];
nombres.forEach((nombre) => console.log(`Hola, mi nombre es ${nombre}`));