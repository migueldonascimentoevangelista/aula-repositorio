let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
while (n1<n2) {
    console.log(n1++)
}