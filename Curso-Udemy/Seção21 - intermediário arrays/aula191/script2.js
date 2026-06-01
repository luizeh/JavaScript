//Recriando forEach sem usar for each

const lista = ["Jamilton", "Pagotti", "Pedro", "Enzinx"];

Array.prototype.percorrer = function (funcao) {
    for(let i=0; i < this.length; i++)
        // console.log("teste")
    funcao(this[i],i,this)
};

const funcao = function(item){
    console.log(item)
}

lista.percorrer(funcao)
 