let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")
let n4 = input.questionInt("Digite um numero: ")

let resp = n1+n2-n3-n4

if (resp<10) {console.log('resultado menor que 10')}else{console.log('resultado maior ou igual a dez')}