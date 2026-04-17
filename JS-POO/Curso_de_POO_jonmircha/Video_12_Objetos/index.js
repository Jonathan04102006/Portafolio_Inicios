let a = new String("Hola");
// console.log(a);

const b = {}
console.log(b);

const c = new Object();
console.log(c);

/* Dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama metodos */
const jon = {
    nombre: "Jonathan",
    apellido: "Perez",
    edad: 19,
    pasatiempos: ["Correr","Hacer ejercicio", "Estudiar"],
    soltero: true,
    contacto: {
        email: "jonaperez0406@gmail.com",
        youtube: "Arrel00",
        movil: "+503 6061-2594"
    },
    saludar: function(){
        console.log('Hola :)')
    },
    decirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir en ${this.contacto.youtube} en Youtube.`)
    }
}

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto.youtube);
jon.saludar();
jon.decirMiNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));