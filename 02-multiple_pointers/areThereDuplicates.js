// Implement a function called areThereDuplicates 
// which accepts a variable number of arguments
// and checks whether there are any duplicates
// among the arguments passed in. You can solve this
// using the frequency counter pattern OR the multiple
// pointers pattern. 

// Restrictions:
// Time: O(N)
// Space: O(N)

// Bonus: 
// Time: O(n log n)
// Space: O(1)

// Test Cases: 
// areThereDuplicates(1,2,3) === false
// areThereDuplicates(1,2,2) === true
// areThereDuplicates('a','b','c','a') === true

const areThereDuplicates = (...rest) => {
    // Edge case: arr is too small to have dup vals
    if (rest.length < 2) return false;

    // Create pointers
    let leftIndex = 0;
    let rightIndex = 1;
    let sortedArr;

    // Sorts arguments differently based on
    // if each el is an int or str
    if (rest.every(el => Number.isInteger(el))) {
        sortedArr = rest.sort(function(a, b){return a - b});
    } else {
        sortedArr = rest.sort();
    };

    while (rightIndex < sortedArr.length) {
        // If els are not dups, move pointers
        if (sortedArr[leftIndex] !== sortedArr[rightIndex]) {
            leftIndex = rightIndex;
            rightIndex++;
        } else {
            return true;
        };
    };

    return false;
};

// a SET is an object with a collection of UNIQUE values
// Once duplicates are eliminated in the set, compare to original arr
// if it doesn't match, then there were duplicates
const areThereDuplicatesBonus = (...rest) => new Set(rest).size !== rest.length;

// Running Test Cases:
console.log(areThereDuplicates(1,2,3) === false);
console.log(areThereDuplicates(1,2,2) === true);
console.log(areThereDuplicates('a','b','c','a') === true);

console.log(areThereDuplicatesBonus(1,2,3) === false);
console.log(areThereDuplicatesBonus(1,2,2) === true);
console.log(areThereDuplicatesBonus('a','b','c','a') === true);