let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")

let maior1 = 0
let maior2 = 0

if (n1>n2 && n2>n3){
    maior1=n1
    maior2=n2}
if (n1>n3 && n3>n1){
    maior1=n1
    maior2=n3}
if (n2>n3 && n3>n1){
    maior1=n2
    maior2=n3} 
