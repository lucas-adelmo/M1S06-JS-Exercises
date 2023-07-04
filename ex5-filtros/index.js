import readline from 'readline';
import filtrarPares from './filtrarPares.js';
import somaImpares from './somaImpares.js';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite numeros separados por virgulas (Ex: 1,6,4...)", function(answer){
    let arr = answer.split(',')
    let newarr = arr.map(value => {
        return Number(value)
    })

    console.log("Numeros pares: ", filtrarPares(newarr))
    console.log("Soma dos numeros impares: ", somaImpares(newarr))

    rl.close()
})