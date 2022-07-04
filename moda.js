let array = [1,2,1,2,3,4,5,6,1,2,3,4,5,6,2,1,4,3,2,1,5,6,7,1,2,3,4,1,2,3];

let arrayCount = {};
// creamos un nuevo array que contiene un nuevo objeto por cada numero que tiene un array.
// y despues hacemos que cada vez que se repita ese numero se le agregue +1 al alor de ese elemento.

array.map(function(elemento){

    if(arrayCount[elemento]){
        arrayCount[elemento] += 1;

    }
    else{
        arrayCount[elemento] = 1;

    }

});
// Convvertimos el array de objetos creado anteriormente a un array de strings.

var arrayCountArray = Object.entries(arrayCount);

// usamos el metodo.sort para organizar de forma ascendente(por default) los elementos dentro del array.
// los elementos del array tambien son arrays, es decir tienen mas de un elemento dentro de ellos.
// por eso tenemos que especificar que queremos ordenarlos por el segundo elemento que tiene cada elemeno-array.
// Array(contenedor princiapl), elemento-array(array dentro del array principal), elemento(elemento dentro de elemento-array.)
var arrayCountArray = arrayCountArray.sort(function (elementoA,elementoB){
    return elementoA[1] - elementoB[1]; // recordemos que el index de un array empieza desde 0, por eso aca ponemos el 1 para buscar el ssegundo elemento. index 1= elemneto2.
});

const moda = arrayCountArray[arrayCountArray - 1];
