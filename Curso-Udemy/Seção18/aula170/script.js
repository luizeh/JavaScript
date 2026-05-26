 // Métodos - parâmetros e retornos

 class Usuario{
    constructor(){
        this.email = ""
        this.senha = ""
        this.subtotalCompra = 0
    }

    logar(){
    
    let emailbd = "luizeh@gmail.com"
    let senhabd = "say6784310wallahi.@91"  

    if(emailbd === this.email && senhabd === this.senha){
        return "senha válida"
    } else{
        return "Credenciaias inválidas"
    }
}
    calcularDesconto( cupom ){

        let desconto = 0
        if(cupom == "DESC20"){
            desconto = 20
        } else if (cupom == "FEST10"){
            desconto = 10
    }
        return this.subtotalCompra - desconto
    }
  }

 const usuario = new Usuario()
usuario.subtotalCompra = 500
const totalFinal = usuario.calcularDesconto("FEST10")
console.log(totalFinal)
//  usuario.email = "luizeh@gmail.com"
//  usuario.senha = "say6784310wallahi.@91"

//  let mensagem = usuario.logar()
//  console.log(mensagem)