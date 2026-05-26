let enzinx = [5, 8, 2, 9, 3];
enzinx.push(1);
enzinx.sort();
console.log(`Esse é o enzinx!: ${enzinx}`);
console.log(`o enzinx tem ${enzinx.length} posições`);
console.log(`o primeiro valor do enzinx é ${enzinx[0]}`);
console.log(`o último valor do enzinx é ${enzinx[5]}`);
let pos = enzinx.indexOf(8);
if (pos == -1) {
  console.log("O valor não foi encontrado!");
} else {
  console.log(`O valor 8 está na posição ${pos}`);
}
