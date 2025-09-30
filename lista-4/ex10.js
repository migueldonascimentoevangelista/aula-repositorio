let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite um numero: ");
if (n1<n2){
    n1 = n1*10
    n2 = n2/2
}

if (n2<n1){
    n2 = n2*10
    n1 = n1/2
}

resp = n1+n2

if (resp % 2 === 0){
    console.log(resp, "é par");
} else {
    console.log(resp, "é ímpar");
}