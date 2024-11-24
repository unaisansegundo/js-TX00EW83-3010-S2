let output = "";
function concat(array) {
  for (n of array) output += n;
  return output;
}
array = ["Johnny", "DeeDee", "Joey", "Marky"];
document.querySelector("#output").textContent = concat(array);
