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
