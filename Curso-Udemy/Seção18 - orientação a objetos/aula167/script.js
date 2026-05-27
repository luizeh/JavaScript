// Paradigma -> exemplo ou padrão a ser seguido, não se trata de uma linguagem,
// mas a forma como você soluciona problemas usando uma linguagem de programação

// Javascript é multi paradigma

// Procedural
// Funções que manipulam dados

// function verificarDisponibilidade(q,o){
//     let res = q - o
//     console.log("Disponíveis: " + res)
// }

// let quartos = 20
// let ocupados = 5
// verificarDisponibilidade(quartos,ocupados)

// Orientado a objetos
const hotel = {
    quartos: 20,
    ocupados: 10,
    verificarDisponibilidade: function(){
        let res = this.quartos - this.ocupados
        console.log("Disponíveis:" +res)
    }
}

hotel.ocupados = 5
hotel.verificarDisponibilidade()


// Nenhum paradigma resolve todos os problemas da maneira mais fácil ou mais eficiente 