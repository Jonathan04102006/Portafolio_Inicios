<?php
header('Content-Type: application/json');
require("datosConexion.php");

$input = json_decode(file_get_contents("php://input"), true);

if (isset($input['aGuardar']) && !empty($input['aGuardar'])) {
    $producto = $input['aGuardar'];

    $stmt = $conn->prepare("INSERT INTO lista (productos) VALUES (?)");
    $stmt->bind_param("s", $producto);

    if ($stmt->execute()) {
        echo json_encode(["status" => "ok", "mensaje" => "Producto añadido"]);
    } else {
        echo json_encode(["status" => "error", "mensaje" => "Error al insertar"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "mensaje" => "Dato inválido"]);
}

$conn->close();
?>