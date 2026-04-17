// PARTE 1 = https://youtu.be/CnQj4yKfolU   

const sumadorDeNumeros = {
    arrayDeNumeros: [1, 2, 0, 4],
    numeroASumar: 1,
    sumarNumeros() {
        this.arrayDeNumeros.forEach(function (numeroDelArray) {
            console.log(numeroDelArray + this.numeroASumar);
        }, this);
    }
};

sumadorDeNumeros.sumarNumeros();
