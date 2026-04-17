function imprimirMensaje(message: string): void{
    console.log(message);
}

imprimirMensaje(`Hola, soy un mensaje.`);

function sumar(numero1: number, number2: number): number{
    return numero1 + number2;
}

// let resultado : number = sumar(5, 10);

console.log(`Tu resultado es: ${sumar(5, 10)}`);