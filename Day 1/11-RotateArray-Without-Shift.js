function rotate(arr){
    if(arr.length <=1){
        return arr
    }
    
    let first_ele = arr[0]
    for(let i = 0; i < arr.length - 1; i++){
            arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = first_ele
    return arr
}

let array1 = [1,2,3,4,5,6,7,8,9,10]
console.log(rotate(array1))


