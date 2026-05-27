// Pilar - Encapsulamento

class Carro{
    constructor(){
    this.modelo = "Gol"
    this.cor = "Preto"
    }
    frear(){
        /* Freio com tecnologia a disco
        .
        .
        .
        .
        .
        */
        console.log("CARRO PAROU!")
    }
}

const carro = new Carro()
carro.frear()