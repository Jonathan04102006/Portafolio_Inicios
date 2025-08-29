const input = document.getElementById('buscador');
const filas = Array.from(document.querySelectorAll('tbody tr'));
const encabezados = document.querySelectorAll('th');

// BUSCADOR
input.addEventListener('keyup', () => {
  const texto = input.value.toLowerCase();
  filas.forEach(fila => {
    const visible = Array.from(fila.children).some(td => td.textContent.toLowerCase().includes(texto));
    fila.style.display = visible ? '' : 'none';
  });
});

// ORDENADOR A-Z
encabezados.forEach((th, indice) => {
  th.addEventListener('click', () => {
    const ordenAscendente = !th.classList.contains('asc');
    encabezados.forEach(h => h.classList.remove('asc', 'desc'));
    th.classList.add(ordenAscendente ? 'asc' : 'desc');

    filas.sort((a, b) => {
      const valA = a.children[indice].textContent;
      const valB = b.children[indice].textContent;
      return ordenAscendente
        ? valA.localeCompare(valB, 'es', { numeric: true })
        : valB.localeCompare(valA, 'es', { numeric: true });
    });

    const cuerpo = document.querySelector('tbody');
    filas.forEach(f => cuerpo.appendChild(f));
  });
});

//LIMITE DE DATOS
const limiteSelect = document.getElementById('limite');
const addEventListener = Array.from(document.querySelectorAll('tbody tr'));

function aplicarLimite() {
  const limite = parseInt(limiteSelect.value);
  filas.forEach((fila, index) => {
    fila.style.display = index < limite ? '' : 'none';
  });
}
limiteSelect.addEventListener('change', aplicarLimite);
aplicarLimite();

//PAGINACION
document.addEventListener('DOMContentLoaded', () => {
  const filas = Array.from(document.querySelectorAll('tbody tr'));
  const paginacionDiv = document.getElementById('paginacion');

  let paginaActual = 1;
  const filasPorPagina = 10;

  function mostrarPagina(pagina) {
    const inicio = (pagina - 1) * filasPorPagina;
    const fin = inicio + filasPorPagina;

    filas.forEach((fila, i) => {
      fila.style.display = i >= inicio && i < fin ? '' : 'none';
    });

    paginacionDiv.innerHTML = '';
    const totalPaginas = Math.ceil(filas.length / filasPorPagina);
    for (let i = 1; i <= totalPaginas; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.disabled = i === pagina;
      btn.addEventListener('click', () => {
        paginaActual = i;
        mostrarPagina(paginaActual);
      });
      paginacionDiv.appendChild(btn);
    }
  }

  mostrarPagina(paginaActual);
});
