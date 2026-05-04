// Variável global para armazenar hora customizada
let horaCustomizada = null;
let intervaloAtualizar = null;

function formatarHora(data) {
  let horas = String(data.getHours()).padStart(2, "0");
  let minutos = String(data.getMinutes()).padStart(2, "0");
  let segundos = String(data.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

function obterPeriodo(hora) {
  if (hora >= 0 && hora < 12) return "manhã";
  if (hora >= 12 && hora < 18) return "tarde";
  return "noite";
}

function obterDataComHora(hora) {
  const data = new Date();
  data.setHours(hora, 0, 0);
  return data;
}

function atualizar() {
  const msg = document.getElementById("msg");
  const horarioSpan = document.getElementById("horario-exato");
  const saudacaoSpan = document.getElementById("saudacao");
  const img = document.getElementById("imagem");

  let data;
  if (horaCustomizada !== null) {
    data = obterDataComHora(horaCustomizada);
  } else {
    data = new Date();
  }

  const hora = data.getHours();
  const periodo = obterPeriodo(hora);
  const horaFormatada = formatarHora(data);

  // Atualizar hora exata
  horarioSpan.textContent = horaFormatada;

  // Mensagens de saudação
  const saudacoes = {
    manhã: "🌅 Bom Dia!",
    tarde: "☀️ Boa Tarde!",
    noite: "🌙 Boa Noite!",
  };
  saudacaoSpan.textContent = saudacoes[periodo];

  // Trocar imagem e fundo
  if (periodo === "manhã") {
    img.src =
      "https://images.pexels.com/photos/5392635/pexels-photo-5392635.jpeg";
    document.body.style.background =
      "linear-gradient(135deg, #ffd89b 0%, #ff8c69 100%)";
  } else if (periodo === "tarde") {
    img.src =
      "https://images.pexels.com/photos/8295269/pexels-photo-8295269.jpeg";
    document.body.style.background =
      "linear-gradient(135deg, #ff9a56 0%, #ff6b6b 100%)";
  } else {
    img.src =
      "https://i.redd.it/i-made-a-custom-hawaii-part-ii-cover-backround-without-the-v0-f70xwir84qcf1.png?width=1280&format=png&auto=webp&s=771cc3749f712306835d1190ad47f0d2c62890c2";
    document.body.style.background =
      "linear-gradient(135deg, #0f3460 0%, #16213e 100%)";
  }
}

function aplicarHora() {
  const input = document.getElementById("hora-input");
  const valor = input.value;

  if (valor) {
    const [horas] = valor.split(":");
    horaCustomizada = parseInt(horas);
    atualizar();
    console.log(`Hora alterada para: ${horaCustomizada}:00`);
  }
}

function redefinirHora() {
  horaCustomizada = null;
  document.getElementById("hora-input").value = "";
  atualizar();
  console.log("Hora redefinida para real");
}

function carregar() {
  atualizar();

  // Atualizar a cada 1 segundo
  intervaloAtualizar = setInterval(atualizar, 1000);

  // Configurar listeners dos botões
  document.getElementById("btn-aplicar").addEventListener("click", aplicarHora);
  document
    .getElementById("btn-redefinir")
    .addEventListener("click", redefinirHora);

  // Permitir Enter no input
  document.getElementById("hora-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") aplicarHora();
  });
}
