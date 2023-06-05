const prompt = require("prompt-sync")();

function checkPrime(num) {
    
    let flag = true
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // if (num % i == 0) {
        //     return false;  
        // }
        flag = (num % i == 0) ? false  : flag
    }
    return flag;
}
function nPrime (nPrimes, startAt){
        let arr=[];
        let i = startAt + 1;
        while(arr.length <= nPrimes){
            if(checkPrime(i) == true){
                arr.push(i);
            }
            i++;
        }
        return arr;
}
console.log(nPrime(3,7))
