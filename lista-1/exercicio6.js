import input from 'readline-sync'
let num1 = input.questionInt("Digite numero 1: ")
let num2 = input.questionInt("Digite numero 2: ")

let resp1 = num1 - 1;
let resp2 = num2 + 2;

let resultadoFinal = (resp1 + resp2) - 1
console.log(resultadoFinal)