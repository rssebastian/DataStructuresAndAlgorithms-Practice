// Write a function called averagePair. 
// Given a sorted array of integers and a target
// average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Test Cases:
// averagePair([1,2,3],2.5) === true
// averagePair([1,3,3,5,6,7,10,12,19],8) === true

const averagePair = (arr, avg) => {
    // Edge case: array doesn't have enough elements
    if (arr.length < 2) return false;
    
    // Create pointers on the beginning and end of array
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    // leftIndex and rightIndex should never be the same
    // they would refer to the same element
    while (leftIndex !== rightIndex) {
        // Recalculate average each iteration
        let tempAvg = (arr[leftIndex] + arr[rightIndex]) / 2;
        if (tempAvg === avg) return true;
        // If tempAvg is too big, decrementing rightIndex
        // should lower tempAvg
        else if (tempAvg > avg) rightIndex--; 
        // If tempAvg is too small, incrementing leftIndex
        // should increase tempAvg
        else leftIndex++;
    };

    return false;
};

// Running Test Cases:
console.log(averagePair([1,2,3],2.5) === true);
console.log(averagePair([1,3,3,5,6,7,10,12,19],8) === true);
console.log(averagePair([1,3,3,5,6,7,10,12,19], 22) === false);
