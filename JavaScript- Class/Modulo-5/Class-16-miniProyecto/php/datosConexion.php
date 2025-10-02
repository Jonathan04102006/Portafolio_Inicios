<?php
$servidor="localhost";
$usuario="root";
$password="";
$database="compra";

$conn = new mysql($servidor,$usuario,$password, $database);
if ($conn->connect_error){
    die("Conexión fallida");
}
?>