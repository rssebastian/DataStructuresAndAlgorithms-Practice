// Write a recursive function called flatten which
// accepts an array of arrays and returns a new
// array with all values flattened

// Test Cases:
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatten = arr => {
    let newArr = [];
    
    arr.forEach(el => {
        if (!Array.isArray(el)) newArr.push(el);
        else newArr = newArr.concat(flatten(el));
    });
    
    return newArr;
};

// Pure Recursion method, no iteration w/ forEach
// const flatten = arr => {
//     if (arr.length === 0) return [];
//     let arrFlat = [];
//     if (!Array.isArray(arr[0])) {
//         arrFlat.push(arr[0]);
//         return arrFlat.concat(flatten(arr.slice(1)));
//     }
//     return flatten(arr[0]).concat(flatten(arr.slice(1)));
// }

// Running Test Cases:

// Function to check equality of test cases
const checkSol = (testArr, testSol) => {
    const possSol = flatten(testArr);
    for (let i=0; i<testSol.length; i++) {
        if (possSol[i] !== testSol[i]) {
            return false
        }
        return true
    };
};

// Hard code test cases here since we cannot use === on arrays
const testArr1 = [1, 2, 3, [4, 5] ];
const testSol1 = [1, 2, 3, 4, 5];

const testArr2 = [1, [2, [3, 4], [[5]]]];
const testSol2 = [1, 2, 3, 4, 5];

const testArr3 = [[1],[2],[3]];
const testSol3 = [1,2,3];

const testArr4 = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
const testSol4 = [1,2,3]

console.log(checkSol(testArr1, testSol1) === true);
console.log(checkSol(testArr2, testSol2) === true);
console.log(checkSol(testArr3, testSol3) === true);
console.log(checkSol(testArr4, testSol4) === true);