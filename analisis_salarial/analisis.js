<<<<<<< HEAD
//Análisis personal para Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    // console.log(trabajos);

    const salarios = trabajos.map(objeto => objeto.salario);

    // console.log(salarios);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    return medianaSalarios;
}

//Intentar calcular una proyección Salarial

function proyeccionSalarial(nombrePersona, tasaAumentoAnual, projectionYear) {
    const medianaSalario = medianaPorPersona(nombrePersona);
    let salarioActual = medianaSalario;
    const proyeccionSalarial = [];

    for (let i = 1; i <= projectionYear; i++) {
        salarioActual = salarioActual * (1 + tasaAumentoAnual);

        proyeccionSalarial.push({
            año: i,
            salario: salarioActual
        });
    }

    return proyeccionSalarial;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = aumento + ultimoSalario;

    return nuevoSalario;

}

//Análisis Empresarial 
const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        //Si la empresa no existe en el objeto empresa se crea una entrada para esta
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }

        // Si el año no existe en la entrada de la empresa en el objeto "empresas", se crea una entrada para él.
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }

        //Se agrega el salario a la entrada correspondiente en el objeto "empresas".
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)

    }
}

console.log({ empresas });

//Sacar la mediana de cada distinto año del distinto año de cada empresa

function medianaPorEmpresaYear(year, empresa) {
    const salarioYear = empresas[empresa][year];
    const medianaSalarioYear = PlatziMath.calcularMediana(salarioYear);


    if (!empresas[empresa]) {
        console.warn('La empresa no existe');
        return;
    } else if (!empresas[empresa][year]) {
        console.warn('La empresa no dió salarios este año');
        return
    } else {
        return medianaSalarioYear;
    }

}


function proyeccionSalarialPorEmpresa(empresa) {
    if (!empresas[empresa]) {
        console.warn('La empresa no existe');
        return;
    } else {
        const empresaYears = Object.keys(empresas[empresa]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaPorEmpresaYear(year, empresa);
        });

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;

            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = aumento + ultimaMediana;
    
        return nuevaMediana ;
    
    }
}

function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    console.log({listaMedianas});

    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const medianasOrdenadas = PlatziMath.ordernarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, listaMedianas.length);
    
    const medianaTop10 = PlatziMath.calcularMediana(top10);

    return medianaTop10;
}

function medianaTop10Less(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordernarListaMenor(listaMedianas);
    // console.log(medianasOrdenadas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad; 

    const top10Less = medianasOrdenadas.slice(limite, listaMedianas.length);

    // console.log({top10Less});
    const medianaTop10Less = PlatziMath.calcularMediana(top10Less);

    return medianaTop10Less;
=======
//Análisis personal para Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    // console.log(trabajos);

    const salarios = trabajos.map(objeto => objeto.salario);

    // console.log(salarios);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    return medianaSalarios;
}

//Intentar calcular una proyección Salarial

function proyeccionSalarial(nombrePersona, tasaAumentoAnual, projectionYear) {
    const medianaSalario = medianaPorPersona(nombrePersona);
    let salarioActual = medianaSalario;
    const proyeccionSalarial = [];

    for (let i = 1; i <= projectionYear; i++) {
        salarioActual = salarioActual * (1 + tasaAumentoAnual);

        proyeccionSalarial.push({
            año: i,
            salario: salarioActual
        });
    }

    return proyeccionSalarial;
}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = aumento + ultimoSalario;

    return nuevoSalario;

}

//Análisis Empresarial 
const empresas = {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        //Si la empresa no existe en el objeto empresa se crea una entrada para esta
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }

        // Si el año no existe en la entrada de la empresa en el objeto "empresas", se crea una entrada para él.
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }

        //Se agrega el salario a la entrada correspondiente en el objeto "empresas".
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)

    }
}

console.log({ empresas });

//Sacar la mediana de cada distinto año del distinto año de cada empresa

function medianaPorEmpresaYear(year, empresa) {
    const salarioYear = empresas[empresa][year];
    const medianaSalarioYear = PlatziMath.calcularMediana(salarioYear);


    if (!empresas[empresa]) {
        console.warn('La empresa no existe');
        return;
    } else if (!empresas[empresa][year]) {
        console.warn('La empresa no dió salarios este año');
        return
    } else {
        return medianaSalarioYear;
    }

}


function proyeccionSalarialPorEmpresa(empresa) {
    if (!empresas[empresa]) {
        console.warn('La empresa no existe');
        return;
    } else {
        const empresaYears = Object.keys(empresas[empresa]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaPorEmpresaYear(year, empresa);
        });

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;

            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = aumento + ultimaMediana;
    
        return nuevaMediana ;
    
    }
}

function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    console.log({listaMedianas});

    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const medianasOrdenadas = PlatziMath.ordernarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, listaMedianas.length);
    
    const medianaTop10 = PlatziMath.calcularMediana(top10);

    return medianaTop10;
}

function medianaTop10Less(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const medianasOrdenadas = PlatziMath.ordernarListaMenor(listaMedianas);
    // console.log(medianasOrdenadas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad; 

    const top10Less = medianasOrdenadas.slice(limite, listaMedianas.length);

    // console.log({top10Less});
    const medianaTop10Less = PlatziMath.calcularMediana(top10Less);

    return medianaTop10Less;
>>>>>>> 0aa921b963b1160506c8ee5b6097c82b53300e5b
}