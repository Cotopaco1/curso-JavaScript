

function calcularPromedio(lista){

//asi lo hice yo:
    // var i = 0;
    // var listaLong = lista.length;
    // var sumaElementos = 0;

    // while (i<listaLong){
        
    //     var sumaElementos = sumaElementos + lista[i];
    //     i++;

    // }

// asi en platzi.
    const sumaElementos = lista.reduce(function (valorAcumulado = 0,nuevoElemento){
        return valorAcumulado + nuevoElemento;
     });

    
    var promedio = sumaElementos / lista.length;
    return promedio;
}   


function stringToNumbers(lista){
    var nuevaLista = JSON.parse("["+ lista + "]");
    return nuevaLista

}



function calcularPromedioUser(){
    var userInput = document.getElementById("inputUser");
    var userInputValue= userInput.value;
    var userArrayN = stringToNumbers(userInputValue);

    const promedioUser = calcularPromedio(userArrayN);
    var resultP = document.getElementById("resultUser");
    resultP.innerText = "El promedio de tus datos es: "+promedioUser;
}