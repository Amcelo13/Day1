function searchMatrix(matrix, target) {
    const m = matrix.length;     //m = 3
    const n = matrix[0].length;   //n = 4
    let start = 0;      //start = 0
    let end = m * n - 1;    //end = 11
     
    while (start <= end) {
        const mid = Math.floor((start -(start-end)/2));    //5

        /*Overall, these calculations determine the row and column indices of an element in a two-dimensional array,
         given its index mid in a flattened version of the array.*/
         
        const row = Math.floor(mid / n);  //5/4 = 1
        const col = mid % n;           // 5 % 4 = 1
        
        if (matrix[row][col] === target) {
            return true;
        } 
        else if (matrix[row][col] < target) {
            start = mid + 1;
        } 
        else {   //matrix[row][col] > target
            end = mid - 1;
        }
    }
    
    return false;
}

let matrix = [[1,3,5,7],
              [10,11,16,20],
              [23,30,34,60]]

    console.log(searchMatrix(matrix, 61));
