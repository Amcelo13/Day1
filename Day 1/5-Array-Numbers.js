const { CLIENT_RENEG_LIMIT } = require("tls");

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the length of the array "));
const numbers = ()=>{
    let arr1 = [];

    for (let i=0; i<num;i++){
        let inde_num = parseInt(prompt("Enter the value:"))
        arr1.push(inde_num);
    }
   const result =  arr1.filter(positive => positive > 0);
   console.log(result)
}
numbers()