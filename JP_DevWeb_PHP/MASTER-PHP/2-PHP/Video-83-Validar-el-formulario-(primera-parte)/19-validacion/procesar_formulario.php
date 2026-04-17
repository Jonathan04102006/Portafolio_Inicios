<?php
$error = 'faltan_valores';

if(empty($_POST['nombre']) && empty($_POST['apellidos']) && 
   empty($_POST['edad']) && empty($_POST['email']) && empty($_POST['pass'])){
    $error = false;
    
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
}else{
    $error = 'faltan_valores';
    header("Location:index.php?error=$error");
}
?>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Validacion de formulario PHP</title>
    </head>
    <body>
        
    </body>
</html>    