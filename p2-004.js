function mesDoAno(mes) {
  switch (mes) {
    case 1:
      console.log("janeiro");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    case 4:
      console.log("Abril");
      break;
    case 5:
      console.log("Maio");
      break;
    case 6:
      console.log("Junho");
      break;
    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;
    default:
      console.log("Mês inválido");
  }
}

mesDoAno(4);

function ReceberMes(numero) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[--numero];
}

console.log(ReceberMes(2));
