const usuarios = [
    {nome: "Jamilton", idade:32},
    {nome: "Pagotti", idade:15},
    {nome: "Pedro Silva", idade:23},
]
const funcao = function(item,i,arr){
   return item.idade >= this.filtro
}
const filtro = {
    filtro: 18
}


const usuariosMaiorIdade = usuarios.filter(funcao, filtro)
console.log(usuariosMaiorIdade)
