const obj = document.getElementById('itens')
obj.setAttribute('quantidade', '10')
console.log(obj.getAttribute('quantidade'))

obj.dataset.status = "finalizado"
// obj.removeAttribute('data-status')
console.log(obj.dataset.status)
console.log(obj.attributes['quantidade'])
console.log(obj.attributes)

/////////////////////////////////////////

const lnome = document.getElementById('labelnome')
const nome = document.getElementById('nome')
console.log(lnome.attributes.htmlFor)