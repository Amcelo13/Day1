const prompt = require("prompt-sync")();

function checkPrime(num) {
    let flag = true
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        flag = (num % i == 0) ? false  : flag
    }

    return flag;

}
    let arr =[]
    let i = 2;      //Starting from 2
while(arr.length <= 99){
        if(checkPrime(i) == true){
            arr.push(i)
        }
        i++;
}
console.log("First 100 prime Numbers are : "+ arr)