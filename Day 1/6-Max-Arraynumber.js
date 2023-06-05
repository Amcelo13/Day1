const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the length of the array "));

let arr = []

for (let i = 0; i < num; i++) {
  let inde_num = parseInt(prompt("Enter the value:"))
  arr.push(inde_num);
}

let maxi = Number.MIN_SAFE_INTEGER
for (let i = 0; i < arr.length; i++) {
  // if(arr[i] > maxi){
  //     maxi = arr[i]
  // }

  //Using conditional
  maxi = (arr[i] > maxi) ? arr[i] : maxi
}
console.log(maxi)
