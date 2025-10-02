<?php
    require("datosConexion.php");
    $sql="SELECT * FROM lista";
    $resultado = $conn-query($sql);
    $data=array();
    if ($resultado->num_row > 0){
        while ($row = $resultado->fetch_assoc()){
            $data[]=$row;
        }
    }
    $conn->close();
    echo json_encode($data);
?>