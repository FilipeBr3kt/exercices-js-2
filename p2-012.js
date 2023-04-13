const pessoa = {
  nome: "Filipe",
  idade: 16,
  endereco: {
    rua: "Rua A",
    numero: 242,
    cidade: "Brusque",
  },
  emails: ["Lipebrusque@gmail.com"],
};

function removerPropriedade(pessoa, endereco) {
  const copia = Object.assign({}, pessoa);
  delete copia[endereco];
  return copia;
}

console.log(removerPropriedade(pessoa, "endereco"));
