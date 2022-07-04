// */ Cada dato tiene 2 elementos: dato , ponderado.

// array de objetos, cada objeto su dato y ponderado: en este caso el dato coresponde a la nota.
var notas = [

    {nota: 6, ponderado: 1},
    {nota: 7, ponderado: 1},
    {nota: 5, ponderado: 1},
    {nota: 7, ponderado: 1},
    {nota: 7, ponderado: 1},
    {nota: 6, ponderado: 5},

]

// hacer la formula con los elementos de esos objetos dentro del array.


var multiplicacionNotaPonderado= [];
var sumaPonderados= [];

for (let i = 0; i<notas.length; i++){
    
     multiplicacionNotaPonderado[i] = notas[i].nota * notas[i].ponderado;
    sumaPonderados[i] = notas[i].ponderado;
    
}
const multiplicacionResultado = multiplicacionNotaPonderado.reduce(function (valorAcumulado=0 ,nuevoElemento){
    return valorAcumulado + nuevoElemento;
})
const sumaPonderadosResultado = sumaPonderados.reduce(function (valorAcumulado=0 ,nuevoElemento){
    return valorAcumulado + nuevoElemento;
})

const promedioPonderado = multiplicacionResultado / sumaPonderadosResultado;
console.log(promedioPonderado);


// formula: ((dato*ponderado) + (dato2*ponderado2))/ (ponderado+ponderado2);


// crear arrayObjeto, cada objeto tendra 2 elementos: Dato y ponderado.

// hacer la formula con los elementos de esos objetos dentro del array.
    //para hacer la formula debo:
    //Debo hacer un ciclo que meta el resultado de la multiplicacion de nota y ponderado de cada objeto en un array.
    //debo sumar todos los elementos del array que contenga el resultado anterior.

    //sumar todos los ponderados.
    //debo meter todos los ponderados en un array para poder sumarlos.

    //dividir el primer array con el segundo array.
    







