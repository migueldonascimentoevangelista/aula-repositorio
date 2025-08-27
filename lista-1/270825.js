let input = require('readline-sync');
let divisor = input.questionInt("Digite o divisor: ");
let dividendo = input.questionInt("Digite o dividendo: ");

let quociente = dividendo/divisor
let resto = quociente-ParseInt(quociente)*divisor

console.log("Resposta=", resto)