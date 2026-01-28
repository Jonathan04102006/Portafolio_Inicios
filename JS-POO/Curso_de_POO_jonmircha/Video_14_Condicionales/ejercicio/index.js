/*Edad y permisos
Crea una variable con una edad y muestra en consola:

“Puede votar” si la edad es mayor o igual a 18

“No puede votar” si es menor de 18
Usa if - else.
*/
console.log(`*********************ejercicio 1 de Condicionales*********************`);
var edad = 19;

if(edad >= 19){
    console.log(`Puede votar`);
}else{
    console.log(`No puede votar`);
}

/*Calificación escolar
Dada una variable nota (0 a 100), muestra:

“Excelente” si es mayor o igual a 90

“Aprobado” si está entre 70 y 89

“Reprobado” si es menor a 70
Usa if - else if - else.
*/
console.log(`*********************ejercicio 2 de Condicionales*********************`);
var nota = 17;

// Con if else
if (nota >= 0 && nota <= 69){
    console.log(`Reprobado`);
}else if(nota >= 70 && nota <= 89){
    console.log(`Aprovado`);
}else if(nota >= 90 && nota <= 100){
    console.log(`Excelente`);
}else{
    console.log(`Nota NO valida`);
}
    
// Con switch
switch (true) {
    case (nota >= 0 && nota <= 69):
    console.log(`Reprobado`);
    break;
    case (nota >= 70 && nota<= 89):
    console.log(`Aprovado`);
    break;
    case (nota >= 90 && nota <= 100):
    console.log(`Excelente`);
    break;
    default:
    console.log(`Nota NO valida`);
    break;
}

/*Día de la semana
Dado un número del 1 al 7, muestra el día correspondiente (1 = Lunes, 7 = Domingo).
Si el número no está en ese rango, muestra “Día inválido”.
Usa switch - case.
*/
console.log(`*********************ejercicio 3 de Condicionales*********************`);

var dia = 6;

if (dia = 1){
    console.log(`Lunes`);
}else if (dia = 2){
    console.log(`Martes`);
}else if (dia = 3){
    console.log(`Miercoles`);
}else if (dia = 4){
    console.log(`Jueves`);
}else if(dia = 5){
    console.log(`Viernes`);
}else if(dia = 6){
    console.log(`Sabado`);
}else if(dia = 7){
    console.log(`Domingo`);
}else{
    console.log(`No existe ese dia`);
}