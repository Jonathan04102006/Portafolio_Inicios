<?php

/* 
Cookie: Es un fichero que se almacena en el ordenador del usuario que visita
 * la web, con el fin de recordar datos o rastrear el comportamiento del mismo
 * en la web.
 */

// Crear cookie
// setcookie("nombre", "valor que solo puede ser texto", caducidad, ruta, domini);

// Cookie basica
setcookie("micookie", "valor de mi galleta");

// Cokie con expiracion
setcookie("unyear", "valor de mi cookie de 356 dias", time()+(60*60*24*365));

header('Location:ver_cookies.php');

?>