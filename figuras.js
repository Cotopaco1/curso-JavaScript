
//Cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado*lado;
}

//Triangulo

function perimetroTriangulo(lado1,lado2,base){
    return Number(lado1) + Number(lado2) + Number(base) ;
} 

function areaTriangulo(base,altura){
    return (base*altura)/2;
} 

//Circulo

const radioCirculo = 5;
function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    diametro= diametroCirculo(radio);
    return diametro*Math.PI;
} 
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
} 

//Aqui interactuamos con el html
//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);

}

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('inputTrianguloLadoUno');
    const valueLado1 = lado1.value; 
    const lado2 = document.getElementById('inputTrianguloLadoDos');
    const valueLado2 = lado2.value; 
    const base = document.getElementById('inputTrianguloBase');
    const valueBase = base.value; 

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);   

}

function calcularAreaTriangulo(){
    const altura = document.getElementById('inputTrianguloAltura');
    const valueAltura = altura.value; 
    const base = document.getElementById('inputTrianguloBase');
    const valueBase = base.value; 

    const area = areaTriangulo(valueAltura,valueBase);
    alert(area);   

}

//circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("inputCirculoRadio");

    const diametro = diametroCirculo(Number(radio.value));

    
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculoRadio");

    const perimetro = perimetroCirculo(Number(radio.value));

    alert(perimetro);

}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculoRadio");

    const area= areaCirculo(radio.value);

    alert(area);
    
}

