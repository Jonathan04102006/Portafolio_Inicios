let edad = 19;

// >
if (edad > 17) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// >=
if (edad >= 18) {
console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// <
if (edad < 18) {
console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

if (edad <= 17) {
console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

/* if-else if-else*/

/* Dejame dormir - 0hrs - 5hrs
Buenos dias 6hrs - 11 hrs
Buenas tardes 12hrs - 18 hrs
Buenas noches 19hrs - 23hrs
*/

let hora = 0;
if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
}else if(hora >= 6 && hora <= 11){
    console.log("Buenos dias");
}else if(hora >= 12 && hora <= 18){
    console.log(`Bueas tardes`);
}else{
    console.log(`Buenas noches`);
}

if(hora < 6){
    console.log("Dejame dormir");
}else if(hora > 5 && hora < 12){
    console.log("Buenos dias");
}else if(hora > 11 && hora < 19){
    console.log(`Bueas tardes`);
}else{
    console.log(`Buenas noches`);
}

// Operador ternario (condicion) ? verdadero : falsa
console.log("----------Operador ternario----------");
let eresMayor = (edad >= 18)
? "Eres mayor de edad"
: "Eres menor de edad";
console.log(eresMayor);

// switch - case
/*
domingo - 0 
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
*/

let dia = 2;
switch(dia){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Este dia no existe");
        break;
}