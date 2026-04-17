/* Dado un arreglo con al menos 4 colores, usa destructuración para guardar el primer y el tercer color en variables separadas y muéstralas en consola. */
console.log(`*******************ejercicio 1 de Destructuracion*******************`);
const colores = ["amarillo", "celeste", "rojo", "negro"];

const [primerColor, segundoColor, tercerColor] = colores;
console.log(primerColor);
console.log(tercerColor);

/* Dado un objeto usuario con las propiedades username, email y rol, usa destructuración de objetos para extraer esas propiedades y luego imprime un mensaje con sus valores. */
console.log(`*******************ejercicio 2 de Destructuracion*******************`);
const usuario = {
    username: "User2026",
    email: "jl958329@gmail.com",
    rol: "Gamer"
}

const {username, email, rol} = usuario;

console.log(`Usuario: ${username} Email: ${email} Rol: ${rol}`);

/* Dado un arreglo de números, usa destructuración para obtener el primer número y agrupar el resto en otra variable usando el operador ...resto. */
console.log(`*******************ejercicio 3 de Destructuracion*******************`);
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [uno, ...resto] = numeros;
console.log(uno);
console.log(...resto);