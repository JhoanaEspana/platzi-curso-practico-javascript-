// Código triangulo Isoseles
function alturaTrianguloIsosceles(lado1, lado2, base){

  const base2 = base / 2;

  if (lado1 == lado2){
    return (Math.sqrt((lado1 * lado2) - (base2 * base2)));
  }else{
    return ("Para calcular el alto del triángulo isósceles los lados deben ser iguales");
  }
}

console.log(alturaTrianguloIsoceles(5, 5, 8));