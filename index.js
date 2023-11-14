class Pessoa {
    nome;
    idade;
    anoNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const ana = new Pessoa('Ana', 21);
/* ana.idade = 20; */
const guilherme = new Pessoa('Guilherme', 20);
/* guilherme.nome = 'Guilherme Veiga';

console.log(ana.descrever());
console.log(guilherme.descrever()); */