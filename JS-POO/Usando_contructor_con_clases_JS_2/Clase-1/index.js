class miClase{
    constructor(primero, segundo){
        this.uno = primero;
        this.dos = segundo;
        this.tres = "Hola a todos";
    };
    miMetodoUno(){
        return this.uno
    };
    miMetodoDos(parametroUno, parametroDos){
        document.write(
            "El parametro UNO es: " + parametroUno +
            "<br>El parametro DOS ES: " + parametroDos
            );
    };
}

// CREAR UN OBJETO - instanciar
var objetoUno = new miClase("Ariel y Jona", 77777);
// RECUPERAR DATOS

document.write( objetoUno.uno);