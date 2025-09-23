<?php
if (isset($_POST['ficheroABorrar'])) {
    $nombre_del_archivo = basename($_POST['ficheroABorrar']);
    $ruta = "../ficheros/" . $nombre_del_archivo;
    if (file_exists($ruta)) {
        unlink($ruta);
    }
}
?>