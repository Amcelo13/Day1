const findDistance = (arr1, arr2, d) => {
        let ans =  0
        
    for (let i = 0; i < arr1.length; i++) {
            let count = 0
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) > d) {
                    count++;
            }

        }
        if(count == arr2.length) {
            ans++;
        }
    }
    return ans
}
let arr1 = [4, 5, 8]
let arr2 = [10, 9, 1, 8]
console.log(findDistance(arr1, arr2, 2));