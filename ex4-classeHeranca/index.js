class Veiculo {
    constructor(marca, ano){
        this.marca = marca,
        this.ano = ano
    }
    
    obterDetalhes() {
        return `O veiculo é da marca ${this.marca} ano ${this.ano}`
    }
}

class Carro extends Veiculo {
    constructor (marca, ano, portas){
        super(marca, ano)
        this.portas = portas
    }

    obterDetalhes() {
        return `O veiculo é da marca ${this.marca} ano ${this.ano} e tem ${this.portas} portas`
    }
}

let carro = new Carro("audi", 2020, 4)

console.log(carro.obterDetalhes())