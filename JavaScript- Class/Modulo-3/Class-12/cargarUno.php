<?php
    include 'datosConexion.php';
    $data=json_decode(file_get_contents("php://input"));
    $id=$data->id;
    $sql="SELECT datos,titulo FROM mitabla WHERE id= $id";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $miTitulo=json_decode($row["titulo"]);
        $miDato=json_decode($row["datos"],true);
    }

    $respuesta=array(
        "elTitulo"=>$miTitulo,
        "losValores"=>$miDato
    );
    echo json_encode($respuesta);
    $conn->close();
?>