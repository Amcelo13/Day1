        //Palindrome NUmber in Javascript
const prompt = require("prompt-sync")();



let num = parseInt(prompt("What is your Number? "));

let reverse = 0
let temp = num

while (num > 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);


}
(reverse === temp) ? console.log("It is Palindrome") : console.log("It is not Palindrome");





