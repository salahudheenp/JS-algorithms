//  reverse a integer


const reverseInt = (n) => {
    const reversed = n.toString().split('').reverse().join('')
    // return reversed

    // =====> if a negative number <======== 
    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInt(-1));