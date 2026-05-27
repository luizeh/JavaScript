// Objetos literais - melhorias

let nome = "Notebook"
let preco = "1220"

const produto = {
    nome,
    preco,
    exibirProduto(){
        console.log(`${this.nome}, ${this.preco}, ${this.categoria}`)
    }
}

produto.categoria = "Eletrônicos"
produto.exibirProduto()

produto.exibirPreco = function(){
    console.log(`Preço: ${this.preco}`)
}

produto.exibirPreco()