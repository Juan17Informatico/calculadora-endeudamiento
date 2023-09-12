<<<<<<< HEAD
const inputIngresos = document.getElementById('inputIngresos');
const inputGastos = document.getElementById('inputGastos');
const inputAporteDeuda = document.getElementById('inputAporteDeuda');
const btnCalcular = document.getElementById('btnCalcular');
const pResult = document.getElementById('pResult');

function calcularCapacidadEndeudamiento(){
    const ingresos = Number(inputIngresos.value);
    const gastos = Number(inputGastos.value);
    const aporteDeuda = Number(inputAporteDeuda.value);
    const capacidadEndeudamiento = (ingresos - gastos - aporteDeuda) * 0.35;
    // console.log(capacidadEndeudamiento);
    pResult.innerText = capacidadEndeudamiento;
}

=======
const inputIngresos = document.getElementById('inputIngresos');
const inputGastos = document.getElementById('inputGastos');
const inputAporteDeuda = document.getElementById('inputAporteDeuda');
const btnCalcular = document.getElementById('btnCalcular');
const pResult = document.getElementById('pResult');

function calcularCapacidadEndeudamiento(){
    const ingresos = Number(inputIngresos.value);
    const gastos = Number(inputGastos.value);
    const aporteDeuda = Number(inputAporteDeuda.value);
    const capacidadEndeudamiento = (ingresos - gastos - aporteDeuda) * 0.35;
    // console.log(capacidadEndeudamiento);
    pResult.innerText = capacidadEndeudamiento;
}

>>>>>>> 0aa921b963b1160506c8ee5b6097c82b53300e5b
btnCalcular.addEventListener('click', calcularCapacidadEndeudamiento);