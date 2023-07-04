import readline from "readline"
import somaArray from "./somaArray.js"
import multiplicaArray from "./multiplicaArray.js"
import calculaMedia from "./calculaMedia.js"

// Create interface is a configuration for readline module:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Digite numeros separados por virgulas (Ex: 1,6,4...): ', function(answer){
    let arr = answer.split(',')
    let newarr = arr.map(value => {
        return Number(value)
    })

    console.log("A soma dos numeros é: ", somaArray(newarr))
    console.log("A média dos numeros é: ", calculaMedia(newarr))
    console.log("O produto dos numeros é: ",multiplicaArray(newarr))
    
    rl.close()
});

