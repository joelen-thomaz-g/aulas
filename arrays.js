const notas = [9, 8.5, 6.7, 8]

console.log(notas.length); // conta o total de itens do array
console.log(notas[1]);

notas.push(10) // adiciona um item ao final do array
console.log(notas);

notas.shift() // remove o primeiro item do array
console.log(notas);

notas.pop() // remove o ultimo item do array
console.log(notas);

delete notas[1] // deleta um item especifico do array
console.log(notas);

const nome = "Joelen";
console.log(nome[0]);