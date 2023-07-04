class Livro {
    constructor(titulo, autor, anoPublicação){
        this.titulo = titulo,
        this.autor = autor,
        this.anoPublicação = anoPublicação
    }

    obterInformacoes() {
        return `O livro ${this.titulo} foi escrito por ${this.autor} no ano ${this.anoPublicação}`
    }
}

let livro1 = new Livro("Introdução ao Javascript", "Lucas Santos", 2020)
let livro2 = new Livro("Introdução ao Javascript 2", "Lucas Santos", 2021)
let livro3 = new Livro("Introdução ao Javascript 3", "Lucas Santos", 2022)

console.log(livro1.obterInformacoes())
console.log(livro2.obterInformacoes())
console.log(livro3.obterInformacoes())