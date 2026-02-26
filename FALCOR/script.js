function validarFormulario(){

    let usuario = document.querySelector(".usuario").value.trim();
    let password = document.querySelector(".password").value.trim();
    let error = document.querySelector(".error-message");

    if(usuario === "" || password === ""){
        error.textContent = "Usuario y Contraseña son obligatorios.";
        return false;
    }

    error.textContent = "";
    return true;
}