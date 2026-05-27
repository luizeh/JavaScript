// Funções de callback

function processar(callbackSucesso, callbackErro){
    /* 
    ações que podem demorar
    ...
    */
   let resultadoProcessamento = false
   if(resultadoProcessamento){
    callbackSucesso()
   }else{
    callbackErro()
   }

}

const salvarResultado = function(){
    /*
    ...
    */
   console.log("salvar resultado")
} 

const erro = function(){
    /*
    ...
    */
   console.log("erro")
}

processar(salvarResultado, erro)