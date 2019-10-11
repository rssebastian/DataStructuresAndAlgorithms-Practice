// Write a function called collectStrings which accepts
// an object and returns an array of all the values
// in the object that have a typeof string.

const collectStrings = obj => {
    let strArr = [];
    const checkStr = obj => {
      for (let key in obj) {
        if (typeof obj[key] === 'string') {
          strArr.push(obj[key])
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          checkStr(obj[key])
        }
      };
      
      return strArr;
    };
    return checkStr(obj);
  };
  
// Running Test Cases:  

const testObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const testSol = ['foo', 'bar', 'baz'];

const checkSol = (testObj, testSol) => {
    const possSol = collectStrings(testObj);
    for (let i=0; i<testSol.length; i++) {
        if (possSol[i] !== testSol[i]) {
            return false
        }
        return true
    };
};

console.log(checkSol(testObj, testSol));