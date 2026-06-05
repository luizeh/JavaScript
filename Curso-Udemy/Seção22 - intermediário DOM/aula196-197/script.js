//const obj = document.getElementById('destaque')
const obj = document.querySelector('#destaque')
console.log(typeof obj)

function mudar(){
    let txt = document.querySelector('.primeiro')
    txt.innerHTML = "teste"
    txt.classList.add("destaque")
}

//////////////////////////
const list = document.getElementsByTagName('li')
// for(let i=0; i < obj.clientHeight; i++){
//     console.log(list[i].textContent)
// }

const lista = Array.from(list)
const funcao = function(item,i){
    console.log(item)
}
lista.forEach(funcao)

///////////////////////

let classe = document.getElementsByClassName('vermelho')
console.log(classe)

