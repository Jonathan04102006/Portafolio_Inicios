function openTab(button, tabId) {
  const card = button.closest(".card");
  const buttons = card.querySelectorAll(".tab-button");
  const contents = card.querySelectorAll(".tab-content");
  buttons.forEach(btn => btn.classList.remove("active"));
  contents.forEach(tab => tab.classList.remove("active"));
  button.classList.add("active");
  card.querySelector(`#${tabId}`).classList.add("active");
}

function validarCorreo() {
  const input = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje-correo');
  if (input.value.trim() === '') {
    mensaje.textContent = 'Campo requerido.';
    input.classList.add('error');
  } else {
    mensaje.textContent = '';
    input.classList.remove('error');
  }
}

function validarCorreosMultiples() {
  const input = document.getElementById('correoMultiple');
  const mensaje = document.getElementById('mensaje-multiple');
  if (input.value.trim() === '') {
    mensaje.textContent = 'Campo requerido.';
    input.classList.add('error');
  } else {
    mensaje.textContent = '';
    input.classList.remove('error');
  }
}

function validarBusqueda() {
  const input = document.getElementById('search');
  const mensaje = document.getElementById('mensaje-busqueda');
  const valor = input.value.trim();

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

function validarTelefono() {
  const input = document.getElementById("tel");
  const mensaje = document.getElementById("mensaje-telefono");
  const valor = input.value.trim();

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

function validarURL() {
  const input = document.getElementById('url');
  const mensaje = document.getElementById('mensaje-url');
  const valor = input.value.trim();

  const regex = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

  if (valor === '') {
    mensaje.textContent = 'Campo requerido.';
    input.classList.add('error');
  } else if (!regex.test(valor)) {
    mensaje.textContent = 'Formato de URL inválido. Usa http:// o https://';
    input.classList.add('error');
  } else {
    mensaje.textContent = '';
    input.classList.remove('error');
  }
}

const rango = document.getElementById("price");

function actualizarRango() {
  const salida = document.getElementById("output-price");
  const mensaje = document.getElementById("mensaje-rango");
  const valor = parseInt(rango.value);
  salida.textContent = `$${valor.toLocaleString()}`;

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

function validarFechaHora() {
  const calendario = document.getElementById('datetime');
  const mensaje = document.getElementById('mensaje-fecha');

  if (calendario.value.trim() === '') {
    mensaje.textContent = 'Campo requerido. Seleccione fecha y hora.';
    calendario.classList.add('error');
  } else {
    mensaje.textContent = '';
    calendario.classList.remove('error');
  }
}

function validarMes() {
  const mesInput = document.getElementById('month');
  const mensaje = document.getElementById('mensaje-mes');

  if (mesInput.value.trim() === '') {
    mensaje.textContent = 'Campo requerido. Seleccione un mes.';
    mesInput.classList.add('error');
  } else {
    mensaje.textContent = '';
    mesInput.classList.remove('error');
  }
}
