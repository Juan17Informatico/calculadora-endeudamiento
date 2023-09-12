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

btnCalcular.addEventListener('click', calcularCapacidadEndeudamiento);