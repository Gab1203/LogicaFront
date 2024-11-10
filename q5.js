/*5. Verificação de Par ou Ímpar
Escreva um programa que peça ao usuário para inserir um número e verifique se ele é par ou
ímpar. Exiba o resultado no console. */

function ePar(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var numero = Number.parseInt(prompt("Digite um número:"));

var verify = document.querySelector("#verify");

var tipo = ''

if(ePar(numero)){
    tipo = 'par'
}else{
    tipo = 'impar'
}

verify.innerHTML = `<p>O número ${numero} é ${tipo}!</p>`

