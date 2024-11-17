const num = Math.floor(Math.random() * 4);
const name = prompt("Enter your name: ");
const element = document.querySelector('#output');
if (num === 0) element.innerHTML = `${name} , you are Gryffindor`
else if(num === 1) element.innerHTML = `${name} , you are Slytherin`
else if(num === 2) element.innerHTML = `${name} , you are Hufflepuff`
else if(num === 3) element.innerHTML = `${name} , you are Ravenclaw`