// check palindrome


const palindrome = (str) => {
    const reversed = str.split('').reverse().join('')

    if (str === reversed) {
        return true
    }
    return false

    // ====> using this also for oneline ========>
    // return str === reversed

}

console.log(palindrome('malayalam'));