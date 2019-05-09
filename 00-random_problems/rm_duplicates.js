// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

const rmDuplicates = arr => {
    const numTracker = [];
    arr.forEach(el => {
        if (!numTracker.includes(el)) numTracker.push(el);
    });
    return numTracker;
};

const arrChecker = (arr, testCase) => {
    arr = rmDuplicates(arr);
    for (let i=0; i<testCase.length; i++) {
        if (arr[i] !== testCase[i]) {
            return false;
        };
    };
    return true;
};

console.log(arrChecker([1,2,2,3],[1,2,3]));
console.log(arrChecker([4,5,4,4,7,5],[4,5,7]));
console.log(arrChecker([1,2,3,5],[1,2,3,5]));