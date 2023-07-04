
function somaArray(arr) {
    let sum = arr.reduce((sum,value) => {
        return sum + value
    }, 0)

    return sum
}

export default somaArray