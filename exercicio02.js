class Pessoa {
    nome; 
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    meuImc(peso, altura) {
        console.log(peso / (altura *altura));
    }
}

const jose = new Pessoa("josé", 70, 1.75);
jose.meuImc(jose.peso, jose.altura);