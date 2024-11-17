let element = document.querySelector("#output")
function Prime(n) {
    if (n < 0)
        return false
    let i = 2;
    while (i < n)
    {
        if (n % i === 0)
            return false;
        i++;
    }
    return true
}

let n = parseInt(prompt("Enter a number to check if it's prime: "))
if (Prime(n))
    element.textContent = `${n} is a prime number`
else
    element.textContent = `${n} is not a prime number`
