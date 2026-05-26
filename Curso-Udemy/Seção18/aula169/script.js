// Pilar 1- Abstração

// Model, entidade, identidade, características e ações

class Carro {
    constructor(){
        this.marca = "Pasgostis"
        this.modelo = "Peygot"
        this.cor = "preto"
        this.placa = "PGT-6767"
    }
    ligar(){

    }
}

const carro = new Carro()
// carro.modelo = "Pagottito"
console.log(carro.modelo)


// Loja virtual

class Produto{
    constructor(){
        // Roupas
        this.tamanho = "M"
        this.cor = "Vermelho"
        this.preco = "54,90"

        // Eletronicos
        this.altura = "50cm"
        this.largura = "30cm"
    }
}