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

const isSubsequence = (str1, str2) => {
    // Create mutable clone of str2
    let str2clone = str2;

    for (let i=0; i<str1.length; i++) {
        // Create pointer for str1
        let str1Pointer = str1[i];
        
        // Check if the pointer exists in the str2 clone
        let charAt = str2clone.indexOf(str1Pointer);
        
        // If pointer doesn't exist in clone, return false
        if (charAt === -1) {
            return false
        } else {
            
            // Crop the str2clone so you ensure each letter is in order
            str2clone = str2clone.slice(charAt);
        };
    };

    // If each char in str1 passes, it works
    return true;
};

console.log(isSubsequence('hello', 'hello world') === true);
console.log(isSubsequence('sing', 'sting') === true );
console.log(isSubsequence('abc', 'abracadabra') === true);
console.log(isSubsequence('abc', 'acb') === false);