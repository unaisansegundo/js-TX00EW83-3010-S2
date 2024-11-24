function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
let n;
output = document.querySelector("#output");
while (n != 6) {
  n = rollDice();
  output.innerHTML += `<li>${n}</li>`;
}
