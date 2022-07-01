function precioDescuento(precio,descuento){

    var precioFinal = ((precio*(100-descuento))/100)
    return precioFinal;
}


const cupones50 = ["cupon1","cupon2","cupon3", "cupon4", "cupon5"]
const cupones10 = ["cuponA","cuponB","cuponC","cuponD"]

function calcularPrecioConDescuento(precio,descuento){
    precio = document.getElementById("precioOriginal");
    descuento = document.getElementById("descuento");
    var cupon = document.getElementById("inputCupon");
    var cuponValue = cupon.value;

  
    switch (cuponValue != undefined){
        case cupones50.some(function(cuponV){
            return cuponValue == cuponV
        }):
            var descuentoCupon = 50;
            break;
        case cupones10.some(function(cuponV){
            return cuponValue == cuponV
        }):
            var descuentoCupon = 10;
            break;
    }

    var descuentoValue = descuento.value
     var  descuentoTotal= Number(descuentoValue) + descuentoCupon;
    precioFinal= precioDescuento(precio.value,descuentoTotal);
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioFinal;

}

