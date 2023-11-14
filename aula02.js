/* var nota1 = 6.5;
var nota2 = 7.0;
var nota3 = 8.5;

var media = (nota1 + nota2 + nota3) / 3;

if (media < 7) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
} 
---------------------------------------------------*/

/* var nota1 = 8.0;
var nota2 = 7.0;
var nota3 = 5.0;

var media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}   
--------------------------------------------------*/

/* var peso = 50;
var altura = 1.70;
var imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc <= 40) {
    console.log("Obeso");
} else {
    console.log("Obesidade Grave");
}
---------------------------------------------------*/

/* var nota1 = 8.0;
var nota2 = 7.0;
var nota3 = 5.0; */

/* var media = (nota1 + nota2 + nota3) / 3;   */

/* function media(n1, n2, n3) {
    const resultado = (n1 + n2 + n3) / 3;
    if (resultado < 5) {
        console.log("Reprovado");
    } else if (resultado >= 5 && resultado <= 7) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }      
}

console.log(media (7, 8, 7));
console.log(media (10, 6.5, 8));
console.log(media (9, 4.5, 7)); 
----------------------------------------------------*/

/* const notaAluno = 90; */

/* function getConceito(notaAluno) {
    let conceitoA = notaAluno >= 90 && notaAluno <= 100;
    let conceitoB = notaAluno >= 80 && notaAluno < 89;
    let conceitoC = notaAluno >= 70 && notaAluno < 79;
    let conceitoD = notaAluno >= 60 && notaAluno < 69;
    let conceitoF = notaAluno < 60 && notaAluno >= 0 ;

    let conceitoFinal;

    if (conceitoA) {
        console.Final = "A";
    } else if (conceitoB) {
        console.Final = "B";
    } else if (conceitoC) {
        console.Final = "C";
    } else if (conceitoD) {
        console.Final = "D";
    } else {
        console.Final = "F";
    }

    return conceitoFinal;
}

console.log(getConceito(78));
console.log(getConceito(90));
console.log(getConceito(60));
console.log(getConceito(75)); 
------------------------------------------------*/

/* function farenheitParaCelsius(temperatura) {
    return (temperatura - 32) * 5/9
}

function celsiusParaFarenheit(temperatura) {
    return temperatura * 9/5 + 32
}

console.log(farenheitParaCelsius(52));
console.log(celsiusParaFarenheit(11)); 
-------------------------------------------------*/

/* function isPar(numero) {
    const ehNumeroPar = (numero % 2) === 0;

if(ehNumeroPar) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
}

console.log(isPar(10));
--------------------------------------------------*/
