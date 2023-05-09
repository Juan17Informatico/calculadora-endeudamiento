/**
 * Inicializacion de arrays
 */
const arrayNumeros = [];
arrayNumeros.push(1,10,20,15,30,10,10,15,5);
/**
 * Calcular la cantidad de datos del arrayNumeros
 */
const cantidadNumeros = arrayNumeros.length;

/** Sumar los valores del array utilizando un clico for para ello */
function sumarNumeros(arrayN){
    
    let sumaNumeros = 0;
    for (let i = 0; i < cantidadNumeros; i++) {
        sumaNumeros += arrayN[i];
    }
    return sumaNumeros;
}

/** Calcular el promedio de numeros utilizando la funcion sumarNumeros() y la constante "cantidadNumeros"  */
function promedioNumeros(arrayNP) {
    const sumaDeNumeros = sumarNumeros(arrayNP);
    let promedio = sumaDeNumeros / cantidadNumeros;
    
    return promedio;
}


