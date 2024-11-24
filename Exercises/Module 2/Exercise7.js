let dice_size = prompt("Input the size of the dice: ");

function rollDice() {
  return Math.floor(Math.random() * dice_size) + 1;
}
let n;
output = document.querySelector("#output");
while (n != dice_size) {
  n = rollDice();
  output.innerHTML += `<li>${n}</li>`;
}
