// Parametros e retornos opcionais
function calcularSalario(salario, desconto){
    desconto = isNaN(desconto) ? 0 : desconto
    if(salario == 0){
        console.log("Salário não informado")
    }else{
    return salario - desconto
    }
}
// Não recomendado pelo jamilton, é melhor a funçao fazer uma coisa só: mostrar uma mensagem ou retornar um valor. fazer os dois na mesma função pode causar problemas no seu código depois.

let resultado = calcularSalario(100, 20)
console.log(resultado)