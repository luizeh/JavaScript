const obj =document.getElementsByName('cadastro')
// console.log(document.forms)
// console.log(document.cadastro)
// console.log(document.cadastro.sexo)
// document.cadastro.nome.value = "jamilton"

function acao(){
  // document.cadastro.sexo.value = "M"
  // document.cadastro.nome.value = "Rafael"
  // document.cadastro.sobrenome.value = "Pagotti"
  let nome = document.cadastro.nome.value
  let sobrenome = document.cadastro.sobrenome.value
  let sexo = document.cadastro.sexo.value
  console.log(nome)
  console.log(sobrenome)
  console.log(sexo)
}