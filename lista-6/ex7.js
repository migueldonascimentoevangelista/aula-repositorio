let input = require('readline-sync');

let n1 = 9;

let n2 = 6;

while (n1<=10 && n2>=5) {
    n1 = input.questionInt("Digite um numero maior que 10: ");
    if (n1>10) {
        console.log(n1);
    } 
    else{
        console.log("O numero é menor ou igual a 10");
    }

    n2 = input.questionInt("Digite um numero menor que 5: ");
    if (n2<5) {
        console.log(n1);
    } 
    else{
        console.log("O numero é maior ou igual a 5");
    }
}
