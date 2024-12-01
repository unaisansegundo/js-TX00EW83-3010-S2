"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

const output = document.getElementById("target");
for (let { name, id } of students) {
  let child = document.createElement("option");
  child.textContent = name;
  child.value = id;
  output.appendChild(child);
}
