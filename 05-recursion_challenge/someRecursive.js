// Write a recursive function called someRecursive
// which accepts an array and a callback. The function
// returns true if a single value in the array returns
// true when passed to the callback. Otherwise it returns false

// Test Cases:
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const someRecursive = (arr, cbf) => {
    if (arr.length === 0) return false
    
    const checkCbf = (callBack, el) => {
        if (callBack(el)) return true
        return false
    }
    
    if (!checkCbf(cbf, arr[0])) return someRecursive(arr.slice(1), cbf)
    
    else return true
};

// Running Test Cases:
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd) === true);
console.log(someRecursive([4,6,8,9], isOdd) === true);
console.log(someRecursive([4,6,8], isOdd) === false);
console.log(someRecursive([4,6,8], val => val > 10) === false);