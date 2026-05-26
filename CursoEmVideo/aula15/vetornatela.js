let enzom =  [5, 13, 3, 4, 8, 6, 7, 14, 18, 19, 20, 21]

enzom.sort((a, b) => a - b) 

console.log(enzom)
console.log(`o enzom tem ${enzom.length} posições`)

// for (let pos = 0; pos < enzom.length; pos++) {
//     console.log(`a posição ${pos} tem o valor ${enzom[pos]}`)
// }

for(let pos in enzom){
     console.log(`a posição ${pos} tem o valor ${enzom[pos]}`)
}