const int_1 = parseInt(prompt("Enter the first number:"))
const int_2 = parseInt(prompt("Enter the second number:"))
const int_3 = parseInt(prompt("Enter the third number:"))

document.querySelector("#sum").textContent = int_1 + int_2 + int_3;
document.querySelector("#product").textContent = int_1 * int_2 * int_3;
document.querySelector("#average").textContent = (int_1 + int_2 + int_3)/3;