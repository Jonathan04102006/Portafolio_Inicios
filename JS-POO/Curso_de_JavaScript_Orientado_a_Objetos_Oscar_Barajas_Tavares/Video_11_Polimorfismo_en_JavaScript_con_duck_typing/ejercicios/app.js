/* 🧠 Ejercicio 1: Agregar nuevos objetos compatibles (duck typing básico)
🎯 Objetivo:

Practicar cómo cualquier objeto puede ser usado siempre que tenga el método hablar().

📋 Instrucciones:
Crea 2 nuevos objetos:
gato
loro
Cada objeto debe tener un método hablar() que imprima:
Gato → "Miau Miau"
Loro → "Hola! soy un loro"
Usa la función hacerHablar(algo) (ya definida) para hacer que ambos objetos “hablen”.
✅ Resultado esperado en consola:
Miau Miau
Hola! soy un loro
💡 Qué estás aprendiendo:

No importa si el objeto es persona, animal o cosa 🤖
👉 Si tiene hablar(), funciona (duck typing) */
console.log(`************************************************************************`);
const gato = {
    hablar() {
        console.log("Miau Miau");
    },
};

const loro = {
    hablar() {
        console.log("Hola! soy un loro");
    },
};

function hacerHablar(algo) {
    algo.hablar();
}

hacerHablar(gato);
hacerHablar(loro);

/* 🧠 Ejercicio 2: Validación antes de ejecutar (duck typing seguro)
🎯 Objetivo:

Evitar errores verificando si el objeto realmente tiene el método hablar().

📋 Instrucciones:
Modifica la función hacerHablar(algo) para que:
Verifique si algo.hablar existe
Y si es una función
Si cumple:
Ejecuta algo.hablar()
Si NO cumple:

Muestra en consola:

Este objeto no sabe hablar
Crea un objeto:
const piedra = {
    peso: 10
};
Llama:
hacerHablar(piedra);
✅ Resultado esperado:
Este objeto no sabe hablar
💡 Qué estás aprendiendo:

Duck typing en la práctica real incluye validaciones:

if (typeof algo.hablar === "function") */
console.log(`************************************************************************`);
function hacerHablar(algo) {
    if (algo.hablar && typeof algo.hablar === "function") {
        algo.hablar();
    } else {
        console.log("Este objeto no sabe hablar");
    }
}

const piedra = {
    peso: 10
};

hacerHablar(piedra);

/* 🧠 Ejercicio 3: Polimorfismo con múltiples comportamientos
🎯 Objetivo:

Aplicar duck typing con otro método adicional, no solo hablar().

📋 Instrucciones:
Crea una nueva función:
function interactuar(algo) {
    algo.hablar();
    algo.moverse();
}
Crea 3 objetos:
humano
pez
auto
Cada objeto debe tener:
Método hablar()
Método moverse()

Ejemplo esperado:

const humano = {
    hablar() {
        console.log("Hola!");
    },
    moverse() {
        console.log("Caminando...");
    }
};
const pez = {
    hablar() {
        console.log("Glub glub");
    },
    moverse() {
        console.log("Nadando...");
    }
};
const auto = {
    hablar() {
        console.log("Bip bip");
    },
    moverse() {
        console.log("Conduciendo...");
    }
};
Llama:
interactuar(humano);
interactuar(pez);
interactuar(auto);
✅ Resultado esperado:
Hola!
Caminando...

Glub glub
Nadando...

Bip bip
Conduciendo... */
console.log(`************************************************************************`);
function interactuar(algo) {
    algo.hablar();
    algo.moverse();
}

const humano = {
    hablar() {
        console.log("Hola!");
    },
    moverse() {
        console.log("Caminando...");
    }
};

const pez = {
    hablar() {
        console.log("Glub glub");
    },
    moverse() {
        console.log("Nadando...");
    }
};

const auto = {
    hablar() {
        console.log("Bip bip");
    },
    moverse() {
        console.log("Conduciendo...");
    }
};

interactuar(humano);
interactuar(pez);
interactuar(auto);   