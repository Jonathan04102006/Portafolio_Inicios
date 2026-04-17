const persona = {
    hablar() {
        console.log('Hola, soy una persona');
    },
};

const perro = {
    hablar() {
        console.log('Gua Gua!!');
    },
};

const robot = {
    hablar() {
        console.log('Beep Bop');
    },
};

function hacerHalblar(algo) {
    algo.hablar();
}

hacerHalblar(persona);
hacerHalblar(perro);
hacerHalblar(robot);