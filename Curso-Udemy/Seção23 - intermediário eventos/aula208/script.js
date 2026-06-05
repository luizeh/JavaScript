function executar() {
  console.log("executar");
}

const h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const body = document.querySelector('body')
// btn.addEventListener('click', executar)
// btn.addEventListener('dblclick', executar)
// btn.addEventListener('mousedown', executar)
// btn.addEventListener('mouseup', executar)
// btn.addEventListener('mousemove', executar)
// btn.addEventListener('mouseover', executar)
btn.addEventListener('mouseout', executar)


