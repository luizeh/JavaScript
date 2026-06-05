function executar() {
  console.log("executar");
  btn.removeEventListener('click', executar, false)

}

function executar2() {
  console.log("executar2");
}
const btn = document.getElementById("btn");
const body = document.querySelector('body');
btn.addEventListener('click', executar, false)
body.addEventListener('click', executar2 , false)

// if( browseriscompativel ){
//     botao.addEventListener('click', executar)
// } else{
//     botao.attachEvent('click', executar)
// }

