let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let resp = 0

if (n1>10) {
    resp=n1+5
}else{resp=n1+20}
if (resp>25) {console.log(resp)}