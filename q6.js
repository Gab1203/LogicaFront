/*6. Condicional Simples
Crie um programa que peça ao usuário para inserir a idade e, dependendo da idade, exiba no
console se ele é maior ou menor de idade. */

let idade  = Number.parseInt(prompt('Insira sua idade')) 

let age = document.querySelector('#age')

let result = ''

if(idade >= 18){
result = 'maior de idade!'
}else{
    result = 'menor de idade!'
}

age.innerHTML = 'Você é ' + result