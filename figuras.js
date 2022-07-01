
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

//triangulo isosceles.

function alturaTrianguloIs(lado1,lado2,lado3){

    Number(lado1,lado2,lado3);

    if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)){

        if (lado1===lado2 && lado2===lado3) {
            return "No es un triangulo isosceles"
        }
        else{

            if((lado1 != lado2) && (lado1 != lado3)){
                var b = lado1;
                var lado = lado2;
            }
            else if (lado2!=lado1 && lado2!=lado3){
                var b = lado2;
                var lado = lado1;
            }
        
            else{
                var b = lado3;
                var lado = lado2;
            }

            var altura = Math.sqrt((lado*lado)-((b*b)/4));
            return altura;
        }
    }
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

//triangulo isosceles..

function calcularAlturaIsosceles(){
    const lado1 = document.getElementById("inputTrianguloIsLadoUno");
    const lado2 = document.getElementById("inputTrianguloIsLadoDos");
    const lado3 = document.getElementById("inputTrianguloIsLadoTres");

    const altura=alturaTrianguloIs(lado1.value,lado2.value,lado3.value);

    alert (altura);
}