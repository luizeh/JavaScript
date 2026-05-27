function calcular() {
  let alc = document.getElementById("alcool");
  let gas = document.getElementById("gasolina");
  let res = document.getElementById("res");

  if (alc.value > gas.value) {
    res.innerHTML = "Melhor utilizar gasolina.";
  } else {
    res.innerHTML = "Melhor utilizar álcool.";
  }
}

function limpar() {
  let alc = document.getElementById("alcool");
  let gas = document.getElementById("gasolina");
  let res = document.getElementById("res");

  alc = alc.value = "";
  gas = gas.value = "";
  res = res.innerHTML = "";
}
