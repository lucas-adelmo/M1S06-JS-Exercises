function filtrarPares(arr) {
    let arrFiltered =  arr.filter((value) =>{
        return value%2==0
    })

    return arrFiltered
}

export default filtrarPares

// console.log(filtrarPares([2,5,6,8,11]))