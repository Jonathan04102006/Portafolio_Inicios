/*1-INPUT-CORREO-ELECTRONICO*/
function validarCorreo() {
      const input = document.getElementById("correo");
      const mensaje = document.getElementById("mensaje");
      const correo = input.value.trim();

      if (correo === "") {
        mensaje.textContent = "Campo requerido.";
        input.classList.add("error");
      } else {
        mensaje.textContent = "";
        input.classList.remove("error");
      }
    }

/*2-INPUT-CORREO-ELECTRONICO-MULTIPLE*/
function validarCorreosMultiples() {
      const input = document.getElementById("correoMultiple");
      const mensaje = document.getElementById("mensaje-multiple");
      const correo = input.value.trim();

      if (correo === "") {
        mensaje.textContent = "Campo requerido.";
        input.classList.add("error");
      } else {
        mensaje.textContent = "";
        input.classList.remove("error");
      }
    }

/*3-INPUT-BUSQUEDA-O-DIRECCION-WEB*/
function validarBusqueda() {
      const input = document.getElementById("search");
      const mensaje = document.getElementById("mensaje-busqueda");
      const valor = input.value.trim();

      // Expresión para detectar URLs (http, www o dominio)
      const regexURL = /^(https?:\/\/)?(www\.)?[\w\-]+\.[a-z]{2,}(\S*)?$/i;

      if (valor === "") {
        mensaje.textContent = "Campo requerido.";
        input.classList.add("error");
      } else if (!regexURL.test(valor) && valor.length < 3) {
        mensaje.textContent = "Ingrese una dirección web válida o una búsqueda más extensa.";
        input.classList.add("error");
      } else {
        mensaje.textContent = "";
        input.classList.remove("error");
      }
    }

/*4-INPUT-NUMERO-DE-TELEFONO*/
function validarTelefono() {
      const input = document.getElementById("tel");
      const mensaje = document.getElementById("mensaje-telefono");
      const valor = input.value.trim();

      // Regex para número de teléfono: permite +, números, espacios o guiones
      const regex = /^(\+?\d{1,3}[- ]?)?\d{8,14}$/;

      if (valor === "") {
        mensaje.textContent = "Campo requerido.";
        input.classList.add("error");
      } else if (!regex.test(valor)) {
        mensaje.textContent = "Número de teléfono inválido. Ej: +503 71234567.";
        input.classList.add("error");
      } else {
        mensaje.textContent = "";
        input.classList.remove("error");
      }
    }

/*5-INPUT-URL*/
function validarURL() {
      const input = document.getElementById("url");
      const mensaje = document.getElementById("mensaje-url");
      const valor = input.value.trim();

      // Expresión regular para una URL básica (requiere http o https)
      const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

      if (valor === "") {
        mensaje.textContent = "Campo requerido.";
        input.classList.add("error");
      } else if (!regex.test(valor)) {
        mensaje.textContent = "Formato de URL inválido. Usa http:// o https://";
        input.classList.add("error");
      } else {
        mensaje.textContent = "";
        input.classList.remove("error");
      }
    }

/*6-INPUT-RANGO*/
const rango = document.getElementById("price");

    function actualizarRango() {
      const salida = document.getElementById("output-price");
      const mensaje = document.getElementById("mensaje-rango");
      const valor = parseInt(rango.value);
      salida.textContent = `$${valor.toLocaleString()}`;

      // Calcular el porcentaje del range
      const min = parseInt(rango.min);
      const max = parseInt(rango.max);
      const porcentaje = ((valor - min) / (max - min)) * 100;

      rango.style.setProperty('--valor', `${porcentaje}%`);
      if (valor < 100000 || valor > 400000) {
        mensaje.textContent = "El valor debe estar entre $100,000 y $400,000.";
        rango.classList.add("error");
      } else {
        mensaje.textContent = "";
        rango.classList.remove("error");
      }
    }

/*7-INPUT-CALENDARIO*/
const calendario = document.getElementById("datetime");

    function validarFechaHora() {
      const mensaje = document.getElementById("mensaje-fecha");

      if (calendario.value.trim() === "") {
        mensaje.textContent = "Campo requerido. Seleccione fecha y hora.";
        calendario.classList.add("error");
      } else {
        mensaje.textContent = "";
        calendario.classList.remove("error");
      }
    }

/*8-INPUT-MES*/
const mesInput = document.getElementById("month");

    function validarMes() {
      const mensaje = document.getElementById("mensaje-mes");

      if (mesInput.value.trim() === "") {
        mensaje.textContent = "Campo requerido. Seleccione un mes.";
        mesInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        mesInput.classList.remove("error");
      }
    }

/*9-INPUT-HORA*/
const horaInput = document.getElementById("time");

    function validarHora() {
      const mensaje = document.getElementById("mensaje-hora");

      if (horaInput.value.trim() === "") {
        mensaje.textContent = "Campo requerido. Seleccione una hora.";
        horaInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        horaInput.classList.remove("error");
      }
    }

/*10-INPUT-SEMANA*/
const semanaInput = document.getElementById("week");

    function validarSemana() {
      const mensaje = document.getElementById("mensaje-semana");

      if (semanaInput.value.trim() === "") {
        mensaje.textContent = "Campo requerido. Seleccione una semana.";
        semanaInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        semanaInput.classList.remove("error");
      }
    }

/*11-INPUT-FECHALIMITADA*/
const fechaLimitada = document.getElementById("myDate");

    function validarFechaLimitada() {
      const mensaje = document.getElementById("mensaje-fecha-limitada");
      const valor = fechaLimitada.value;

      if (valor === "") {
        mensaje.textContent = "Campo requerido. Seleccione una fecha.";
        fechaLimitada.classList.add("error");
        return;
      }

      // Validar contra el rango permitido (por seguridad extra)
      const fechaSeleccionada = new Date(valor);
      const min = new Date("2013-06-01");
      const max = new Date("2013-08-31");

      if (fechaSeleccionada < min || fechaSeleccionada > max) {
        mensaje.textContent = "La fecha debe estar entre el 1 de junio y el 31 de agosto de 2013.";
        fechaLimitada.classList.add("error");
      } else {
        mensaje.textContent = "";
        fechaLimitada.classList.remove("error");
      }
    }

/*12-INPUT-COLOR*/
const colorInput = document.getElementById("color");

    function validarColor() {
      const mensaje = document.getElementById("mensaje-color");
      const valor = colorInput.value;

      if (valor === "#000000") {
        mensaje.textContent = "Por favor, selecciona un color distinto al negro por defecto.";
        colorInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        colorInput.classList.remove("error");
      }
    }

/*14-INPUT-CHEQUESITOS*/
const checkboxes = document.querySelectorAll('input[name="caja"]');

    function validarCheckboxes() {
      const mensaje = document.getElementById("mensaje-checkbox");
      let algunoMarcado = false;

      checkboxes.forEach(caja => {
        if (caja.checked) {
          algunoMarcado = true;
        }
      });

      if (!algunoMarcado) {
        mensaje.textContent = "Debes seleccionar al menos una opción.";
        checkboxes.forEach(caja => caja.classList.add("error"));
      } else {
        mensaje.textContent = "";
        checkboxes.forEach(caja => caja.classList.remove("error"));
      }
    }

    checkboxes.forEach(caja => {
      caja.addEventListener("change", validarCheckboxes);
    });

/*15-INPUT-ARCHIVO*/
const archivoInput = document.getElementById("Archivo");

    function validarArchivo() {
      const mensaje = document.getElementById("mensaje-archivo");

      if (archivoInput.files.length === 0) {
        mensaje.textContent = "Campo requerido. Selecciona un archivo.";
        archivoInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        archivoInput.classList.remove("error");
      }
    }

/*18-INPUT-NUMERO*/
const numeroInput = document.getElementById("numero");

    function validarNumero() {
      const mensaje = document.getElementById("mensaje-numero");
      const valor = numeroInput.value.trim();

      if (valor === "") {
        mensaje.textContent = "Campo requerido. Ingrese un número.";
        numeroInput.classList.add("error");
      } else if (isNaN(valor) || Number(valor) < 0) {
        mensaje.textContent = "Ingrese un número válido (mayor o igual a 0).";
        numeroInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        numeroInput.classList.remove("error");
      }
    }

/*19-INPUT-CONTRASEÑA*/
const passInput = document.getElementById("contraseña");

    function validarContraseña() {
      const mensaje = document.getElementById("mensaje-pass");
      const valor = passInput.value;

      // Expresión regular: mínimo 8 caracteres, al menos una letra y un número
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (valor.trim() === "") {
        mensaje.textContent = "Campo requerido. Ingresa una contraseña.";
        passInput.classList.add("error");
      } else if (!regex.test(valor)) {
        mensaje.textContent = "Debe tener al menos 8 caracteres, incluyendo letras y números.";
        passInput.classList.add("error");
      } else {
        mensaje.textContent = "";
        passInput.classList.remove("error");
      }
    }

/*20-INPUT-BOTON-RADIO*/  
const radios = document.querySelectorAll('input[name="boton-radio"]');

    function validarRadio() {
      const mensaje = document.getElementById("mensaje-radio");
      let algunoSeleccionado = false;

      radios.forEach(radio => {
        if (radio.checked) {
          algunoSeleccionado = true;
        }
      });

      if (!algunoSeleccionado) {
        mensaje.textContent = "Debes seleccionar una opción.";
        radios.forEach(radio => radio.classList.add("error"));
      } else {
        mensaje.textContent = "";
        radios.forEach(radio => radio.classList.remove("error"));
      }
    }