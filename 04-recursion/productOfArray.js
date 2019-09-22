// Write a function called productOfArray
// which takes in an array of numbers and
// returns the product of them all

// Test Cases:
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = arr => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.splice(1));
}

// Running Test Cases:
console.log(productOfArray([1,2,3]) === 6);
console.log(productOfArray([1,2,3,10]) === 60);