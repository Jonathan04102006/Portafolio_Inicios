<?php
header('Content-Type: application/json; charset=utf-8');
require_once "datosConexion.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (isset($input['id']) && is_numeric($input['id'])) {
        $id = (int)$input['id'];
        $stmt = $conn->prepare("DELETE FROM lista WHERE id = ?");
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            echo json_encode(["status" => "ok"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "No se pudo eliminar"]);
        }
        $stmt->close();
    } else {
        http_response_code(400);
        echo json_encode(["error" => "ID inválido"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>