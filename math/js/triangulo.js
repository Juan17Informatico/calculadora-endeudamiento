/**
 * 
 */
console.group('Triangulo')

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const altura = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * altura) / 2

function calcularPerimetroTriangulo(lado1, base) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  }
}
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
const btnTrianguloEscaleno = document.getElementById('hiddenEscaleno');
const btnTrianguloIsosceles = document.getElementById('hiddenIsosceles');

function showSection(sectionId) {
  const sections = document.querySelectorAll('.subsection');

  console.log({sections, sectionId})
  sections.forEach(section => {

    if (section.id === sectionId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  })
}

// Agregar eventos de clic a los botones
btnTrianguloEscaleno.addEventListener('click', function () {
  showSection('hiddenEscaleno');
});

btnTrianguloIsosceles.addEventListener('click', function () {
  showSection('hiddenIsosceles');
});