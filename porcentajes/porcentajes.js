// let precio = document.getElementById('precio');
// let descuento = document.getElementById('descuento');
// let precioFinal = document.getElementById('precioFinal');


// function calcularDescuento(){
//     const precioConDescuento = (precio.value * (100-descuento.value)) / 100;
//     precioFinal.innerHTML = precioConDescuento;
// }
const inputPrice = document.querySelector('#price');
const inputDiscount= document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento)

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