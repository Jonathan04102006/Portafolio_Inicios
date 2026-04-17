// Http

const FAKEAPI = 'https://api.escuelajs.co/api/v1/products';

// Fetch GET
fetch(FAKEAPI)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((error) => console.error('Error: ', error));

// Fetch POST/PUT/DELETE

console.log(`-----------------------------------------------------------`);

fetch(FAKEAPI, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
        title: 'Producto de prueba',
        price: 999,
        description: 'Creando desde fetch',
        categoryId: 1,
        images: ['https://placeimg.com/640/480/any'],
    }),
});

/* El response incluye un status que describe el resultado del request.

200: éxito.
201: creado (se agregó correctamente un recurso).
3xx: redirecciones.
400: error del cliente (permisos o datos faltantes).
401: no autenticado.
404: recurso no encontrado.
500: error interno del servidor. */