
function multiplicaArray(arr){
    let result = 1;
    
    arr.forEach(value => {
        result *= value         
    });
    return result
}

export default multiplicaArray;