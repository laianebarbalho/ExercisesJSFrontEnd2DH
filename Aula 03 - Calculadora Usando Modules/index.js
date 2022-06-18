import somar from './somar.js';
import subtrair from './subtrair.js';
import multiplicar from './multiplicar.js';
import dividir from './dividir.js';


let number1 = parseInt(prompt('Digite o primeiro numero:'))
let number2 = parseInt(prompt('Digite o segundo numero:'))

let resultadoSoma = somar(number1, number2);

let resultadoSub = subtrair(number1, number2);

let resultadoMulti = multiplicar(number1, number2);

let resultadoDividir = dividir(number1, number2);

alert(`O resultado da soma foi ${resultadoSoma}, \n O resultado da subtracao foi ${resultadoSub}, \n O resultado da multiplicacao foi ${resultadoMulti} \n e o resultado da divisao foi ${resultadoDividir}`);