//  take two string and check the strings are anagrams of each other

const charMap = (str) => {
    const charmap = {}
    str = str.toLowerCase().replace(/[\w]/g, '')
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1
    }
    return charmap
}

const anagrams = (str1, str2) => {
    const charMapA = charMap(str1)
    const charMapB = charMap(str2)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) return false
    }
    return true
}


{/* ==========Another way(easy way)   */ }
const cleanStr = (str) => {
    return str.toLowerCase().replace(/[\w]/g, '').split('').sort().join('')
}

const anagrams2 = (str1, str2) => {
    return cleanStr(str1) === cleanStr(str2)
}

console.log(anagrams2('hi iam ', 'po mone'));