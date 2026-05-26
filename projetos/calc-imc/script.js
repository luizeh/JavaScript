function calcularIMCValue(peso, altura) {
  return peso / (altura * altura);
}

function obterCategoria(imc) {
  if (imc <= 18.5) {
    return {
      categoria: "Abaixo do Peso",
      descricao: "Você está abaixo do peso ideal. Consule um nutricionista.",
      class: "category-underweight",
    };
  } else if (imc <= 24.9) {
    return {
      categoria: "Peso Normal",
      descricao: "Parabéns! Seu peso está dentro do intervalo ideal.",
      class: "category-normal",
    };
  } else if (imc <= 29.9) {
    return {
      categoria: "Acima do Peso",
      descricao: "Você está acima do peso. Considere revisar sua alimentação.",
      class: "category-overweight",
    };
  } else if (imc <= 34.9) {
    return {
      categoria: "Obesidade Classe I",
      descricao: "Você tem obesidade classe I. Procure ajuda profissional.",
      class: "category-obesity1",
    };
  } else if (imc <= 39.9) {
    return {
      categoria: "Obesidade Classe II",
      descricao:
        "Você tem obesidade classe II. Procure um médico urgentemente.",
      class: "category-obesity2",
    };
  } else {
    return {
      categoria: "Obesidade Classe III",
      descricao:
        "Você tem obesidade classe III. Procure ajuda médica imediatamente.",
      class: "category-obesity3",
    };
  }
}

function calcularIMC(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const imc = calcularIMCValue(peso, altura);
  const categoria = obterCategoria(imc);

  const imcFormatado = imc.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const resultCard = document.getElementById("resultCard");
  const resultIMC = document.getElementById("resultIMC");
  const resultCategory = document.getElementById("resultCategory");
  const resultDescription = document.getElementById("resultDescription");

  resultIMC.textContent = imcFormatado;
  resultCategory.textContent = categoria.categoria;
  resultDescription.textContent = categoria.descricao;

  resultCard.className = "result-card " + categoria.class;
  resultCard.style.display = "block";
}

function limparFormulario() {
  document.getElementById("imcForm").reset();
  document.getElementById("resultCard").style.display = "none";
  document.getElementById("peso").focus();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("imcForm");
  form.addEventListener("submit", calcularIMC);
});
