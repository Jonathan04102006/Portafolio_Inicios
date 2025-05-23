Funcion logico <- EsPrimo(n)
    Definir j Como Entero
    Definir esDivisible Como Logico
	
    esDivisible <- Falso
    logico <- Verdadero
	
    Si n < 2 Entonces
        logico <- Falso
    Sino
        j <- 2
        Mientras j < n Y esDivisible = Falso Hacer
            Si n MOD j = 0 Entonces
                esDivisible <- Verdadero
            FinSi
            j <- j + 1
        FinMientras
		
        Si esDivisible Entonces
            logico <- Falso
        FinSi
    FinSi
FinFuncion

Algoritmo Ejercicio7Dimensiones
    Definir N, i Como Entero
    Definir numeros Como Entero 
	Dimension numeros[1000]
    Definir contadorPares, contadorPrimos, contadorMultiplos Como Entero
	
    contadorPares <- 0
    contadorPrimos <- 0
    contadorMultiplos <- 0
	
    Escribir "Digite el límite de números:"
    Leer N
	
    Para i <- 1 Hasta N Hacer
        numeros[i] <- i
    FinPara
	
    Para i <- 1 Hasta N Hacer
        Si numeros[i] MOD 2 = 0 Entonces
            contadorPares <- contadorPares + 1
        FinSi
		
        Si EsPrimo(numeros[i]) Entonces
            contadorPrimos <- contadorPrimos + 1
        FinSi
		
        Si numeros[i] MOD 5 = 0 Entonces
            contadorMultiplos <- contadorMultiplos + 1
        FinSi
    FinPara
	
    Escribir "El limite ingresado por el usuario fue: ", N
    Escribir "Los numeros pares son: ", contadorPares
    Escribir "Los numeros primos son: ", contadorPrimos
    Escribir "Los numeros divisibles (multiplos de 5) son: ", contadorMultiplos
FinAlgoritmo