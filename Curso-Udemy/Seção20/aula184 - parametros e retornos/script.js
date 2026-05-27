// Parâmetros padrão

function somar(numero1, numero2){
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2
    return numero1 + numero2
}

console.log(somar(5))