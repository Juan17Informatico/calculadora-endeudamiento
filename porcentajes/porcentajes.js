const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')
//Cupones
let couponList = [];
couponList.push({
  name: "Cupon 1",
  discount: 30,
  
});

couponList.push({
  name: 'Cupon 2',
  discount: 20,
});

couponList.push({
  name: 'Cupon 3',
  discount: 50,
});

btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value)
  const coupon = inputCoupon.value
  let discount

  if (!price || !coupon) {
    pResult.innerText = 'Por favor llena el formulario'
    return
  }

  function encontrarCupon(couponElement){ // {name, discount}
    return couponElement.name == coupon; //Preguntamos si la propiedad .name del array es igual al valor del "coupon"
  }

  // const couponInArray = couponList.filter(encontrarCupon); El metodo filter nos devuelve un array con el objeto que cumple la validacion
  const couponInArray = couponList.find(encontrarCupon); // El metodo find nos devuelve el objeto con los valores que cumplen la validacion

  if(couponInArray){
    discount = couponInArray.discount;
  }else{
    pResult.innerText = 'El cupón no es válido';
    return;
  }

  console.log(
    discount,
    couponInArray,
  ); 

  // for (let i = 0; i < arrayCuponesN.length; i++) {
  //   for (const key in arrayCuponesN[i]) {
  //     console.log('1', arrayCuponesN[i].name)
  //     let cupones = arrayCuponesN[i].name
  //     if (cupones == coupon) {
  //       discount = arrayCuponesN[i].discount
  //     }

  //   }
  // }

  if (discount > 100) {
    pResult.innerText = 'El descuento no puede ser mayor a 100%'
    return
  }

  const newPrice = (price * (100 - discount)) / 100
  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice
}
