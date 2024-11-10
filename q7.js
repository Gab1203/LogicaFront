/*7. Calculadora com Função
Crie uma função chamada calculadora que receba dois números e uma operação (soma,
subtração, multiplicação ou divisão) e retorne o resultado da operação. Exiba o resultado no
console. */



function soma(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}

function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {
  return n1 / n2;
}

function calculadora(operation, n1, n2) {
  if (operation == "SOMA") {
    return soma(n1, n2);
  } else if (operation == "SUBTRAÇÃO") {
    return subtracao(n1, n2);
  } else if (operation == "MULTIPLICAÇÃO") {
    return multiplicacao(n1, n2);
  } else if (operation == "DIVISÃO") {
    return divisao(n1, n2);
  }else{
    return 'Operação inválida!'
  }
}

var a = document.querySelector('#result')


var n1 = Number.parseFloat(prompt('Digite um número'))
var n2 = Number.parseFloat(prompt('Digite um número'))
var operation =  prompt('Digite uma operação').toUpperCase()



a.innerHTML = 'Resultado ' + calculadora(operation, n1,n2)

