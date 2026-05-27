// Operações com datas

const data = new Date()
// data.setDate(data.getDate() + 300)
data.setFullYear(data.getDate() + 2040)
let ano = data.getFullYear()
let mes = data.getMonth() + 1
let dia = data.getDate()

console.log(`data: ${dia} / ${mes} / ${ano}`)
