/*Declara una constante llamada PI con el valor de 3.1416 y muéstrala en consola. Luego intenta cambiar su valor y observa qué ocurre.
*/
console.log("*****************ejercicio 1 const*****************");
const PI = 3.1416
console.log(PI);
/* PI = 4.1416; (muestra: Uncaught TypeError: Assignment to constant variable. at index.js:6:4)
*/

/*Crea una constante llamada usuario que almacene un objeto con las propiedades nombre y edad. Modifica solo la propiedad edad y muestra el objeto actualizado.
*/
console.log("*****************ejercicio 2 const*****************");
const usuario = {
    nombre: "Jonathan",
    edad: 19
};
console.log(usuario);

usuario.edad = 20;
console.log(usuario);

/*Declara una constante llamada colores que contenga un arreglo con tres colores. Agrega un color nuevo al arreglo y luego muéstralo en consola.
*/
console.log("*****************ejercicio 3 const*****************");
const colores = ["amarillo", "celeste", "rojo"];
console.log(colores);

colores.push("gris");
console.log(colores);