const newnums = (nums) => {
    const n = nums.length;
    //array = [2,3,5]
    let newArray = []

    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = 0; j < nums.length; j++) {
                sum += Math.abs(nums[i]- nums[j])
        }
        newArray.push(sum)
    }
    return newArray 
}

let nums = [2, 3, 5]
console.log(newnums(nums))