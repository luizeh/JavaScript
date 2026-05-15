let valores = [];
let num = document.getElementById("num");
let sel = document.getElementById("sel");
let res = document.getElementById("res");

num.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionar()
  }
})

function adicionar() {
  let n = Number(num.value);

  if (n >= 1 && n <= 100 && !valores.includes(n)) {
    valores.push(n);
    let item = document.createElement("option");
    item.text = `Valor ${n} adicionado!`;
    sel.appendChild(item);

    num.value = "";
    num.focus();
  } else {
    window.alert("Valor não encontrado ou já adicionado.");
  }
}

function finalizar() {
  if (valores.length === 0) {
    window.alert("Adicione os valores no formulário!");
    return;
  }

  let todo = valores.length;
  let maior = Math.max(...valores);
  let menor = Math.min(...valores);
  let total = valores.reduce((soma, valor) => soma + valor, 0);
  let media = total / todo;

  res.innerHTML = `
  Ao todo, temos ${todo} números cadastrados.<br>
  O maior valor informado foi ${maior}<br>
  O menor valor informado foi ${menor}<br>
  Somando todos os valores temos ${total}<br>
  A média dos valores digitados é ${media} <br>
`;
}

function limpar() {
  sel.innerHTML = "";
  res.innerHTML = "";
  valores = [];
}
