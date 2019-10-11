// Write a recursive function called capitalizeFirst
// Given an array of strings, capitalize the first letter
// of each string in the array

// Test Case: 
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = arr => {
    let capitalizedArr = [];
    
    if (arr.length === 0) return [];
    
    const capitalizeStr = str => {
      return [str[0].toUpperCase() + str.substr(1)];
    };
    capitalizedArr = capitalizedArr.concat(capitalizeStr(arr[0]));
  
    return capitalizedArr.concat(capitalizeFirst(arr.slice(1)));
}

// Running Test Case

// Function to check equality of test cases
const checkSol = (testArr, testSol) => {
    const possSol = capitalizeFirst(testArr);
    for (let i=0; i<testSol.length; i++) {
        if (possSol[i] !== testSol[i]) {
            return false
        }
        return true
    };
};

console.log(checkSol(['car','taco','banana'], ['Car','Taco','Banana']));
