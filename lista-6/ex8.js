let input = require('readline-sync');
n1 = 6

while (n1>5) {

    let n1 = input.questionInt('Digite um numero menor que cinco: ')
    if (n1<5) {
        for (n1 = n1+1; n1 < 20; n1 = n1+2) {
            console.log(n1)
        }
    }else{
        console.log('Numero maior que cinco')
    }
}
