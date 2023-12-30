const inputPrice = document.querySelector('#price');
const inputCoupon25 = document.querySelector('#buttonCoupon1');
const inputCoupon30 = document.querySelector('#buttonCoupon2');
const inputCoupon50 = document.querySelector('#buttonCoupon3');
const pResultCupon = document.querySelector('#resultCupon')
const pResult = document.querySelector('#result')
//Cupones
let couponList = [];
couponList.push({
  name: "Cupon 1",
  discount: 25,

});

couponList.push({
  name: 'Cupon 2',
  discount: 30,
});

couponList.push({
  name: 'Cupon 3',
  discount: 50,
});

// btn.addEventListener('click', calcularPrecioConDescuento)
inputCoupon25.addEventListener('click', () => {
  const price = Number(inputPrice.value)
  const coupon = couponList[0].discount;
  
  const resultPrice = calcularPrecioDescuento(coupon, price);
  
  pResultCupon.innerText = coupon;
  pResult.innerText = resultPrice
  
})

inputCoupon30.addEventListener('click', () => {
  const price = Number(inputPrice.value)
  const coupon = couponList[1].discount;
  
  const resultPrice = calcularPrecioDescuento(coupon, price);
  
  pResultCupon.innerText = coupon;
  pResult.innerText = resultPrice
  
})

inputCoupon50.addEventListener('click', () => {
  const price = Number(inputPrice.value)
  const coupon = couponList[2].discount;
  
  const resultPrice = calcularPrecioDescuento(coupon, price);
  
  pResultCupon.innerText = coupon;
  pResult.innerText = resultPrice
  
})

function calcularPrecioDescuento(discount, price) {

  if (!price || !discount) {
    pResult.innerText = 'Por favor llena el formulario'
    return
  }


  return (price * (100 - discount)) / 100

}

