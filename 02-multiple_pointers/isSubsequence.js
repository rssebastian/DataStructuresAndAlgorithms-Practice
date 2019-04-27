// Write a function called isSubsequence which takes
// in two strings and checks whether the characters 
// in the first string from a subsequence of the characters
// in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere
// in the second string, without their order changing

// Test Cases:
// isSubsequence('hello', 'hello world') === true
// isSubsequence('sing', 'sting') === true 
// isSubsequence('abc', 'abracadabra') === true
// isSubsequence('abc', 'acb') === false

// v1 - First Attempt
// const isSubsequence = (str1, str2) => {
//     // Create mutable clone of str2
//     let str2clone = str2;

//     for (let i=0; i<str1.length; i++) {
//         // Create pointer for str1
//         let str1Pointer = str1[i];
        
//         // Check if the pointer exists in the str2 clone
//         let charAt = str2clone.indexOf(str1Pointer);
        
//         // If pointer doesn't exist in clone, return false
//         if (charAt === -1) {
//             return false
//         } else {
            
//             // Crop the str2clone so you ensure each letter is in order
//             str2clone = str2clone.slice(charAt);
//         };
//     };

//     // If each char in str1 passes, it works
//     return true;
// };

// v2 - iteration
const isSubsequence = (str1, str2) => {
    // Create pointers for each string
    let str1Pointer = 0;
    let str2Pointer = 0;

    while (str2Pointer < str2.length) {
        // If str1's char matches current char on str2,
        // move str1's pointer
        if (str2[str2Pointer] === str1[str1Pointer]) str1Pointer++;
        
        // If str1 has been fully iterated through, function true
        if (str1Pointer === str1.length) return true;
        
        // Move str2Pointer forward
        str2Pointer++;
    };
    return false;
};

console.log(isSubsequence('hello', 'hello world') === true);
console.log(isSubsequence('sing', 'sting') === true );
console.log(isSubsequence('abc', 'abracadabra') === true);
console.log(isSubsequence('abc', 'acb') === false);