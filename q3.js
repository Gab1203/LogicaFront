/*3. Operações MatemáƟcas Simples
Crie um programa que some, subtraia, mulƟplique e divida dois números. Exiba o resultado de
cada operação no console.*/

let n1 = 10
let n2 = 5

function soma(n1,n2){
return n1 + n2
}

function subtracao(n1,n2){
    return n1 - n2
}

function multiplicacao(n1,n2){
    return n1 * n2
}

function divisao(n1,n2){
    return n1/n2
}


console.log('Soma ' + soma(n1,n2))
console.log('Subtração: ' + subtracao(n1,n2))
console.log('Multiplicação: ' + multiplicacao(n1,n2))
console.log('Divisão: ' + divisao(n1,n2))
