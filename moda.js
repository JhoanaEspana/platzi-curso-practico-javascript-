const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Count = {};

lista1.map(  // .map sirve para recorrer el array
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

// Object.entries sirve para convertir un objeto en un aray
// .sort sirve para iterar en cada uno de los elementos del array y en este cao encontrar la posicion que tiene el num mas grande
const lista1Array = Object.entries(lista1Count).sort(  
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];

