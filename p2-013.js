function retornarValoresNumericos(elem) {
  const valoresNumericos = elem.filter(
    (numeros) => typeof numeros === "number"
  );
  return valoresNumericos;
}

console.log(
  retornarValoresNumericos([
    0,
    1,
    2,
    3,
    4,
    5,
    "text1",
    "text2",
    "text3",
    6,
    7,
    8,
    9,
  ])
);
