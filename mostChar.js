//  find most used character in a given string

const maxChar = (str) => {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for (const char of str) {
        // if (charMap[char]) {
        //     charMap[char] = charMap[char] + 1
        // } else {
        //     charMap[char] = 1
        // }

        // =========>  another way <=============
        charMap[char] = ++charMap[char] || 1
    }

    // for (const [key, value] of Object.entries(charMap)) {
    //     if (value > max) {
    //         max = value
    //         maxChar = key
    //     }
    // }

    {/*  <=========> another way  ( in object we can use key in object )<=============>  */ }

    for (const key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key]
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxChar('helllllllooo'));



