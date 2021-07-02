/* // Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm2");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


// Código del triangulo

console.group("triangulo");
const ladoT1 = 6;
const ladoT2 = 6;
const baseT = 4;

console.log("Los lados del triángulo miden: " + ladoT1 + "cm, " + ladoT2 + "cm, " + baseT + "cm");

const alturaT = 5.5;
console.log("La altura del triángulo es de: " + alturaT + "cm");

const perimetroT = ladoT1 + ladoT2 + baseT;
console.log("El perimetro del triángulo es: " + perimetroT + "cm2");

const areaT = (baseT * alturaT) / 2;
console.log("El área del triángulo es: " + areaT + "cm2");

console.groupEnd();


// Código del circulo

console.group("Circulo");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm2");

console.groupEnd(); */


// Código del cuadrado
function perimetroCuadrado(lado){
  return lado * 4;
}

function areaCuadrado(lado){
  return lado * lado;
}


// Código del triangulo
function perimetroTriangulo(ladoT1, ladoT2, baseT){
  return ladoT1 + ladoT2 + baseT;  
}

function areaT(baseT, alturaT){
  return (baseT * alturaT) / 2;
}

// Código triangulo Isoseles
function alturaTrianguloIsoceles(ladoT1, ladoT2, baseT){

  const base2 = baseT / 2;

  if (ladoT1 == ladoT2){
    return (Math.sqrt((ladoT1 * ladoT2) - (base2 * base2)));
  }else{
    alert("Para calcular la altura del triángulo isósceles los lados deben ser iguales");
  }
}

// Código del circulo
function diametroCirculo(radio){
  return radio * 2;
}

//PI
const PI = Math.PI;

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio){
  return (radio * radio) * PI;
}

// conectar con el HTML
// Cuadrado
function calcPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetroCF = perimetroCuadrado(value);
  alert("El perimetro de tu cuadrado es de: " + perimetroCF);
}

function calcAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const areaCF = areaCuadrado(value);
  alert("El area de tu cuadrado es de: " + areaCF);
}

// Triangulo
function calcPerimetroTriangulo(){
  const input1 = document.getElementById("InputLado1");
  const lado1 = parseInt(input1.value);

  const input2 = document.getElementById("InputLado2");
  const lado2 = parseInt(input2.value);

  const inputB = document.getElementById("InputBase");
  const baseT = parseInt(inputB.value);

  const perimetroTF = perimetroTriangulo(lado1, lado2, baseT);
  alert("El perimetro de tu triangulo es de: " + perimetroTF);
}
  
function calcAreaTriangulo(){
  const inputA = document.getElementById("InputAltura");
  const alturaT = parseInt(inputA.value);

  const inputB = document.getElementById("InputBaseA");
  const baseT = parseInt(inputB.value);

  const areaTrianguloF = areaT(baseT, alturaT);
  alert("El perimetro de tu triangulo es de: " + areaTrianguloF);
}

// Triangulo Isosceles
function calcAlturaIsosceles(){
  const input1 = document.getElementById("InputLado1");
  const lado1 = input1.value;

  const input2 = document.getElementById("InputLado2");
  const lado2 = input2.value;

  const inputB = document.getElementById("InputBase");
  const baseT = inputB.value;

  const altoTrianguloIsosF = alturaTrianguloIsoceles(lado1, lado2, baseT);
  alert("El alto de tu triangulo Isosceles es de: " + altoTrianguloIsosF);
}


// Circulo

function calcDiametroCirculo(){
  const input = document.getElementById("radioC");
  const value = input.value;

  const diametroCirculoF = diametroCirculo(value);
  alert("El diametro de tu circulo es de: " + diametroCirculoF);
}

function calcPerimetroCirculo(){
  const input = document.getElementById("radioC");
  const value = input.value;

  const perimetroCirculoF = perimetroCirculo(value);
  alert("El perimetro de tu circulo es de: " + perimetroCirculoF);
}

function calcAreaCirculo(){
  const input = document.getElementById("radioC");
  const value = input.value;
  
  const areaCirculoF = areaCirculo(value);
  alert("El area de tu circulo es de: " + areaCirculoF);
}