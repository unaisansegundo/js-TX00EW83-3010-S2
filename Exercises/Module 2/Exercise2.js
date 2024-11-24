n_participants = +prompt("Number of participants: ");
output = [];
ordered_output = [];

for (let i = 0; i < n_participants; i++) {
  output.push(prompt(`Enter a participant's name ${i + 1}`));
}
output.sort();
for (let i = 0; i < n_participants; i++) {
  ordered_output += `<li>${output[i]}</li>`;
}
document.querySelector("#output").innerHTML = ordered_output;
