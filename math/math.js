console.group('Cuadrado')

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado ** 2

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado ** 2,
  }
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
})
console.groupEnd()
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
console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  altura,
  perimetroTriangulo,
  areaTriangulo,
})
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

/**
 * Calcular el área y la circunferencia de un circulo
 * */
console.group('Circle')
//Creamos variables para calcular la circunferencia y el área
const radioCirculo = 3
const diametro = radioCirculo * 2
const PI = 3.1416
//Calculamos la circunferencia multiplicando al diametro por PI
const circunferencia = diametro * PI
//Calculamos el area multiplicando radio al cuadrado por PI
const areaCirculo = radioCirculo ** 2 * PI

//Mostramos un objeto en consola con las variables creadas
//y el resultado de los calculos anteriores
console.log({
  radioCirculo,
  diametro,
  PI,
  circunferencia,
  areaCirculo,
})

//Creamos funcion cuyo parámetro es radio, con el propósito de calcular
//el área del circulo y su circunferencia
function calcularCirculo(radio) {
  //Con el radio multiplicado por 2 obtendremos el diametro
  const diametro = radio * 2
  //Con la función .pow multiplicamos radio al cuadrado para obtener
  //radio al cuadrado
  const radioAlCuadrado = Math.pow(radio, 2)
  // Se retorna un objeto cuyos valores son:
  //La circunferencia y el area del circulo
  return {
    circunferencia: diametro * Math.PI,
    areaCirculo: radioAlCuadrado * Math.PI,
  }
}

console.groupEnd()
