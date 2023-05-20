// function that return the number of vowels used in a string

{/* solution1 (js inbuilt) */ }

const vowels = (str) => {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

console.log(vowels('salaaa'));


{/* =======> solution2 <========= */ }

const vowels2 = (str) => {
    const vowelsCheck = ['a', 'e', 'i', 'o', 'u']

    let count = 0

    for (const char of str.toLowerCase()) {
        if (vowelsCheck.includes(char)) count++

    }
    return count
}
