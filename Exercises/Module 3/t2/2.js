const output = document.getElementById("target");
const one = document.createElement("li");
const two = document.createElement("li");
const three = document.createElement("li");

one.textContent = "First item";
two.textContent = "Second item";
three.textContent = "Third item";

two.classList.add("my-item");

output.appendChild(one);
output.appendChild(two);
output.appendChild(three);
