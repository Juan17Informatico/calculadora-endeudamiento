/**
 * Calcular el área y la circunferencia de un circulo
 * */
console.group('Circle')
//Creamos variables para calcular la circunferencia y el área
const radioCirculo = document.getElementById('radioCirculo');
const PI = 3.1416;

//Result
const resultAreaCirculo = document.getElementById('resultAreaCirculo');
const resultCircunferenciaCirculo = document.getElementById('resultCircunferenciaCirculo');

//BTN
const btnCalcularAreaCirculo = document.getElementById('btnCalcularAreaCirculo');
const btnCalcularCircunferenciaCirculo = document.getElementById('btnCalcularCircunferenciaCirculo');

/**
 * Calcular la circunferencia de un circulo, la cual al momento de ejecutarse pinta el número en el HTML 
 */
function calcularCircunferenciaCirculo() {
    const radioValue = Number(radioCirculo.value);
    const diametro = radioValue / 2;
    const circunferencia = PI * diametro;

    resultCircunferenciaCirculo.innerHTML = circunferencia;
}

function calcularAreaCirculo(){
    const radio = Number(radioCirculo.value); 
    const areaCirculo = PI * Math.pow(radio, 2);

    resultAreaCirculo.innerHTML = areaCirculo;
}

btnCalcularCircunferenciaCirculo.addEventListener('click', calcularCircunferenciaCirculo);
btnCalcularAreaCirculo.addEventListener('click', calcularAreaCirculo);

console.groupEnd()
