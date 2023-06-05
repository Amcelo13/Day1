const prompt = require("prompt-sync")();
let num = parseInt(prompt("What is your Number:  "));

function checkPrime() {

    let flag = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // if (num % i == 0) {
        //     flag = false;
        //     break;
        // }
        flag = (num % i == 0) ? false  : flag
    }
    return flag
}
console.log(checkPrime());