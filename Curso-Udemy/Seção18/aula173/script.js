// Herança - Reutilização e manutenção

class Animal{
constructor(){ //SUPERCLASSE
        this.cor = ""
        this.tamanho = 0
        this.peso = 0
    }
      correr(){
        console.log("CORRENDOOOOO")
    }
    dormir(){
        console.log("dormindoo..")
    }
}

class Cachorro extends Animal{ // SUBCLASSE
    
    latir(){
        console.log("AU AU AU AU!")
    }
} 

class Passaro extends Animal{ // SUBCLASSE
    voar(){
        console.log("VOANDOOOOOOOOO")
     }
}

// instancia
const cachorro = new Cachorro()
const passaro = new Passaro()

passaro.cor = "amarelo"
console.log(passaro.cor)


cachorro.correr()
cachorro.latir()
passaro.correr()
passaro.voar()



