"use strict";
const names = ["John", "Paul", "Jones"];

const output = document.getElementById("target");

for (let name of names) {
  let child = document.createElement("li");
  child.textContent = name;
  output.appendChild(child);
}
