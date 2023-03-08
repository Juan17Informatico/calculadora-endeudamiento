const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#result')
//Cupones
let arrayCuponesN = [
  { name: 'Cupon 1', discount: 25 },
  { name: 'Cupon 2', discount: 10 },
  { name: 'Cupon 3', discount: 40 },
]

btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value)
  const coupon = inputDiscount.value
  let discount

  if (!price || !coupon) {
    pResult.innerText = 'Por favor llena el formulario'
    return
  }

  for (let i = 0; i < arrayCuponesN.length; i++) {
    for (const key in arrayCuponesN[i]) {
      console.log('1', arrayCuponesN[i].name)
      let cupones = arrayCuponesN[i].name
      if (cupones == coupon) {
        discount = arrayCuponesN[i].discount
      }

    }
  }

  if (discount > 100) {
    pResult.innerText = 'El descuento no puede ser mayor a 100%'
    return
  }

  if(!discount){
    pResult.innerText = 'El cupon de descuento no existe'
    return
  }

  const newPrice = (price * (100 - discount)) / 100
  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice
}
