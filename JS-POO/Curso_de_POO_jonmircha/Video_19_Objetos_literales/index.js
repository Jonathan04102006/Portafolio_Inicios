let nombre = "Roshan",
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar:function(){
        console.log("guauuu guauuu!!!")
    }
}

console.log(perro);
perro.ladrar()



const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("guauuu guauuu guauuu!!1")
    }
}

console.log(dog);
dog.ladrar();