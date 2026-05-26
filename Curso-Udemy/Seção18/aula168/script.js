// Notação Literal


/*
const hotel = {
    quartos: 20,
    ocupados: 10,
    piscinas: 2,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        return "Disponível" + res
    }
} 
hotel.quartos = 25
hotel['ocupados'] = 15
delete.hotel.piscinas
console.log(hotel.piscinas)
*/


// Notação de construtor (objeto em branco)


/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
    let res = this.quartos - this.ocupados
    return "Disponível" + res
}
console.log(hotel.quartos)
hotel.verificarDisponibilidade
*/


// Criando classes (mais simples)
class hotel {
    
    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }
    
    verificarDisponibilidade(){
        let res = this.quartos - this.ocupados
        return "disponivel" + res
    }

}

const hotel = new hotel()
console.log(hotel.quartos)