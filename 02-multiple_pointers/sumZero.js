// Write a function called sumZero which accepts
// a sorted array of integers. The functions
// should find the first pair where the sum
// is 0. Return an array that includes 
// both values that sum to zero or undefined if a 
// pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) === [-3,3];
// sumZero([-2,0,1,3]) === undefined;
// sumZero([1,2,3]) === undefined;

const sumZero = arr => {
    // Create a pointer at the beginning and end of the array
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex) {
        let elSum = arr[leftIndex] + arr[rightIndex];
        if (elSum === 0) {
            return [arr[leftIndex], arr[rightIndex]];
        // Left index should increase if sum is negative
        } else if (elSum < 0) {
            leftIndex++;
        // Right index should decrease if sum is positive
        } else {
            rightIndex--;
        };
    };
};

// Function to check equality of test cases
const checkSol = testArr => {
    const possSol = sumZero(testArr);
    for (let i=0; i<testSol.length; i++) {
        if (possSol[i] !== testSol[i]) {
            return false
        }
        return true
    };
};

// Hard code test cases here since we cannot use === on arrays
const testArr = [-3,-2,-1,0,1,2,3];
const testSol = [-3, 3];

// Change true to be undefined if you want to check custom test cases 
console.log(checkSol(testArr) === true);

console.log(sumZero([-2,0,1,3]) === undefined);
console.log(sumZero([1,2,3]) === undefined);