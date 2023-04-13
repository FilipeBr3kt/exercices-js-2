function retornarValoresParesIndicesPares(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i += 2) {
    const numerosPares = numeros[i] % 2 == 0;

    if (numerosPares) resultado.push(numeros[i]);
  }
  return resultado;
}

console.log(
  retornarValoresParesIndicesPares([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 100, 942, 946, 924, 998,
  ])
);
