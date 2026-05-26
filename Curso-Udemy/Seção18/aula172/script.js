// Encapsulamento, modificadores de acesso e getters e setter

class ContaBancaria {
    constructor(){
        this._numeroConta = 0
        this._saldo = 0
    }
    sacar(valorSaque){
        this._saldo = this._saldo - valorSaque
    }
    depositar(valorDeposito){
        this._saldo = this._saldo + valorDeposito
    }

    get saldo(){
        return this._saldo
    }
    set saldo(novoSaldo){
        if(novoSaldo > 0){
            this._saldo = novoSaldo
        }
    }


    get numeroConta(){
        // Verificar se o usuário está logado
        return "Número : " + this._numeroConta
    }

    set numeroConta( numero ){
        if(numero > 0){
        this._numeroConta = numero - 3
        }
    }

}
const conta = new ContaBancaria()
// conta.numeroConta = 70
conta.saldo = 500
conta.sacar(50)
conta.depositar(100)

console.log(conta.saldo)
