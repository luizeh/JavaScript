function executar() {
  console.log("executar");
}
 const inp = document.getElementById('inp')
//  inp.addEventListener('keydown', executar)
// inp.addEventListener('keyup', executar)
inp.addEventListener('keypress', executar)