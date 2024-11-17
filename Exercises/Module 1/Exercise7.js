let n_dice = prompt("How many dice would you like to roll? ")
let sum_dice = 0
for (let i = 0; i < n_dice; i++)
    sum_dice = sum_dice + Math.floor(Math.random() * 5) + 1;
console.log(`Total for ${n_dice} dice: ${sum_dice}`)