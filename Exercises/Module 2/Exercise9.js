function even(array) {
  return array.filter((n) => !(n % 2));
}

let array = [6, 5, 37, 2, 67, 8, 9, 3, 4, 1];
console.log(array);
console.log(even(array));
