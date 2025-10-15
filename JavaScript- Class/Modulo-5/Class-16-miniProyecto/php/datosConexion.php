<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$database = "compra";

// Usa mysqli, no "mysql"
$conn = new mysqli($servidor, $usuario, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>