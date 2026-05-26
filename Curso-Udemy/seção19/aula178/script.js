// tratamento de erros com Try Catch
function contarQuantidadeLetras (produto){
    try{
        console.log(produto.nome.length)
    } catch(erro){
        // tratarErro()
        console.log("erro ao processar ")
    } /*finally {
        console.log("finally")
    }
*/
}

const produto = {
    nom: "Notebook",
    preco: 1220
}

function tratarErro(erro){
    throw new Error("teste")
}

contarQuantidadeLetras(produto) 