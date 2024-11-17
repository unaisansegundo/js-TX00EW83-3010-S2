let element = document.querySelector("#output")
if (confirm("Should I calculate the square root?")) {
    let input = +prompt("Enter a number to calculate the square root of: ");
    if (input < 0) {
        element.textContent = "Can't take a square root of a negative number";
    } else {
        element.textContent = Math.sqrt(input);
    }
} else {
    element.textContent = "The square root is not calculated."
}