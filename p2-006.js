function booleanNumerico(valor) {
  if (typeof valor === "boolean") {
    return console.log(!valor);
  } else if (typeof valor === "number") {
    return console.log(-valor);
  } else {
    return console.log(
      "O valor esperado era booleano ou numérico, o valor recebido foi do tipo:",
      typeof valor
    );
  }
}

booleanNumerico(true);
booleanNumerico(-6);
booleanNumerico(5);
booleanNumerico("6");
