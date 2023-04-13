function verificaMaxMin(numero, minimo, maximo, inclusivo) {
  if (numero < maximo && numero > minimo && inclusivo === true) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

verificaMaxMin(50, 10, 100);
verificaMaxMin(5, 10, 100, true);
verificaMaxMin(50, 10, 100, true);
