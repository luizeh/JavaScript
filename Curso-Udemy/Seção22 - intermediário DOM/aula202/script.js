const obj = document.querySelector("span");
const classes = obj.classList;
function adiciona() {
  //   console.log(classes.contains('vermelho'))
  classes.toggle('vermelho');
  classes.forEach(item=>console.log(item))
}

