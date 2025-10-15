<?php
include 'datosConexion.php';

$data = json_decode(file_get_contents("php://input"));

if ($data){
    $valores = $data->aGuardar;
    $sql = "TRUNCATE TABLE albumes";
    $conn->query($sql);
    $sql = "INSERT INTO albumes (imags) VALUES ('".json_encode($valores)."')";
    $conn->query($sql);
}

$conn->close();
?>
