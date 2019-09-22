// Write a function called findLongestSubstring,
// which accepts a string and returns the length
// of the longest substring with all distinct
// characters

// Test cases:
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7 
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

const findLongestSubstring = str => {
    // case of empty string
    if (str.length === 0) return 0;
    
    // position is left pointer that will increase
    // if we need to check for other substrings
    // start will increase if char is not in substr
    let start = 0;
    let position = 0;
    let subStr = '';
    let longestLength = 0;

    while (start < str.length) {
        // add char to substr if not already inside
        if (!subStr.includes(str[start])) {
            subStr += str[start];
            start++;
        } else {
            // compare lengths before moving onto new substr
            if (subStr.length > longestLength) longestLength = subStr.length;
            position++;
            start = position;
            subStr = '';
        }
    };
    // if we reach end of str, check if the current substr length
    // exceeds the prior possible values
    return subStr.length >= longestLength ? subStr.length : longestLength;
};

// Running Test Cases: 
console.log(findLongestSubstring('') === 0);
console.log(findLongestSubstring('rithmschool') === 7);
console.log(findLongestSubstring('thisisawesome') === 6);
console.log(findLongestSubstring('thecatinthehat') === 7);
console.log(findLongestSubstring('bbbbb') === 1);
console.log(findLongestSubstring('longestsubstring') === 8);
console.log(findLongestSubstring('thisishowwedoit') === 6);