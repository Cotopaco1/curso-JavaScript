
//Funcion para ordenar una array de numero en forma ascendente
function ordenarArrayNumerico(array){

    array.sort((a,b)=>a-b);
    return array;
}





//Funcion para calcular la media de un array, ordenando al mismo tiempo el array numerico.
function calcularMedia(lista){

    var lista = ordenarArrayNumerico(lista);

    var listaLength = lista.length;
    mitadLista = listaLength / 2;
    console.log("esta es la mitad de la lista: "+mitadLista);

    if (esPar(listaLength)){

        const numCentral1 = lista[mitadLista-1];
        const numCentral2 = lista[mitadLista];

        console.log("Este es el numcentral1 "+numCentral1);
        
        console.log("Este es el numcentral2 "+numCentral2);

        var promedioMedia = (numCentral1 + numCentral2)/2;
        return promedioMedia;


    }
    else{

        var media = lista[parseInt(mitadLista)];
        return media;   

    }


}

//funcion para saber si un numero es par.       
function esPar(num){

    if (num % 2 ===0){
        return true;
    }
    else{
        return false;
    }

}

//function calcularMedia con input del usuario
// No esta funcionando debido a que el input que le pido al usuario si es text, no puedo convertirlo a number por que son muchos numeros no es solo 1 ya que es una lista
// si es number no me deja escribir la , para separar la lista de numeros.
//Probablmente si quiero que funcione debo hacer varios inputs y que me escriba cada numero de la lista en un input distinto, pero considero que no es nada practico..

function calcularMediaInput(){

    var array = document.getElementById("inputArray");
    const arrayValue = array.

    const media = calcularMedia();

    const resultP = document.getElementById("resultado");

    resultP.innerText = "La media de la lista de numeros es: "+media;
    
}
