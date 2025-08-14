let input = require('readline-sync');

let n1 = input.questionInt("Digite o numero 1: ");
let n2 = input.questionInt("Digite o numero 2: ");
let n3 = input.questionInt("Digite o numero 3: ");

console.log("--Problema--")

let resp1 = n1+10;
let resp2 = n2-5;
let resp3 = n3*2;

console.log("N1 = ",resp1)
console.log("N2 = ",resp2)
console.log("N3 = ",resp3)