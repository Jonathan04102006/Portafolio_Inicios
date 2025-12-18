<?php

/* 
*Ejercicio 4. Recoger dos numero por la url (Parametros GET) y hacer todas las
*operaciones basicas de una calculadora (suma, resta, multiplicacion y division)
*de esos dos numeros.
*/

if(isset($_GET['numero1']) && isset($_GET['numero2'])){
    
    $numero1 = $GET['numero1'];
    $numero2 = $GET['numero2'];
    
    echo "<h1>Calculadora</h1>";
    echo "Sumas: ".($numero1+$numero2)." <br/>";
    echo "Resta: ".($numero1-$numero2)." <br/>";
    echo "Multiplicacion: ".($numero1*$numero2)." <br/>";
    echo "Division: ".($numero1/$numero2);


}else{
    echo "<h1>Introduce correctamente los valores por la URL</h1>";
}