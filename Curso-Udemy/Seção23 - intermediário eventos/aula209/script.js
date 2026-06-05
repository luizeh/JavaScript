function executar() {
  console.log("executar");
}

const inp = document.querySelector('#entrada')
inp.addEventListener('focus',executar)
// inp.addEventListener('blur',executar)
