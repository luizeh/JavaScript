// Descendentes de Object
Object.prototype

const obj = {}

// console.log(obj.toString())
// console.log(obj.__proto__ == Object.prototype)




class Carro{
    constructor(){
        this.placa = "AMP_1230"
    }
}

class Bmw extends Carro{
    constructor(){
        super()
        this.nome = "BMW 320i"
    }
}

// const objBmw = new Bmw()
// console.log(objBmw.placa)
// console.log(objBmw.nome)


// Prototype chain - encadeamento de objetos
const veiculo = {
    motor: "50 cavalos",
}


const carro = {
    __proto__: veiculo,
    placa: "AMP_1230",
    acelerar: function(){
        console.log('acelerar')
    }
}

const bmw ={
    nome : "BMW 320i",
    __proto__:carro
}
bmw.acelerar()
console.log(bmw.placa)