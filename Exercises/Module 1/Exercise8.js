let element = document.querySelector("#output")
let start = parseInt(prompt("Start of the interval"))
let end = parseInt(prompt("End of the interval")) + 1
const leapYear = (year) => (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0)

for (let i = start; i <= end; i++)
    if (leapYear(i)) {
        let li = document.createElement("li")
        li.textContent = i.toString()
        element.appendChild(li)
    }

