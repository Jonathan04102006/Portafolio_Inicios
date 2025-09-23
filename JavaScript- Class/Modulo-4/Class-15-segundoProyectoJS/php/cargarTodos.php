<?php
include 'datosConexion.php';
$sql="SELECT imags FROM albumes";
$resul=$conn->query($sql);
if ($result)
?>