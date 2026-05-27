const data = new Date()
console.log(data.toString())
console.log("---------------------------------")

let ano = data.getFullYear()
let mes = data.getMonth() + 1
let dia = data.getDate()
let hora = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()
let milisegundos = data.getMilliseconds()
console.log(`data: ${dia}/${mes}/${ano} hora: ${hora}:${minutos}:${segundos}:${milisegundos}`)
console.log("---------------------------------")
