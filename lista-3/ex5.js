let input = require('readline-sync')
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")

let resp1 = n1*10
let resp2 = n2*10

if(n1+n2<20){console.log(resp1, resp2)}
