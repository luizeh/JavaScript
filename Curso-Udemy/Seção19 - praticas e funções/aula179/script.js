// Funções construtoras

const Hotel = function(){
    this.nome = "Hotel do Jamilton"
    this.quantidadesSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function(){
        this.suitesOcupadas++
        console.log("ocupadas " + this.suitesOcupadas)
    }
}

const hotel = new Hotel()
hotel.nome = "jose"
console.log(hotel.nome)
 