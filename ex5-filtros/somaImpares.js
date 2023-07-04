function somaImpares(arr) {
    let newArr = arr.filter((value) => {
        return value%2!=0
    }).reduce((sum, value) =>{
        return sum + value
    })

    return newArr
}

export default somaImpares

// console.log(somaImpares([2,5,6,8,11]))