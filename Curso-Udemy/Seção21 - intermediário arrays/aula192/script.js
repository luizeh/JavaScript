// Array: .map

const pessoas = ["pagotti", "jamilton", "pedro"]

let funcao= function(item, indice, arr){
    return {nome: item}

const novoArray = pessoas.map(funcao)
console.log(novoArray)
}

const produtosDolar = [
    {produto: "Notebook", preco: 1200, moeda: "$"},
    {produto: "celular", preco: 800, moeda: "$"}
]

const novo = produtosDolar.map(item => {
    let preco = item.preco * 3
    return {produto: "Notebook", preco: preco, moeda: "R$"}
})

console.log(novo)