// utilizando reduce na pratica

const lista = ["jamilton", "pagotti", "pedro silva"];

let listahtml = lista.reduce(

  (acumulado,atual) => (acumulado += `<li>${atual}</li>, ""`),
);
console.log(listahtml);
