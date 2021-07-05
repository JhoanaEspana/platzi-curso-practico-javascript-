/*const precioOriginal = 120;
const descuento = 18;

const porcPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcPrecioConDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcPrecioConDescuento,
  precioConDescuento,
}); */


function calcularPrecioConDescuento(precio, descuento){
  const porcPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcPrecioConDescuento) / 100;

  return precioConDescuento;
}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
} 
