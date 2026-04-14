// 1. Configuración (Usa tu ID real que ya tenemos)
const CLIENT_ID = '59625450780-pqobp1879riooqvlu2vpckh397q35fj6.apps.googleusercontent.com';

// 2. ESTA DIRECCIÓN DEBE SER IDÉNTICA A TU IMAGEN
const REDIRECT_URI = 'http://127.0.0.1:5500/GoogleCloud-Login/Prueba-Google-Cloud/Login/entrada.html';

document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');

    const params = {
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        response_type: 'token',
        scope: 'openid email profile',
        state: 'seguridad123',
        prompt: 'select_account'
    };

    // Agregamos los parámetros a la URL
    Object.keys(params).forEach(key => authUrl.searchParams.append(key, params[key]));

    // Redirigir
    window.location.href = authUrl.toString();
});