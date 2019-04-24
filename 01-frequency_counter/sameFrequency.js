// Given two positive integers, find out 
// if the two numbers have the same frequency
// of digits. Your solution MUST have the following
// time complexities. Time: O(N)

// Test Cases:
// sameFrequency(182,281) === true
// sameFrequency(34,14) === false
// sameFrequency(3589578, 5879385) === true
// sameFrequency(22,222) === false

const sameFrequency = (int1, int2) => {
    // Convert integers to strings so we can run other methods on them
    const intStr1 = int1.toString();
    const intStr2 = int2.toString();
    
    // Create obj to track integer frequency
    const intTracker = {};

    // Fill intTracker with the frequency per integer
    intStr1.split('').forEach(char => {
        !intTracker[char] ? intTracker[char] = 1 : intTracker[char]++
    });

    // Check if each integer is used the same amount of times
    // in int2 compared using the intTracker from int1
    for (let i=0; i<intStr2.length; i++) {
        if (intTracker[intStr2[i]]) {
            intTracker[intStr2[i]]--;
        } else {
            return false
        };
    };
    return true;
};

// Running test cases:
console.log(sameFrequency(182,281) === true);
console.log(sameFrequency(34,14) === false);
console.log(sameFrequency(3589578, 5879385) === true);
console.log(sameFrequency(22,222) === false);