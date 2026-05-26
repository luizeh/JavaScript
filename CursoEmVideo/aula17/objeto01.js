let goat = {
    nome:'pagotti',
    sexo:'m',
    idade:67,
    altura:1.67,
    peso: 63,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
goat.engordar(4) 
console.log(`${goat.nome} pesa ${goat.peso}`)