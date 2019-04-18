// Write a function called same, which accepts two arrays
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) === true
// same([1, 2, 3], [1, 9]) === false
// same([1, 2, 3], [4, 4, 1]) === false

const same = (arr1, arr2) => {
    // If the lengths don't match, immediately return false
    if (arr1.length !== arr2.length) {
        return false
    }

    // Create objects to keep track of element frequency
    const letterTracker1 = {};
    const letterTracker2 = {};

    // Increment counter for each element in both objects
    arr1.forEach(el => {
        letterTracker1[el] = (letterTracker1[el] || 0) + 1;
    });

    arr2.forEach(el => {
        letterTracker2[el] = (letterTracker2[el] || 0) + 1;
    });

    for (let key in letterTracker1) {
        // Check if squared element in letterTracker1 is in letterTracker2
        if (!letterTracker2[Math.pow(key, 2)]) {
            return false;
        };
        
        // Check if frequency matches in both objects
        if (letterTracker2[Math.pow(key, 2)] !== letterTracker1[key]) {
            return false
        };
    };

    // If all cases pass,
    return true;
};

// Test Cases:
console.log(same([1, 2, 3], [4, 1, 9]) === true);
console.log(same([1, 2, 3], [1, 9]) === false);
console.log(same([1, 2, 3], [4, 4, 1]) === false);

