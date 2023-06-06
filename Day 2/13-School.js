function photoMismatch(heights) {

    const expected = [...heights].sort((a, b) => a - b);
    
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
}

const heights = [1, 1, 4, 2, 1, 3];
console.log(photoMismatch(heights));
