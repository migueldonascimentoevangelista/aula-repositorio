let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")

if (n1<n2, n1<n3) { console.log(n1+5, n1)}
if (n2<n1, n2<n3) { console.log(n2+5)}
if (n3<n1, n3<n2) { console.log(n3+5)}