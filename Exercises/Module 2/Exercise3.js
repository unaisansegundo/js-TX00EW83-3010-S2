let dog_names = [];
for (let i = 0; i < 6; i++) dog_names.push(prompt(`Enter dog name ${i + 1}`));

dog_names.sort().reverse();
output = "";
for (const dog_name of dog_names) output += `<li>${dog_name}</li>`;
document.querySelector("#output").innerHTML = output;
