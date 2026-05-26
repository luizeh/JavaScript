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


const pro = produto
pro.preco = 2000
console.log(produto.preco)

