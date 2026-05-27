// Factory - Dseign Pattern (padrão de design ou padrao de projetos)
// Padrão de prohetos -> forma comum de resolver problemas   

const produto1 = {
    nome: "notebook",
    preco: 1220
}

const produto2 = {
    nome: "notebook",
    preco: 1220
}

const ProdutoFactory = function(nome, preco){

    //dados

    return{
        nome,
        preco,
        recuperarAvaliacoes(){
            console.log(`Avaliações para ${this.nome}`)
        }
    }
}

const produto = ProdutoFactory("notebook", 1220)
console.log(produto)
const Produto2 = ProdutoFactory("celular", 2348)
console.log(Produto2)
