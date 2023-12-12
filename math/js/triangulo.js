console.group('Triangulo')

//Variables para obtener el valor de los lados 
const inputLadoTrianguloIsos = document.getElementById('ladoTrianguloIsos');
const inputBaseTrianguloIsos = document.getElementById('baseTrianguloIsos');
//Value de los botones
const btnCalcularAlturaTrianguloIsos = document.getElementById('btnCalcularAlturaTrianguloIsos');
const btnCalcularAreaTrianguloIsos = document.getElementById('btnCalcularAreaTrianguloIsos');
const btnCalcularPerimetroTrianguloIsos = document.getElementById('btnCalcularPerimetroTrianguloIsos');
//Resultados para el trianguloIsosceles
const resultAlturaTrianguloIsos = document.getElementById('resultAlturaTrianguloIsos');
const resultAreaTrianguloIsos = document.getElementById('resultAreaTrianguloIsos');
const resultPerimetroTrianguloIsos = document.getElementById('resultPerimetroTrianguloIsos');
/**
 * Sirve para retornar el perimetro de un triangulo isosceles
 * @param {lado} lado 
 * @param {base} base 
 * @returns 
 */
function calcularPerimetroTrianguloIsosceles() {
  //Value de los input
  const lado = Number(inputLadoTrianguloIsos.value);
  const base = Number(inputBaseTrianguloIsos.value);
  const perimetro = (lado * 2) + base;
  resultPerimetroTrianguloIsos.innerHTML = perimetro;
}


function calcularAreaTrianguloIsosceles() {
  const lado = Number(inputLadoTrianguloIsos.value);
  const base = Number(inputBaseTrianguloIsos.value);
  const altura = Number(calcularAlturaTrianguloIsosceles(lado, base));

  const area = (base * altura) / 2;
  if (isNaN(altura)) {

    resultAreaTrianguloIsos.innerHTML = 'Esto no es un triangulo isósceles';

  } else {
    resultAreaTrianguloIsos.innerHTML = area;
  }

}

//Triángulo isosceles
function calcularAlturaTrianguloIsosceles(lado, base) {
  if (lado == base) {
    return NaN;
  } else if (lado < base) {
    return NaN;
  } else {
    // h = raizcuadrada(lado1**2 - (b**2)/4)

    return Math.sqrt(lado ** 2 - (base / 2) ** 2);
  }
}

/**
 * Funcionalidad para calcular área y perímetro de los triangulos isosceles
 */
btnCalcularPerimetroTrianguloIsos.addEventListener('click', calcularPerimetroTrianguloIsosceles);
btnCalcularAreaTrianguloIsos.addEventListener('click', calcularAreaTrianguloIsosceles);
btnCalcularAlturaTrianguloIsos.addEventListener('click', () => {
  const ladoAl = Number(inputLadoTrianguloIsos.value);
  const baseAl = Number(inputBaseTrianguloIsos.value);
  const altura = calcularAlturaTrianguloIsosceles(ladoAl, baseAl);

  if (isNaN(altura)) {
    resultAlturaTrianguloIsos.innerHTML = 'Esto no es un triángulo isósceles';
  } else {
    resultAlturaTrianguloIsos.innerHTML = altura;
  }
})
/**/

/**
 * Triángulo Escaleno 
 * Donde sus tres lados son desiguales
 */

//Variables Inputs: 
const ladoTrianguloEscaA = document.getElementById('ladoTrianguloEscaA');
const ladoTrianguloEscaB = document.getElementById('ladoTrianguloEscaB');
const ladoTrianguloEscaC = document.getElementById('ladoTrianguloEscaC');
//Variable para botones: 
const btnCalcularAreaTrianguloEsca = document.getElementById('btnCalcularAreaTrianguloEsca');
const btnCalcularPerimetroTrianguloEsca = document.getElementById('btnCalcularPerimetroTrianguloEsca');
const btnCalcularAlturaTrianguloEsca = document.getElementById('btnCalcularAlturaTrianguloEsca');
//Variable para resultados en pantalla: 
const resultAreaTrianguloEsca = document.getElementById('resultAreaTrianguloEsca');
const resultPerimetroTrianguloEsca = document.getElementById('resultPerimetroTrianguloEsca');
const resultAlturaTrianguloEsca = document.getElementById('resultAlturaTrianguloEsca');


function calcularAreaTrianguloEscaleno(){
  const valueTrianguloEscalenoA = Number(ladoTrianguloEscaA.value);
  const valueTrianguloEscalenoB = Number(ladoTrianguloEscaB.value);
  const valueTrianguloEscalenoC = Number(ladoTrianguloEscaC.value);

  const altura = calcularAlturaTrianguloEscaleno();

  //Valida si el usuario ingresa los tres lados del triangulo escaleno, en caso de no, valida si conoce la altura y/o la base
  if(valueTrianguloEscalenoA && valueTrianguloEscalenoB && valueTrianguloEscalenoC){
    return true;
  }else if(valueTrianguloEscalenoC && altura){
    return true;
  }
}

function calcularAlturaTrianguloEscaleno(lado1Escaleno, lado2Escaleno, ladoBaseEscaleno) {
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
