const frases = [
  "A disciplina vence a motivação nos dias difíceis.",
  "Quem melhora um pouco todo dia chega longe.",
  "O começo pode ser lento, mas ainda é progresso.",
  "Não espere estar pronto para começar.",
  "Errar faz parte do processo de aprender.",
  "A constância transforma esforço em resultado.",
  "Você não precisa fazer perfeito, precisa fazer.",
  "Cada tentativa te deixa menos iniciante.",
  "O progresso aparece para quem continua.",
  "Grandes resultados começam com pequenas ações.",
  "Foque no próximo passo, não na escada inteira.",
  "O difícil de hoje vira experiência amanhã.",
];

let indice = 0;

function gerarFrase() {
  let frase = document.getElementById("frase");

  frase.innerHTML = frases[indice];

  indice++;

  if (indice >= frases.length) {
    indice = 0;
  }
}