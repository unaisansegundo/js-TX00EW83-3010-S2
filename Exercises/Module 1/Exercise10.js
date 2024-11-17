let element = document.querySelector("#output")
amount = +prompt("How many dice do you want to roll?")
sum = +prompt("Sum of all dice")

n = 10000000
count = 0
for (let i = 0; i < n; i++) {
    let total = 0
    for (let x = 0; x < amount; x++)
        total += Math.floor(Math.random() * 6) + 1
    if (total === sum)
        count++;
}

element.textContent = `Probability to get sum ${sum} with ${amount} dice is ${(100 * count / n).toFixed(2)}%.`