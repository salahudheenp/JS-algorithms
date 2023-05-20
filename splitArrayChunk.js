// give an array and chunk size , divide the array into many sub arrays


const chunk = (array, size) => {
    const result = []
    let index = 0
    while (index < array.length) {
        result.push(array.slice(index, index + size))
        index += size
    }
    return result
}


console.log(chunk([1, 3, 4, 5, 6, 7, 3, 4], 3));