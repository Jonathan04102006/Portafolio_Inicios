Algoritmo Ejercicio_5
	
    Definir numeros Como Entero
	Dimension numeros[10]
    Definir limite, contador, i Como Entero
	
    contador <- 0
	
    Para i <- 1 Hasta 10 Hacer
        Escribir "Digite el numero: ";
        Leer numeros[i]
    FinPara
	
    Escribir "Digite el limite para los numeros del Arreglo: "
    Leer limite
	
    Para i <- 1 Hasta 10 Hacer
        Si numeros[i] > limite Entonces
            contador <- contador + 1
        FinSi
    FinPara
	
    Escribir "La cantidad de numeros mayores a ", limite, " son ", contador;
FinAlgoritmo
