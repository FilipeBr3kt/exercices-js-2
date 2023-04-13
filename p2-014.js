const dadosPessoais = {
  nome: "Maria",
  Sobrenome: "Kaminsky",
  Profissão: "Desenvolvedora de software",
};

function retornarArraySobreChave(objeto) {
  const resultado = [];
  for (const chave in objeto) resultado.push([chave, objeto[chave]]);
  return resultado;
}

console.log(retornarArraySobreChave(dadosPessoais));
