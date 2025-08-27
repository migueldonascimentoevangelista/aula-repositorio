let input = require('readline-sync');
let divisor = input.questionInt("Digite o divisor: ");
let dividendo = input.questionInt("Digite o dividendo: ");
let quociente = dividendo/divisor
let resto = parseInt(quociente) 
let resposta = resto - quociente 

console.log("Resposta=", resposta)