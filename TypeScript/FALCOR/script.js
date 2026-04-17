function validarFormulario(){

    let usuario = document.querySelector(".usuario").value.trim();
    let password = document.querySelector(".password").value.trim();
    let error = document.querySelector(".error-message");

    if(usuario === "" & password === ""){
        error.textContent = "Usuario y Contraseña son campos obligatorios.";
        return false;
    }else if(password === ""){
        error.textContent = "Contraseña campo obligatorio.";
        return false;
    }else if(usuario === ""){
        error.textContent = "Usuario campo obligatorio.";
        return false;
    }

    error.textContent = "";
    return true;
}