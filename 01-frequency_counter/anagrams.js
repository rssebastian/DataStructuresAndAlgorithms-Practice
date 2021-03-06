// Given two strings, write a function
// to determine if the second string is
// an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman

// validAnagram('', '') === true
// validAnagram('aaz', 'zza') === false
// validAnagram('anagram', 'nagaram') === true
// validAnagram('rat', 'car') === false
// validAnagram('awesome', 'awesom') === false
// validAnagram('qwerty','qeywrt') === true
// validAnagram('texttwisttime', 'timetwisttext') === true

const validAnagram = (str1, str2) => {
    // Check if both strings are the same length
    if (str1.length !== str2.length) {
        return false;
    };

    // Create counters to track each letter used
    const letterCounter = {};

    // Go through each char in str and increment counter for each use
    str1.toLowerCase().split('').forEach(char => {
        letterCounter[char] = (letterCounter[char] || 0) + 1;
    });

    for (let i=0; i<str2.length; i++) {
        let letter = str2[i];
        
        if (!letterCounter[letter]) {
            return false;
        } else {
            letterCounter[letter]--;
        }
    };

    return true;
};

// Run test cases:
console.log(validAnagram('', '') === true);
console.log(validAnagram('aaz', 'zza') === false);
console.log(validAnagram('anagram', 'nagaram') === true);
console.log(validAnagram('rat', 'car') === false);
console.log(validAnagram('awesome', 'awesom') === false);
console.log(validAnagram('qwerty','qeywrt') === true);
console.log(validAnagram('texttwisttime', 'timetwisttext') === true);