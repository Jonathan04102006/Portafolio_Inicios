<?php
include 'datosConexion.php';

// Recibe los datos JSON enviados por JavaScript
$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $valores = json_encode($data->aGuardar);
    $titulo = json_encode($data->aTitulo);
    
    $sql = "INSERT INTO mitabla(titulo, datos) VALUES('$titulo', '$valores')";
    $conn->query($sql);

    echo "ok";
}

$conn->close();
?>