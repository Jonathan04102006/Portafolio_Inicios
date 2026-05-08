document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const googleBtn = document.getElementById('googleBtn');
    const bgImg = document.getElementById('parallax-bg');

    // 1. Manejo del Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        
        console.log("Intentando conexión para:", user);
        // Aquí iría tu fetch a la API
        alert('Iniciando sesión...');
    });

    // 2. Botón de Google
    googleBtn.addEventListener('click', () => {
        console.log("Redirigiendo a Google OAuth...");
    });

    // 3. Efecto Parallax para monitores grandes
    // Esto da una sensación de profundidad premium
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        bgImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });
});