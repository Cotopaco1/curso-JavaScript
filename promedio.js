const lista1 = [100,200,300,400];

function calcularPromedio(lista){

    // var i = 0;
    // var listaLong = lista.length;
    // var sumaElementos = 0;

    // while (i<listaLong){
        
    //     var sumaElementos = sumaElementos + lista[i];
    //     i++;

    // }

    const sumaElementos = lista.reduce(function (valorAcumulado = 0,nuevoElemento){
        return valorAcumulado + nuevoElemento;
     });

    
    var promedio = sumaElementos / lista.length;
    return promedio;
}   