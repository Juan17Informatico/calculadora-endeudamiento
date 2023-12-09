console.group('Triangulo')

//Variables para obtener el valor de los lados 
const inputLadoTrianguloIsos = document.getElementById('ladoTrianguloIsos');
const inputBaseTrianguloIsos = document.getElementById('baseTrianguloIsos');
//Value de los input
const valueLadoTrianguloIsos = Number(inputLadoTrianguloIsos.value);
const valueBaseTrianguloIsos = Number(inputBaseTrianguloIsos.value);
//Value de los botones
const btnCalcularAlturaTrianguloIsos = document.getElementById('btnCalcularAlturaTrianguloIsos');
const btnCalcularAreaTrianguloIsos = document.getElementById('btnCalcularAreaTrianguloIsos');
const btnCalcularPerimetroTrianguloIsos = document.getElementById('btnCalcularPerimetroTrianguloIsos');
//Resultados para el trianguloIsosceles

/**
 * Sirve para retornar el perimetro de un triangulo isosceles
 * @param {lado} lado 
 * @param {base} base 
 * @returns 
 */
function calcularPerimetroTrianguloIsosceles(lado, base){
  
  // return (lado * 2) + base;
}

/** */
function calcularAreaTrianguloIsosceles(lado){
  return (lado * altura) / 2
}

/**
 * Funcionalidad para calcular área y perímetro de los triangulos isosceles
 */
btnCalcularPerimetroTrianguloIsos.addEventListener('click', calcularPerimetroTrianguloIsosceles);
/**/

//Triángulo isosceles
function calcularAlturaTriangulo(lado1, base) {
  if (lado1 == base) {
    console.warn('Este no es un triángulo isosceles')
  } else {
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt(lado1 ** 2 - base ** 2 / 4)
  }
}
//Triángulo Escaleno
function calcularAlturaTrianguloEscaleno(
  lado1Escaleno,
  lado2Escaleno,
  ladoBaseEscaleno,
) {
  const semiPerimetro = (lado1Escaleno + lado2Escaleno + ladoBaseEscaleno) / 2
  return (
    2 / ladoBaseEscaleno *
    Math.sqrt(
      semiPerimetro *
      (semiPerimetro - ladoBaseEscaleno) *
      (semiPerimetro - lado1Escaleno) *
      (semiPerimetro - lado2Escaleno),
    )
  )
}

/**
 * Solución en y para platzi:
 * function solution(lado1, lado2, lado3) {
  // Tu código aquí 👈
  if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
    return false
  }
  const semiPerimetro = (lado1 + lado2 + lado3) / 2
  const altura = (2 / lado1 *
    Math.sqrt(
      semiPerimetro *
      (semiPerimetro - lado1) *
      (semiPerimetro - lado2) *
      (semiPerimetro - lado3),
    ))

  return Math.floor(altura)
}*/
console.groupEnd()
/*Toggle Triangulo*/
// Obtener referencias a los botones de los triángulos escaleno e isósceles
const btnTrianguloEscaleno = document.getElementById('hiddenEscalenoBtn');
const btnTrianguloIsosceles = document.getElementById('hiddenIsoscelesBtn');

// Función para mostrar la sección correspondiente al ID recibido
function showSection(sectionId) {
  // Obtener todas las secciones con la clase 'subsection'
  const sections = document.querySelectorAll('.subsection');

  // Iterar sobre todas las secciones
  sections.forEach(section => {
    // Comprobar si el ID de la sección coincide con el ID recibido como argumento
    if (section.id === sectionId) {
      // Si coincide, eliminar la clase 'hidden' para mostrar la sección
      section.classList.remove('hidden');
    } else {
      // Si no coincide, agregar la clase 'hidden' para ocultar la sección
      section.classList.add('hidden');
    }
  })
}

// Agregar eventos de clic a los botones para mostrar las secciones correspondientes
btnTrianguloEscaleno.addEventListener('click', function () {
  // Llamar a la función showSection con el ID del triángulo escaleno
  showSection('hiddenEscaleno');
});

btnTrianguloIsosceles.addEventListener('click', function () {
  // Llamar a la función showSection con el ID del triángulo isósceles
  showSection('hiddenIsosceles');
});
