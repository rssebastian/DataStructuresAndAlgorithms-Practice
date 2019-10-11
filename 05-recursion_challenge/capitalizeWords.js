// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array
// containing each word capitalized.

const capitalizeWords = arr => {
    if (arr.length === 0) return [];
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
};

// Running Test Cases:

let testArr = ['i', 'am', 'learning', 'recursion'];
let testSol = ['I', 'AM', 'LEARNING', 'RECURSION'];

const checkSol = (testArr, testSol) => {
    const possSol = capitalizeWords(testArr);
    for (let i=0; i<testSol.length; i++) {
        if (possSol[i] !== testSol[i]) {
            return false
        }
        return true
    };
};

console.log(checkSol(testArr, testSol));