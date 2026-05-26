const produto = {
   nome: "Notebook"
}

Object.freeze(produto)
produto.nome = "celular"
produto.preco = 120
console.log(produto)
