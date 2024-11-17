let year = prompt("Enter a year:")
let element = document.querySelector("#output")
if ((year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0))
    element.textContent = `${year} is a leap year`
else
    element.textContent = `${year} isn't a leap year`