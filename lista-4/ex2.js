let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")

if(n1<n2){n1=n1+5}
else(n2=n2+5)

if(n1>n2){console.log(n1)}
else{console.log(n2)}