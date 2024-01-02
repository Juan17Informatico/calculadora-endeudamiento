/*INPUTs*/
const textAreaAvarage = document.getElementById('input-avarage');
const textAreaMedian = document.getElementById('input-median');
const textAreaMode = document.getElementById('input-mode');

/*BTN*/

const btnAvarage = document.getElementById('avarage-btn');
const btnAvarageClear = document.getElementById('clear-average');

const btnMedian = document.getElementById('btnMedian');
const btnMedianClear = document.getElementById('clear-median');

const btnMode = document.getElementById('btnMode');
const btnModeClear = document.getElementById('clear-mode');

/*Results*/
const averageResult = document.getElementById('average-result');

const medianResult = document.getElementById('median-result');

const modeResult = document.getElementById('mode-result');

function separarValores(valueArea) {
    let valueTextArea = valueArea.value;
    return valueTextArea.trim().split(',');

}

function convertirANumeros(arrayDeCadenas) {
    return arrayDeCadenas.map(function (cadena) {
        return Number(cadena);
    });
}

/*PROMEDIO*/


btnAvarage.addEventListener('click', () => {
    const arrayNP = separarValores(textAreaAvarage);
    const resultAvarage = PlatziMath.promedioNumeros(convertirANumeros(arrayNP));
    
    averageResult.innerText = resultAvarage;
});

btnAvarageClear.addEventListener('click', () => {
    averageResult.innerText = "";
})

/*MEDIANA*/

btnMedian.addEventListener('click', () => {
    const arrayM = separarValores(textAreaMedian);
    const resultMedian = PlatziMath.calcularMediana(convertirANumeros(arrayM));

    medianResult.innerText = resultMedian;
})

btnMedianClear.addEventListener('click', () =>{
    medianResult.innerText = "";
})

/*MODA*/
btnMode.addEventListener('click', () => { 
    const arrayMode = separarValores(textAreaMode);
    const resultMode = PlatziMath.calcularModa(convertirANumeros(arrayMode));

    modeResult.innerText = resultMode;
})

btnModeClear.addEventListener('click', () => {
    modeResult.innerText = "";
})