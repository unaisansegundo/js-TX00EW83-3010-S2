numbers = [];
let n = prompt("Enter a number: ");
while (n != 0) {
  numbers.push(n);
  n = prompt("Enter a number: ");
}
numbers.sort().reverse();
console.log(numbers);
