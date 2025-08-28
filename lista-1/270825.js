let input = require('readline-sync');
let divisor = input.questionInt("Digite o divisor: ");
let dividendo = input.questionInt("Digite o dividendo: ");
if(divisor!=0){
let quociente = dividendo/divisor
let resto = (quociente - parseInt(quociente)) * divisor  
console.log("Resposta=", Math.round(resto))
}else{.log("Impossivel realizaconsoler divisão por 0")}