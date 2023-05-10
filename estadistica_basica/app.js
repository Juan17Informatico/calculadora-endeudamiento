/**
 * Inicializacion de arrays
 */
const arrayNumeros = [];
arrayNumeros.push(1,10,20,15,30,10,10,15);
/**
 * Calcular la cantidad de datos del arrayNumeros
 */
const cantidadNumeros = arrayNumeros.length;

/** Sumar los valores del array utilizando un clico for para ello */
// function sumarNumeros(arrayN){
//     // let sumaNumeros = 0;
//     // for (let i = 0; i < cantidadNumeros; i++) {
//     //     sumaNumeros += arrayN[i];
//     // }
//     // return sumaNumeros;
    
    

// }

/** Calcular el promedio de numeros utilizando la funcion sumarNumeros() y la constante "cantidadNumeros"  */
function promedioNumeros(arrayNP) {
    // const sumaDeNumeros = sumarNumeros(arrayNP);
    // let promedio = sumaDeNumeros / cantidadNumeros;
    
    function sumarTodosElementos(currentValue,initialValue){
        return currentValue + initialValue;
    }

    const sumaN = arrayN.reduce(sumarTodosElementos);
    const promedio =  sumaN / cantidadNumeros; 
    
    return promedio;
}


/**
 * Calcular la mediana
 */

function esPar(array){
    // const a = array.length;
    // if(a % 2){
    //     return false;
    // }else{
    //     return true;
    // }
    return !(array.length % 2);
}

function calcularMediana(list){
    const indexListMediana = Math.floor(list.length) / 2; 
    const valueMediana = list[indexListMediana];

    console.log(indexListMediana);
    console.log(valueMediana);
}