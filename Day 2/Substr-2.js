function findSubstrings(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[i].includes(words[j])) {
                result.push(words[j]);
                break;
            }
        }
    }
    return result;
}


let words = ["mass", "as", "hero", "superhero"]
console.log(findSubstrings(words))

 