let cpf = "10772857954";
const digitos = Array.from(String(cpf)).map(Number);

function verifDigito1() {
  let soma = 0;
  let multiplicador = 10;
  for (let index = 0; index < 9; index++) {
    soma += digitos[index] * multiplicador;
    multiplicador--;
  }

    const resto = soma % 11;

    if (resto < 2) {
      return 0;
    } else {
      return 11 - resto;
    }

}

function verifDigito2() {
  let soma = 0;
  let multiplicador = 11;
  for (let index = 0; index < 10; index++) {
    soma += digitos[index] * multiplicador;
    multiplicador--;
  }

  const resto = soma % 11;

  if (resto < 2) {
    return 0;
  } else {
    return 11 - resto;
  }
}

const primeiroDigito = verifDigito1();
const segundoDigito = verifDigito2();
console.log("---Primeiro Digito ---");
console.log(primeiroDigito);
console.log(digitos[9]);
console.log("---Segundo Digito ---");
console.log(segundoDigito);
console.log(digitos[10]);
console.log("---Resultado ---");

if (digitos.length < 11 || digitos.length > 11) {
  console.log("TAMANHO CPF INVÁLIDO.");
} else if (digitos.every((num) => num === digitos[0])) {
  console.log("CPF INVÁLIDO: TODOS OS DIGITOS IGUAIS.");
} else if (primeiroDigito !== digitos[9]) {
  console.log("PRIMEIRO DIGITO CPF INVÁLIDO.");
} else if (segundoDigito !== digitos[10]) {
  console.log("SEGUNDO DIGITO CPF INVÁLIDO");
} else {
  console.log("CPF CORRETO");
}
