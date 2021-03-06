// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;



//console.log("Los lados del Triágulo miden: " + ladoTriangulo 
//                                             + " cm, " 
//                                            + ladoTriangulo2 
//                                           + " cm " 
//                                         + baseTriangulo
//                                       + " cm "
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " +  alturaTriangulo + " cm");

function perimetroTriangulo ( ladoTriangulo ,ladoTriangulo2 ,baseTriangulo){
    return  ladoTriangulo + ladoTriangulo2 + baseTriangulo;

}

//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2
}; 

//console.log("El area del triángulo es: " + areaTriangulo + " cm^2" );


console.groupEnd();

// Còdigo del Círculo

console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es : " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es : " + PI );

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}



// Área
function areaCirculo(radio){
    return (radio* radio) * PI;
};


console.groupEnd();

// aqui interactuamos con el html

function calcularperimetrocuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}
 
function calcularareacuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert(area);
}
