// Desafio rápido

const carros = [
{nome: "Gol", marca: "volkswagem"},
{nome: "iX35", marca: "hyundai"},
{nome: "Santa Fé", marca: "hyundai"},
{nome: "Polo", marca: "volkswagem"},
]

const carrosHyundaiFiltro = carros.filter(carros => carros.marca == "hyundai")
console.log(carrosHyundaiFiltro)