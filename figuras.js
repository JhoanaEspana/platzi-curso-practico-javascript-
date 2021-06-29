// Código del cuadrado
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

console.groupEnd();