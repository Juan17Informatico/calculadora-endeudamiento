/**
 * Código para calcular el área y el perímetro de un cuadrado.
 */
// Variables
const ladoCuadrado = document.getElementById('ladoCuadrado');  // Elemento HTML que representa el lado del cuadrado.
const btnCalcularAreaCuadrado = document.getElementById('btnCalcularAreaCuadrado');  // Botón para calcular el área del cuadrado.
const btnCalcularPerimetroCuadrado = document.getElementById('btnCalcularPerimetroCuadrado');  // Botón para calcular el perímetro del cuadrado.

// Variables para mostrar resultados
const resultadoAreaCuadrado = document.getElementById('resultAreaCuadrado');  // Elemento HTML para mostrar el resultado del cálculo del área del cuadrado.
const resultadoPerimetroCuadrado = document.getElementById('resultPerimetroCuadrado');  // Elemento HTML para mostrar el resultado del cálculo del perímetro del cuadrado.


/**
 * Función para validar si un valor es un número.
 * @param {number} numero - El valor a ser validado.
 * @returns {number} - Retorna 1 si el valor es un número, de lo contrario, retorna 0.
*/
function validarNumero(numero) {
  if (isNaN(numero)) {
    return 0;  // No es un número
  } else {
    return 1;  // Es un número
  }
}

/**
 * Función para calcular el perímetro y el área de un cuadrado.
 * @param {number} lado - La longitud del lado del cuadrado.
 * @returns {object} - Un objeto con las propiedades 'perimetro' y 'area' que contienen los cálculos correspondientes.
*/
function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,  // Cálculo del perímetro del cuadrado.
    area: lado ** 2,      // Cálculo del área del cuadrado.
  }
}


// Evento para el botón de cálculo de área del cuadrado.
btnCalcularAreaCuadrado.addEventListener('click', () => {
  const areaCuadrado = calcularCuadrado(ladoCuadrado.value);  // Obtenemos el objeto con los cálculos del área y el perímetro del cuadrado.
  // Validamos que el valor ingresado sea un número
  const validacionArea = validarNumero(areaCuadrado.area);
  const exponenteDos = document.createElement('sup');
  exponenteDos.textContent = '2';
  if (validacionArea) {
    // Muestra el resultado del cálculo del área en el elemento HTML correspondiente.
    resultadoAreaCuadrado.innerHTML = `El área del cuadrado es: ${areaCuadrado.area}m`;
    resultadoAreaCuadrado.appendChild(exponenteDos);
  } else {
    // Muestra un mensaje de error si el valor no es un número válido.
    resultadoAreaCuadrado.innerHTML = `El valor ingresado no es un número válido`;
  }
})

// Evento para el botón de cálculo de perímetro del cuadrado.
btnCalcularPerimetroCuadrado.addEventListener('click', () => {
  const perimetroCuadrado = calcularCuadrado(ladoCuadrado.value);  // Obtenemos el objeto con los cálculos del área y el perímetro del cuadrado.
  // Validamos que el valor ingresado sea un número
  const validacionPerimetro = validarNumero(perimetroCuadrado.perimetro);

  if (validacionPerimetro) {
    // Muestra el resultado del cálculo del perímetro en el elemento HTML correspondiente.
    resultadoPerimetroCuadrado.innerHTML = `El perímetro del cuadrado es: ${perimetroCuadrado.perimetro}`;
  } else {
    // Muestra un mensaje de error si el valor no es un número válido.
    resultadoPerimetroCuadrado.innerHTML = `El valor ingresado no es un número válido`;
  }
})

