import input from 'readline-sync';

let n1 = input.questionInt("Digite um numero: ");

let resposta = n1 + 10;

let n2 = input.questionInt("Digite o numero2: ");

let resposta2 = n2/ 2;

console.log(`
    -----Correção dos exercicios-----
        ${n1} + 10 = ${resposta}
        ${n2}/2 = ${resposta2}    
    ---------------------------------
    `);