let input = require('readline-sync');
let n1 = input.questionInt("Digite um numero: ")
let n2 = input.questionInt("Digite um numero: ")
let n3 = input.questionInt("Digite um numero: ")

if (n1<n2 && n2<n3) {console.log(n1,n2,n3)}
if (n1<n3 && n3<n2) {console.log(n1,n3,n2)}
if (n2<n1 && n1<n3) {console.log(n2,n1,n3)}
if (n2<n3 && n3<n1) {console.log(n2,n3,n1)}
if (n3<n1 && n1<n2) {console.log(n3,n1,n2)}
if (n3<n2 && n2<n1) {console.log(n2,n3,n1)}