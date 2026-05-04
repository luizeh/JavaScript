function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    var mensagem = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.src = "imgs/foto-bebe-m.jpg";
      } else if (idade < 18) {
        //Jovem
        img.src = "imgs/foto-jovem-m.jpg";
      } else if (idade < 50) {
        //Adulto
        img.src = "imgs/foto-adulto-m.jpg";
      } else if (idade < 70) {
        //Idoso
        img.src = "imgs/foto-idoso-m.jpg";
      } else if (idade < 100) {
        //Velho
        img.src = "imgs/foto-velho-m.jpg";
      } else {
        //Morto
        img.src = "imgs/morto.jpg";
        mensagem = "Detectamos um homem MORTO.";
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.src = "imgs/foto-bebe-f.jpg";
      } else if (idade < 18) {
        //Jovem
        img.src = "imgs/foto-jovem-f.jpg";
      } else if (idade < 50) {
        //Adulto
        img.src = "imgs/foto-adulto-f.jpg";
      } else if (idade < 70) {
        //Idoso
        img.src = "imgs/foto-idoso-f.jpg";
      } else if (idade < 100) {
        //Velho
        img.src = "imgs/foto-velho-f.jpg";
      } else {
        //Morto
        img.src = "imgs/morto.jpg";
        mensagem = "Detectamos uma mulher MORTA.";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = mensagem || `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
