const inputPrice = document.querySelector('#price');
const inputDiscount= document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')
//Cupones
const cupon1 = document.querySelector('#discount1');
const cupon2 = document.querySelector('#discount2');
const cupon3 = document.querySelector('#discount3');
const btnCupon = document.querySelector('#calcularCupon');
const pResultCupon = document.querySelector('#resultCupon'); 

btn.addEventListener('click', calcularPrecioConDescuento);
btnCupon.addEventListener('click', calcularPrecioConCupon);

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }

    if(discount > 100){
        pResult.innerText = 'El descuento no puede ser mayor a 100%';
        return;
    }

    const newPrice = (price * (100-discount))/100;
    pResult.innerText = 'El nuevo precio con descuento es $'+newPrice;
}

function calcularPrecioConCupon(){
    const descuento1 = Number(cupon1.value);
    const descuento2 = Number(cupon2.value);
    const descuento3 = Number(cupon3.value);
    const price = Number(inputPrice.value);

    const newPrice1 = (price * (100-descuento1))/100;
    const newPrice2 = (price * (100-descuento2))/100;
    const newPrice3 = (price * (100-descuento3))/100;

    pResultCupon.innerText = 'El precio con el cupon aplicado es $'+newPrice1;
    pResultCupon.innerText = 'El precio con el cupon aplicado es $'+newPrice2;
    pResultCupon.innerText = 'El precio con el cupon aplicado es $'+newPrice3;
    
}