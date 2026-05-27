// Herança - Reutilização e manutenção

class Animal { //SUPERCLASSE
  constructor(pCor, pTamanho, pPeso) {
    this.cor = pCor
    this.tamanho = pTamanho
    this.peso = pPeso
  }
  correr() {
    console.log("CORRENDOOOOO");
    console.log("como");
    console.log("um");
  }
  dormir() {
    console.log("dormindoo..");
  }
}

class Cachorro extends Animal {
  // SUBCLASSE
  constructor(pCor, pTamanho, pPeso, pTamanhoOrelha) {
    super(pCor, pTamanho, pPeso)
    this.tamanhoOrelha = pTamanhoOrelha
  }
  correr() {
    super.correr();
    console.log("cão");
  }

  latir() {
    console.log("AU AU AU AU!");
  }
}

class Passaro extends Animal {
  // SUBCLASSE
  constructor(pCor, pTamanho, pPeso){
    super(pCor, pTamanho, pPeso)
  }
  correr() {
    super.correr();
    console.log("Pássaro");
  }

  voar() {
    console.log("VOANDOOOOOOOOO");
  }
}

class Papagaio extends Passaro {
  constructor(pCor, pTamanho, pPeso, psabeFalar){
    super(pCor, pTamanho, pPeso)
    this.sabeFalar = psabeFalar
  }
  falar() {
    console.log("falar");
  }
}

// instancia
const animal = new Animal("Amarelo", 60, 3)
const cachorro = new Cachorro("Amarelo", 60, '5kg', '3cm')
const passaro = new Passaro("Vermelho", 35, '1.5kg')
const papagaio = new Papagaio("Verde", 35, '1kg', 'true')
console.log(passaro.cor)
console.log(papagaio.cor)
console.log(papagaio.sabeFalar)

console.log(animal.tamanho)
console.log(cachorro.tamanhoOrelha)