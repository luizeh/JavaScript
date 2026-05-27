// Metodos uteis para arrays

const estados = ["São paulo" , "Rio de Janeiro", "Minas Gerais", "Bahia", "Santa Catarina"]

/*** Remove elementos do array */

// estados.pop()  remove o último
// estados.shift()  remove o primeiro

/*** Adiciona novo elemento no array */

// estados.push("Maranhão") adiciona no final
// estados.unshift("Paraná") adiciona no inicio

/*** Retorna novo array */

// const novo = estados.splice(0, 2, "Maranhão", "Paraná", "Pará")
// const novo = estados.slice(0,2)

// console.log(novo)
// console.log(estados)


/*** Converte Array para String */

const usuarios = ["Pagotti", "Jamilton", "Pedro"]
let texto = usuarios.join()
let arraytexto = texto.split(",")
console.log(texto)
console.log(arraytexto)