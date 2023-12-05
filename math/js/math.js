

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
