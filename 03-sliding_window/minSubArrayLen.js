// Write a function called minSubArrayLen which
// accepts two parameters - an array of positive integers
// and a positive integer. This function should return the minimal
// length of a contiguous subarray of which the sum is greater than
// or equal to the integer passed to the function. If there isn't one,
// return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

const minSubArrayLen = (arr, val) => {
    let sum = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    // increment start each pass
    while (start < arr.length) {
        // window not yet found, increase size of window to right
        if (sum < val && end < arr.length) {
            sum += arr[end];
            end++;
        // window has been found, decrease window from left
        // and see if still holds true
        } else if ( sum >= val) {
            minLen = Math.min(minLen, end-start);
            // removes the first el from subArraySum
            sum -= arr[start];
            start++
        // none of the elements add up to the val
        } else break;
    };

    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen([2,3,1,2,4,3], 7) === 2);
console.log(minSubArrayLen([2,1,6,5,4], 9) === 2);
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) === 1);
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) === 3);
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) === 5);
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11) === 2);
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) === 0);