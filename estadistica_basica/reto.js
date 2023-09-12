<<<<<<< HEAD
function promedioNumeros(arrayNP) {

    function sumarTodosElementos(currentValue, initialValue) {
        return currentValue + initialValue;
    }
    const cantidadNumeros = arrayNP.length;
    const sumaN = arrayNP.reduce(sumarTodosElementos);
    const promedio = sumaN / cantidadNumeros;

    return promedio;
}
function esPar(array) {
    // const a = array.length;
    // if(a % 2){
    //     return false;
    // }else{
    //     return true;
    // }
    //Se niega el principio de la sentencia para que el resultado del residuo de la cantidad de elementos del array se defina si es par o no  
    //En caso de que el residuo sea 1 es porque no es par y el resultado de la sentencia es (true), negarlo lo convierte en false 
    //Si el residuo es 0 significa que es par, el negarlo lo convertiría en true
    return !(array.length % 2);
    //Recuerda: el número cero los condicionales en JavaScript lo interpretan como false 
}
function calcularMediana(list) {
    //Define si la lista es par 
    const listPar = esPar(list);
    
    //El método sort ordena elementos, en este caso, ordena elementos según el parámetro indicado, o sea, de menor a mayor 
    list.sort(function (a,b){
        return a-b;
    });

    if (listPar) {
        //Se crean variables para almacenar los valores de las mitades de la listas de una lista par
        const mitad1ListaPar = list[(list.length / 2) - 1];
        const mitad2ListaPar = list[(list.length / 2)];

        //Se crea un array para almacenar los valores de las mitades
        const listaMitades = [];
        listaMitades.push(mitad1ListaPar);
        listaMitades.push(mitad2ListaPar);
        //Se crea una constante para almacenar el promedio de los valores de las mitades
        const medianaListaPar = promedioNumeros(listaMitades);
        
        return medianaListaPar;
    } else {
        const indexListMedianaImpar = Math.floor(list.length / 2);
        const valueMedianaImpar = list[indexListMedianaImpar];

        // console.log(indexListMedianaImpar);
        // console.log(valueMedianaImpar);
        return valueMedianaImpar;
    }

}


/**
 * Calcular la moda
*/
function calcularModa(list){
    const listCount = {};

    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if(listCount[element]){
            listCount[element] += 1;
        }else{
            listCount[element] = 1;
        }
    }
    //Object.entries convierte objetos en array 
    const listArray = Object.entries(listCount);
    const listOrdered = ordenarListaBidimensional(listArray, 1);
    const listMaxnumber = listOrdered[listArray.length - 1]
    console.log(listArray, listMaxnumber, listOrdered);
    return 'La moda es: ' + listMaxnumber[0];
}
/**
 * Función ordenar lista
*/

function ordenarListaBidimensional(list, i){
    list.sort(function (a,b){
        return a[i]-b[i];
    });
    return list;
}

/**
 * Calcular la media aritmética simple
 */
const notes  = [
    {
        course: 'Educación Física',
        note: 10,
        credit: 2,
    },
    {
        course: 'Programación',
        note: 8,
        credit: 5,
    },
    {
        course: 'Finanzas Personales',
        note: 7,
        credit: 5,
    },
];
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
=======
function promedioNumeros(arrayNP) {

    function sumarTodosElementos(currentValue, initialValue) {
        return currentValue + initialValue;
    }
    const cantidadNumeros = arrayNP.length;
    const sumaN = arrayNP.reduce(sumarTodosElementos);
    const promedio = sumaN / cantidadNumeros;

    return promedio;
}
function esPar(array) {
    // const a = array.length;
    // if(a % 2){
    //     return false;
    // }else{
    //     return true;
    // }
    //Se niega el principio de la sentencia para que el resultado del residuo de la cantidad de elementos del array se defina si es par o no  
    //En caso de que el residuo sea 1 es porque no es par y el resultado de la sentencia es (true), negarlo lo convierte en false 
    //Si el residuo es 0 significa que es par, el negarlo lo convertiría en true
    return !(array.length % 2);
    //Recuerda: el número cero los condicionales en JavaScript lo interpretan como false 
}
function calcularMediana(list) {
    //Define si la lista es par 
    const listPar = esPar(list);
    
    //El método sort ordena elementos, en este caso, ordena elementos según el parámetro indicado, o sea, de menor a mayor 
    list.sort(function (a,b){
        return a-b;
    });

    if (listPar) {
        //Se crean variables para almacenar los valores de las mitades de la listas de una lista par
        const mitad1ListaPar = list[(list.length / 2) - 1];
        const mitad2ListaPar = list[(list.length / 2)];

        //Se crea un array para almacenar los valores de las mitades
        const listaMitades = [];
        listaMitades.push(mitad1ListaPar);
        listaMitades.push(mitad2ListaPar);
        //Se crea una constante para almacenar el promedio de los valores de las mitades
        const medianaListaPar = promedioNumeros(listaMitades);
        
        return medianaListaPar;
    } else {
        const indexListMedianaImpar = Math.floor(list.length / 2);
        const valueMedianaImpar = list[indexListMedianaImpar];

        // console.log(indexListMedianaImpar);
        // console.log(valueMedianaImpar);
        return valueMedianaImpar;
    }

}


/**
 * Calcular la moda
*/
function calcularModa(list){
    const listCount = {};

    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if(listCount[element]){
            listCount[element] += 1;
        }else{
            listCount[element] = 1;
        }
    }
    //Object.entries convierte objetos en array 
    const listArray = Object.entries(listCount);
    const listOrdered = ordenarListaBidimensional(listArray, 1);
    const listMaxnumber = listOrdered[listArray.length - 1]
    console.log(listArray, listMaxnumber, listOrdered);
    return 'La moda es: ' + listMaxnumber[0];
}
/**
 * Función ordenar lista
*/

function ordenarListaBidimensional(list, i){
    list.sort(function (a,b){
        return a[i]-b[i];
    });
    return list;
}

/**
 * Calcular la media aritmética simple
 */
const notes  = [
    {
        course: 'Educación Física',
        note: 10,
        credit: 2,
    },
    {
        course: 'Programación',
        note: 8,
        credit: 5,
    },
    {
        course: 'Finanzas Personales',
        note: 7,
        credit: 5,
    },
];
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
>>>>>>> 0aa921b963b1160506c8ee5b6097c82b53300e5b
