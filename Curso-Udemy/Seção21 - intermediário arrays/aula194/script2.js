// Função reduce com booleanos

const produtos = [
  { nome: "notebook", promocao: true },
  { nome: "celular", promocao: false },
  { nome: "mouse", promocao: false},
];

const produtosPromo = produtos.map((produto) => produto.promocao);
const funcao = function (acumulador, atual) {
  return acumulador || atual;
};
const novo = produtosPromo.reduce(funcao);
if(novo){ console.log("tem promocao")}
else{console.log("NAO tem promocao")}
