numbers = [];
let n = prompt("Enter a number: ");
while (!numbers.includes(n)) {
  numbers.push(n);
  n = prompt("Enter another number: ");
}

console.log(`The number ${n} has already been given`);
numbers.sort();
console.log(numbers);
