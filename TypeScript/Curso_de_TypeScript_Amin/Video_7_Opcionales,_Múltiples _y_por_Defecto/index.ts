function saludar(nombre: string, saludo?: string): string {
    if(saludo){
        return `${saludo}, ${nombre}`;
    }else{
        return `Hola, ${nombre}`
    }
}

console.log(saludar("Jona"));
console.log(saludar("Jona", "Buenas tardes"));

// Parametros multiples
 function sumarTodos(...numeros: number[]): number{
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
 }

 console.log("Resultado de sumar Todo: ", sumarTodos(1, 2, 3, 4, 5, 6));

 // Valores por defecto

 function despedir(nombre: string, despedida: string = "Adios"): string{
    return `${nombre}, ${despedida}`;
 }

 console.log(despedir("Ariel"));
 console.log(despedir("Ariel", "Hasta luego"));