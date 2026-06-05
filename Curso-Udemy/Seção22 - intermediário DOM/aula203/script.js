const obj = document.getElementById('conteudo')
// obj.textContent = "JAMILTON"
obj.innerHTML = "<p>JAMILTON</p>"
////////////////////////////////////

const ul = document.getElementById('itens')
const li = document.createElement('li')
li.setAttribute('teste', '10')

function adicionar(){
ul.appendChild(li)
ul.insertBefore(li, ul.children[1])
li.textContent = "Jamilton Damasceno"

const itemclone = document.getElementById('itemclone')
const item = itemclone.cloneNode(true)
ul.appendChild(item)
}

function remover (){
ul.removeChild(li)
ul.removeChild(item)
}
