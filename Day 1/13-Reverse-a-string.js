function reverse(string){ 

    let str1 = ""

for (let i = string.length - 1; i >= 0; i--) {
    str1 = str1 + string[i]
}
return str1
}
console.log(reverse("Chetan"))