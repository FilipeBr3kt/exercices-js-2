function multi(num1, num2) {
  let resultado = 0;
  for (let i = 0; num2 > i; i++) resultado += num1;
  //resultado = 1 + 5 || 2 + 6 || 3 + 8 || 4 + 11 || 5 + 15 = 20
  return resultado;
}

console.log(multi(5, 5));
