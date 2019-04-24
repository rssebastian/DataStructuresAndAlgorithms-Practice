// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts
// the unique values in the array. There
// can be negative numbers in the array,
// but it will always be sorted

// countUniqueValues([1,1,1,1,1,2]) === 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7
// countUniqueValues([]) === 0
// countUniqueValues([-2, -1, -1, 0, 1]) === 4

// Without Pointer

// const countUniqueValues = arr => {
//     let uniqueVals = 0;
//     const numTracker = {};
//     for (let i=0; i<arr.length; i++) {
//         if (!numTracker[arr[i]]) {
//             numTracker[arr[i]] = true;
//             uniqueVals++;
//         }
//     }
//     return uniqueVals;
// };

// With Pointer
const countUniqueValues = arr => {
    let leftIndex = 0;
    let rightIndex = 1;
    if (!arr.length) {
        return 0;
    }
    while (rightIndex < arr.length) {
        if (arr[leftIndex] !== arr[rightIndex]) {
            leftIndex++;
            arr[leftIndex] = arr[rightIndex];
        } else {
            rightIndex++;
        }
    };
    return leftIndex + 1;
};

console.log(countUniqueValues([1,1,1,1,1,2]) === 2);
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7);
console.log(countUniqueValues([]) === 0);
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4);