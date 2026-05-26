const produto = {
   nome: "Notebook"
}

/*
produto = {
    nome: "Celular"
} 
     Dá erro pq nao pode alterar o valor de um const (mas daria certo se fosse um let)!
*/

produto.nome = "celular"
console.log(produto.nome)
// Da certo pq voce nao ta alterando o const, e sim a variavel que ta dentro do const!