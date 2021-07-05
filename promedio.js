function calcularMediaAritmetica(lista){
  
  /* let sumaLista = 0;
  
  for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
  } */

  // .reduce = recibe una funcion y va a ir sumando cada uno de sus elementos, asi con cada uno de los elementos que haya en la lista
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}