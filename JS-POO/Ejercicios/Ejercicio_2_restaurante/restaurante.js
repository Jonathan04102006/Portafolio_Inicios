// Clase que representa al Restaurante
class Restaurante {
    constructor() {
        this.comidas = ["Pizza", "Hamburguesa", "Ensalada"];
        this.bebidas = ["Agua", "Refresco", "Cafe"];
    }
}

// Clase que maneja la Interfaz de Usuario
class InterfazUsuario {
    constructor () {
        this.restaurante = new Restaurante();
        this.formulario = document.getElementById('formulario');
        this.agregarMasEl = document.getElementById('agregar-mas')
    }
    
    // Método privado (enlaza eventos)
    _iniciarEventos(){
        document.getElementById('btn-pedir').addEventListener('click', () => this._confirmarPedido())
        document.getElementById('btn-si').addEventListener('click', () => this._reiniciar())
        document.getElementById('btn-no').addEventListener('click', () => this._finalizar())
    }
    
    // Confirmar pedido
    _confirmarPedido(){
        const platillo = this.selectComida.value;
        const bebida = this.selectBebida.value;

        const mensaje = this.restaurante.generarMensaje(platillo, bebida);
        this._mostrarMensaje(mensaje, "exito")
        this.formulario.classList.add('oculto')
        this.agregarMasEl.classList.remove('oculto')
    }

    _reiniciar(){

    }

    _finalizar(){

    }

}