// Operadores

// Aritmeticas: + - * / % ()
let a = 5 + 5 - 10 *3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);

/* Relaciones: >, <, >=, <=, ==, ===, !=, !== */

// console.log(8 > 9);
// console.log(9 > 8);
// console.log(8 >= 9);
// console.log(9 >= 8);
// console.log(7 < 7);
// console.log(7 <= 7);

/*
= 1 igual es asignacion
== 2 iguales es compacion de valores
=== 3 iguales es comparacion de tipo de dato y de valor
*/

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

// Incremento y decremento

let i = 2;
console.log(i++)
console.log(++i)
// i = i + 2;
// i *= 3;

// Operador unario
i++;
i--;
++i;
--i;
console.log(i);

/*Logicos
! NOT: Niega, es decir lo que es verdadero lo vuelve falso y viceversa.
|| OR: Cuando tengo 2 o mas condiciones, con que una se cumpla, es decir sea verdadera, el OR sera verdadero.
&& AND: Cunto tenga 2 o mas condiciones, todas tienen que cumplirse es decir verdaderas para AND se valide
*/
console.log(!true);
console.log(!false);

console.log((9 === 9) || ("9" === 9));

console.log((9 === 9) && ("9" === 9));