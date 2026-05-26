// Funções construtoras - Encapsulamento

const Hotel = function(){
    this.nome = "Hotel do Jamilton"
    this.quantidadeSuites = 30
    let suitesOcupadas = 25

    this.reservar = function(){
        if(suitesOcupadas < this.quantidadeSuites){
        suitesOcupadas++
        console.log("ocupadas " + suitesOcupadas)
        } else{
            console.log("estamos lotados")
        }
        
    }
}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.nome = "jose"
console.log(hotel.nome)
 