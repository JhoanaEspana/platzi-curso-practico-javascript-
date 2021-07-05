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


// Codigo del profe

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.error("Los lados a y b no son iguales");
  } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;

      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
  }
}