
//Funcion para ordenar una array de numero en forma ascendente
function ordenarArrayNumerico(array){

    array.sort((a,b)=>a-b);
    console.log(array);
}




//Funcion para calcular la media de un array, ordenando al mismo tiempo el array numerico.
function calcularMedia(lista){

    lista = ordenarArrayNumerico(lista);

    mitadLista = lista.length / 2;
    console.log("esta es la mitad de la lista: "+mitadLista);

    if (esPar(lista.length)){

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

function CalcularMediaInput()