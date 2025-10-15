let notas = [
    { nota: 9, nombre: "Jab" },
    { nota: 10, nombre: "Eva" }
];
let edad = 18;
const NOMBRE = "Jab";
let lenguaje = true;
let nota1 = 8;
let nota2 = 8;
let resultado = (nota1 + nota2) / 2;
let aprobado = resultado >= 5 ? "Has aprobado" : "Has suspendido";
let notaMaxima = resultado === 10 ? "Tienes un 10" : "No lo tienes";

document.querySelector("button").addEventListener("click", contar);
document.querySelectorAll("button")[1].addEventListener("click", saludar);

function saludar() {
    let mensaje;
    if (resultado < 5) {
        mensaje = "Has suspendido";
    } else if (resultado < 7) {
        mensaje = "Has aprobado";
    } else if (resultado < 9) {
        mensaje = "Notable";
    } else if (resultado <= 10) {
        mensaje = "Excelente<a href='https://www.youtube.com/@ArrelIUTU'><img src='img/caraFeliz.png'></a>";
    }
    document.querySelector(".caja").innerHTML = mensaje;
}

function contar() {
    document.querySelector(".caja").innerHTML = "";
    for (let i = 0; i < notas.length; i++) {
        document.querySelector(".caja").innerHTML +=
            `<div>${notas[i].nombre} ha sacado ${notas[i].nota}</div>`;
    }
}