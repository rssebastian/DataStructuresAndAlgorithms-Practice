// Write a function called stringifyNumbers which takes
// in an object and finds all of the values which are numbers
// and converts them to strings. Recursion would be a great 
// way to solve this!

const stringifyNumbers = originalObj => {
    const objKeys = Object.keys(originalObj);
    const newObj = {};
    objKeys.forEach(el => {
        if (typeof originalObj[el] === 'object' && !Array.isArray(originalObj[el])) {
            newObj[el] = stringifyNumbers(originalObj[el]);
        } else if (typeof originalObj[el] === 'number') {
            newObj[el] = originalObj[el].toString();
        } else newObj[el] = originalObj[el];
    });
    return newObj;
};

// Running Test Case:

let testObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

let testSol = {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
};

const checkSol = (obj1, obj2) => {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) return false;
    for (let i=0; i<obj1Keys.length; i++) {
        let testKey = obj1Keys[i];
        if (obj1Keys[testKey] !== obj2Keys[testKey]) return false;
    };
    return true;
};

console.log(checkSol(testObj, testSol));