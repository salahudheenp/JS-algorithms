
// reverse a string

function reverse(str) {
    let reversed = ''

    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed

    // }

    // =======better option is down ===========

    for (const char of str) {
        reversed = char + reversed
    }
    return reversed
}

// using js built in methods=====>

const reverse2 = (str) => {
    // const strArray = str.split('')
    // strArray.reverse()
    // return strArray.join('')

    // =======> use oneline in this code <=============

    return str.split('').reverse().join('')
}


console.log(reverse2('sala'));