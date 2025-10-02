let input = require('readline-sync');

let n1 = 9;

while (n1<=10) {
    n1 = input.questionInt('Digite um numero maior que 10: ');
    if (n1>10) {

    } 
    else{
        console.log('O numero e maior ou igual a 10');
    }

}

let n2 = 6;

while (n2>=5) {
    n1 = input.questionInt('Digite um numero menor que 5: ');
    if (n1<5) {
        console.log(n1);
    } 
    else{
        console.log('O numero e menor ou igual a 5');
    }

}