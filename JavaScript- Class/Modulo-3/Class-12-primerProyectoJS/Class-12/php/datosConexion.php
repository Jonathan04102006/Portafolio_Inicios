<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$bbs = "valores";

// IMPORTANTE: la clase correcta es "mysqli", no "mysql"
$conn = new mysqli($servidor, $usuario, $password, $bbs);

// Verifica conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
