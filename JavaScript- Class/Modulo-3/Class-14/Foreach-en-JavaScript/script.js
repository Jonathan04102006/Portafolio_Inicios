const contenedor=document.querySelector("body");

const lenguajes1 = {
    "JavaScript" : {
        "nombre" : "JavaScript",
        "inicio" : 1995},
    "React" : {
        "nombre" : "React",
        "inicio" : 2013},
    "Next" : {
        "nombre" : "Next.js",
        "inicio" : 2016},
    "PHP" : {
        "nombre" : "PHP",
        "inicio" : 1994
    }
};
contenedor.innerHTML=+`"<div>El año de aparicion de JavaScript
${lenguajes1["JavaScript"]["inicio"]}"</div>`;

const nuevoArray=Object.keys(lenguajes1)
.filter(valor => lenguajes1[valor].inicio > 2000)
.map(valor =>
    {
        document.querySelector("body").innerHTML += `
        <div>
            ${lenguajes[valor].nombre} aparecio en ${lenguajes1[valor].inicio}
        </div>
        `
        return valor;
});

const lenguajes2 = {
    "JavaScript" : {
        "nombre" : "JavaScript",
        "inicio" : 1995},
    "React" : {
        "nombre" : "React",
        "inicio" : 2013},
    "Next" : {
        "nombre" : "Next.js",
        "inicio" : 2016},
    "PHP" : {
        "nombre" : "PHP",
        "inicio" : 1994
    }
};

lenguajes2.filter(valor =>valor.inicio > 2000)
map(valor =>
    contenedor,innerHTML += `<div>${valor.nombre} aparecio en ${valor.inicio}</div>`);