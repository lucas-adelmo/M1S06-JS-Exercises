const arr = [
    {
        name: "Lucas",
        grade1: 0,
        grade2: 10
    },
    {
        name: "Naruto",
        grade1: 5,
        grade2: 8
    },
    {
        name: "Luffy",
        grade1: 1,
        grade2: 10
    }
]

function average(arr) {
    let newArray = arr.map((obj) => {
        return {
            name: obj.name,
            averageGrades: (obj.grade1 + obj.grade2)/2
        }
    })

    let gradesSorted = newArray.map(obj => obj.averageGrades)
        .sort(function(a, b){return b-a})
    
    let arrSorted = []
    
    
    for (let j=0; j<gradesSorted.length; j++){
        for (let i=0; i<newArray.length; i++){
            if(newArray[i].averageGrades == gradesSorted[j]){
                arrSorted.push(newArray[i])
            }

        }
    }

    return arrSorted
}

console.log(average(arr))