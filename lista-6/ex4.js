let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = 1
while (n2<11) {
    console.log(n1*(n2++))
}