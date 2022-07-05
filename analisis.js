////Helpers:

//Funcion para saber si un numero ess par o no:
function esPar(num){
    return (num%2===0);

}

//Calculadora de medianas:
    //si es par:
function calcularMedianaSalarios(salarysSorted){

    const mitadL = parseInt(salarysSorted.length / 2)

if (esPar(salarysSorted.length)){

    const numA = salarysSorted[mitadL-1];
    const numb = salarysSorted[mitadL];

    const medianaSalary = (numA + numb)/2;
    return medianaSalary;
}

    //si es impar:
else{
    
    const medianaSalary =   salarysSorted[mitadL];
    return medianaSalary;
}

}

//Calculadora para sacar el top% que pongamos.
//el array debe estar ordenado en forma ascendente.
function calcularMedianaTop(array,spliceStart,spliceEnd){
    
    var spliceStartt = parseInt((array.length*spliceStart)/100);
    var spliceEndd = parseInt((array.length*spliceEnd)/100);

   console.log("start"+spliceStartt +" end"+spliceEndd);
    
    var Resultado = array.slice(spliceStartt,spliceEndd);
    console.log(Resultado);
    
    var medianaTop = calcularMedianaSalarios(Resultado);

    return medianaTop;
    
    }
    
    // 23 = 100
    // b = 10


//funcion para Tomar  elementos de un array y ponerlos en un array nuevo.
//no me sirvio, parec que debo usar esa misma funcion cada vez que la necesite
function tomarLosElementosDeUnArray (array){
   const elem = "salary";
const nuevoArray = array.map(function (obj){
return obj.elem;  
});
return nuevoArray;
}
//

//Funcion para ordenar un array numerico en forma ascendente
function ordenarArrayNumericoAscendente(array){

const newArraySorted = array.sort(function (a,b){
    return a-b; 
});

return newArraySorted;
}

//funcion para calcular la capacidad de endeudamiento:
function calcularCapacidadEndeudamiento(ingresoTotalMes,gastosFijoMes,porcentajeMaximoParaCuotaMensual){
    const capacidadEndeudamiento = (ingresoTotalMes-gastosFijoMes)*porcentajeMaximoParaCuotaMensual;
    return capacidadEndeudamiento;

}


//Sacamos la capacidad de endeudamiento general de colombia.
    //ordenamos la capacidad de endeudamiento en un array
const capacidadEndeudamientoColombia = colombia.map(function (obj){

    const capacidadEndeudamiento = calcularCapacidadEndeudamiento(obj.salary,obj.gastosFijosM,0.35)
    return capacidadEndeudamiento;
    });
    //organizamos de forma ascendente
ordenarArrayNumericoAscendente(capacidadEndeudamientoColombia);
    //sacamos la medianaGeneral.
const medianaCapacidadDeEndeudamiento = calcularMedianaSalarios(capacidadEndeudamientoColombia);

// usamos la funcion CalcularMedianaTop que nos permite sacar la mediana de un % de la lista de datos.
const top10CapacidadEndeudamiento = calcularMedianaTop(capacidadEndeudamientoColombia,90,100);

//calculamos la mediana del top20 pobre
const top20PobreCapacidadEndeudamiento = calcularMedianaTop(capacidadEndeudamientoColombia,0,20);

//calculamos la mediana del input del usuario:

function calcularCapacidadEndeudamientoUsuario (){

    const ingresoTotalMesUsuario = document.getElementById("ingresoMensual");
    const gastoMensualUsuario = document.getElementById("gastoMensual");
    const capacidadEndeudamientoUsuario = calcularCapacidadEndeudamiento(ingresoTotalMesUsuario.value,gastoMensualUsuario.value,0.35);

    const resultUser = document.getElementById("capacidadEndeudamientoUser");
    resultUser.innerText = "La capacidad de endeudamiento que tienes es: "+ capacidadEndeudamientoUsuario;
    
}


//Mandamos el dato al parrafo:
const resultPG = document.getElementById("poblacionGeneral");

    resultPG.innerText = "La mediana general de la poblacion Colombiana es de: "+medianaCapacidadDeEndeudamiento;

const resultPtop10 = document.getElementById("poblacionAdineradaTop10");
resultPtop10.innerText = "La mediana del 10% de la poblacion Colombiana mas adinerada es de: "+ top10CapacidadEndeudamiento;

const resultPbot10 = document.getElementById("poblacionMenosAdineradaTop10");
        resultPbot10.innerText = "La mediana del 20% de la poblacion Colombiana mas pobre es de: "+ top20PobreCapacidadEndeudamiento;










// console.log({ medianaGeneralCol, medianaTop10Col});


