// Inicialización y declaración de variables
const inputIngresos = document.getElementById('inputIngresos'); // Elemento de entrada de ingresos
const inputGastos = document.getElementById('inputGastos'); // Elemento de entrada de gastos
const inputAporteDeuda = document.getElementById('inputAporteDeuda'); // Elemento de entrada de aporte deuda
const btnCalcular = document.getElementById('btnCalcular'); // Botón para calcular
const pResult = document.getElementById('pResult'); // Párrafo para mostrar el resultado

/**
 * Convierte un número en formato de moneda.
 * @param {number} number - El número que se desea formatear.
 * @param {string} currency - La moneda en la que se desea formatear (por ejemplo, 'USD' para dólares).
 * @returns {string} - El número formateado en formato de moneda.
 */
function numberConverter(number, currency) {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: `${currency}` });
    return formatter.format(number);
}

/**
 * Valida que el valor ingresado sea un número, de lo contrario retorna 0.
 * @param {string} input - El valor ingresado.
 * @returns {number} - El valor ingresado convertido a número o 0 si no es un número.
 * */
function validationInputNumberResult(input) {
    if (typeof input === 'number' && !isNaN(input)) {
        return input;
    } else {
        return 0;
    }
}

/**
 * Calcula la capacidad de endeudamiento basándose en ingresos, gastos y aportes a deuda.
 */
function calcularCapacidadEndeudamiento() {
    //validar input numeros, esto nos ayudara a que no se pueda ingresar letras o caracteres especiales, la validacion se realiza con la funcion validationInputNumberResult
    const ingresos = validationInputNumberResult(Number(inputIngresos.value));
    const gastos = validationInputNumberResult(Number(inputGastos.value));
    const aporteDeuda = validationInputNumberResult(Number(inputAporteDeuda.value));

    console.log({ingresos,gastos, aporteDeuda });//para ver los valores que se estan ingresando en los input

    if (ingresos === 0 || gastos === 0 ||  aporteDeuda === 0) {
        pResult.innerText = 'Ingrese valores válidos';
        return;
    }
    
    // Calcular la capacidad de endeudamiento según la fórmula específica
    const capacidadEndeudamiento = (ingresos - gastos - aporteDeuda) * 0.35;

    // Mostrar el resultado en el párrafo pResult en formato de moneda
    pResult.innerText = numberConverter(capacidadEndeudamiento, 'USD');
}



// Agregar un evento click al botón "Calcular" que llama a la función calcularCapacidadEndeudamiento
btnCalcular.addEventListener('click', calcularCapacidadEndeudamiento);
