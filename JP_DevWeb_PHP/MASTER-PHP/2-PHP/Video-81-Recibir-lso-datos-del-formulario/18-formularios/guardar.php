<?php

if(isset($_POST['titulo']) && isset($_POST['descripcion'])){
    echo "<h1>".$_POST['titulo']."</h1>";
    echo "<h2>".$_POST['descripcion']."</h2>";
}

/* ES MODIFICABLE DE MANERA FACIL DESDE EL NAVEGADOR
 * if(isset($_GET['titulo']) && isset($_GET['descripcion'])){
    echo "<h1>".$_GET['titulo']."</h1>";
    echo "<h2>".$_GET['descripcion']."</h2>";
}   
 */