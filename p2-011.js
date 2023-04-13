function receberPrimeiroEUltimoElemento(elemento) {
  const primeiroElemento = elemento.shift();
  const utlimoElemento = elemento.pop();

  return [primeiroElemento, utlimoElemento];
}

console.log(receberPrimeiroEUltimoElemento([5, 5, 4, 3, 2, 9]));

function retornarPrimeiroEUltimo(elem) {
  const indicePrimeiroElem = 0;
  const indiceUltimoElem = elem.length - 1;
  const primeiroElem = elem[indicePrimeiroElem];
  const ultimoElem = elem[indiceUltimoElem];

  return [primeiroElem, ultimoElem];
}

console.log(retornarPrimeiroEUltimo([7, 5, 3, 5, 7, 2, 5, 1, 2]));
