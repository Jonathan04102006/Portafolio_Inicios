Algoritmo Ejercicio_4
	
	Definir numeros Como Entero
    Dimension numeros[5]
    Definir i, totalNumerosMayores Como Entero
	
    totalNumerosMayores <- 0
	
    Para i <- 1 Hasta 5 Con Paso 1
        Escribir "Digita el número: ";
        Leer numeros[i]
    FinPara
	
    Para i <- 1 Hasta 5 Con Paso 1
        Si numeros[i] > 22 Entonces
            totalNumerosMayores <- totalNumerosMayores
        FinSi
    FinPara
	
    Escribir "La cantidad de números mayores a 22 son: ", totalNumerosMayores;
FinAlgoritmo


