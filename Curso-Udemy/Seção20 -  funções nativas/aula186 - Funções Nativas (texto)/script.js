// Funções Nativas


// charat() & replace()
let nome = "pagotti's house"
console.log(nome.charAt(3))
let n = nome.replace("pagotti's", "jamilton's")
console.log(n)
console.log("---------------------------------")

// substring()
let frase = "pagotti não entra em salas, ele manifesta presença"
console.log(frase.substring(0, 7))
console.log("---------------------------------")

// split()
let nome2 = "Rafael Pagotti de lima"
let resultado = nome2.split(" ")
console.log(resultado)
console.log("---------------------------------")

// slice()
let name = "rafael"
let surname = "pagotti"
let s = surname.slice(0,6)
console.log(name + s + "@gazin.com.br")
console.log("---------------------------------")

// toUpperCase() & toLowerCase()
let nume = "Jamilton Damasceno"
console.log(nume.toUpperCase())
console.log(nume.toLowerCase())
console.log("---------------------------------")

// trim()
let namo = "           Pedro Silva      "
console.log(namo.trim())
console.log("---------------------------------")

// concat()
let a = "Olá"
let b = "Jamilton"
let c = "Damasceno"

console.log(a.concat(" ", b, " ", c))