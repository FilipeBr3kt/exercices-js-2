// função 1
function repeticao(numText, numRep) {
  let str = "";
  for (let i = 0; numRep > i; i++) str += numText;
  let resultado = str.split("");
  return resultado;
}

console.log(repeticao(3, 5));

// função 2
function repetir(item, quantidade) {
  let resultado = [];
  for (let i = 0; quantidade > i; i++) resultado.push(item);
  return resultado;
}

console.log(repetir("Nicolau", 10));
