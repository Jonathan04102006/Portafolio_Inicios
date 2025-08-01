<?php
    include 'datosConexion.php';
    $data = json_decode(file_get_contents("php://input"));

    if ($data) {
        $id = $data->aEditar;  
        $datos = json_encode($data->aGuardar);
        $titulo = $data->aTitulo;

        $sql = "UPDATE mitabla SET datos = '$datos', titulo = '$titulo' WHERE id = $id";
        $conn->query($sql);
    }

    echo "ok";
    $conn->close();
?>
