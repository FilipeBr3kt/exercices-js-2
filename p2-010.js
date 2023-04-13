function simboloMais(x) {
  let resultado = "";
  for (let i = 0; x > i; i++) resultado += "+";
  return resultado;
}
console.log(simboloMais(4));
