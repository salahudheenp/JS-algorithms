//  function accept a string and capitalize the first letter of each words in the string

const capitalize = (str) => {
    {/* ========= capitalize all letters  ========== */ }
    // return str.toUpperCase()

    {/* ========= capitalize all words first letter ========== */ }

    const words = str.split(' ')
    // const result = []

    // for (const word of words) {
    //     result.push(word[0].toUpperCase() + word.slice(1))
    // }
    // return result.join(' ')

    {/* ========= using map  ========== */ }
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

}

console.log(capitalize('hi i am a developer'));