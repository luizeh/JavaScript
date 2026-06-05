const form = document.formulario;
const resultado = document.getElementById("resultado");
const historico = document.getElementById("historico");

const inputs = form.querySelectorAll("input");

const eventosInput = [
  "input",  // valor mudou enquanto digita
  "change", // valor mudou e saiu do campo
  "cut",    // texto foi recortado
  "copy",   // texto foi copiado
  "paste",  // texto foi colado
  "select", // texto foi selecionado
];

const eventosForm = [
  "submit", // formulário foi enviado
  "reset",  // formulário foi resetado
];

function mostrarEvento(evento) {
  evento.preventDefault();

  const elemento = evento.target;

  resultado.innerHTML = `
    <strong>Elemento:</strong> ${elemento.name || "formulário"}<br>
    <strong>Tipo do evento:</strong> ${evento.type}<br>
    <strong>Valor:</strong> ${elemento.value || "sem valor"}
  `;

  const item = document.createElement("li");
  item.textContent = `${elemento.name || "formulário"} | evento: ${evento.type}`;

  historico.prepend(item);
}

inputs.forEach(function(input) {
  eventosInput.forEach(function(evento) {
    input.addEventListener(evento, mostrarEvento);
  });
});

eventosForm.forEach(function(evento) {
  form.addEventListener(evento, mostrarEvento);
});