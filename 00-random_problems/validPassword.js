// Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints:

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise.

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false

// Input: Dog
// Output: false

var validPassword = function(str) {
    var hasUpper = false;
    var hasLower = false;
    
    if (str.length < 8) {
        return false;
    };

    for (var i=0; i<str.length; i++) {
        if (str[i].toLowerCase() === str[i]) {
            hasLower = true;
        };
        if (str[i].toUpperCase() === str[i]) {
            hasUpper = true;
        };
    };

    return hasUpper && hasLower
};

console.log(validPassword('RexTheDog') === true);
console.log(validPassword('rexthedog') === false);
console.log(validPassword('REXTHEDOG') === false);
console.log(validPassword('Dog') === false);