// Write a recursive function called fib which accepts
// a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole 
// numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and where
// every number thereafter is equal to the sum of the previous two numbers

// Test Cases:
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = n => {
    if (n === 1) {
        return 1;
    } else if (n <= 0) {
        return 0;
    }
    return fib(n-2) + fib(n-1);
};

// Running Test Cases:
console.log(fib(4) === 3);
console.log(fib(10) === 55);
console.log(fib(28) === 317811);
console.log(fib(35) === 9227465);