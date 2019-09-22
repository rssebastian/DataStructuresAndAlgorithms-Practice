// Write a recursive function called reverse
// which accepts a string and returns a new string
// in reverse

// Test Cases:
// reverse('abcdefg') // 'gfedcba'
// reverse('applesandoranges') // 'segnarodnaselppa'

const reverse = str => {
    if (str.length === 0) return
    if (str.length - 1 === 0) return str
    return str[str.length - 1] + reverse(str.substr(0, str.length-1))
}

// Running Test Cases:
console.log(reverse('abcdefg') === 'gfedcba')
console.log(reverse('applesandoranges') === 'segnarodnaselppa')

