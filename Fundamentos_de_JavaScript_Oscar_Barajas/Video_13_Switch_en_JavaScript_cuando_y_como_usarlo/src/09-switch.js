// Switch

/*
switch (expresion) {
    case valor1:
        // Codigo ...
        break
    case valor2:
        // Codigo ...
        break
    default:
        // Codigo ...
}
 */

const dia = `lunes`;

switch (dia) {
    case `lunes`:
    case `martes`:
    case `miercoles`:
    case `jueves`:
    case `viernes`:
        console.log(`Días laborales`);
        break
    case `sabado`:
    case `domigo`:
        console.log(`Fin de semana`);
        break
    default:
        console.log(`Día no valido`);
}