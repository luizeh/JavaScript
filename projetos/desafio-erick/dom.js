function calc() {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);

  let res = document.querySelector("#res");
  let answer = n1 * n2;
  res.innerHTML = `o resultado é ${answer}`;
}
