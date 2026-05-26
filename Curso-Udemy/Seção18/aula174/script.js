// Herança - Reutilização e manutenção

class Animal{
constructor(){ //SUPERCLASSE
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }
      correr(){
        console.log("CORRENDOOOOO")
        console.log("como")
        console.log("um")
    }
    dormir(){
        console.log("dormindoo..")
    }
}

class Cachorro extends Animal{ // SUBCLASSE
    constructor(){
        super()
        this.tamanhoOrelha = 9
    }
    correr(){
        super.correr()
        console.log("cão")
    }

    latir(){
        console.log("AU AU AU AU!")
    }
} 

class Passaro extends Animal{ // SUBCLASSE
    voar(){
        console.log("VOANDOOOOOOOOO")
     }
}

class Papagaio extends Passaro{
    falar(){
            console.log("falar")
        }
    }

// instancia
const cachorro = new Cachorro()
const passaro = new Passaro()
const papagaio = new Papagaio()

cachorro.correr()

papagaio.voar()



