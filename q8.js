/*8. Manipulação de Strings
Crie um programa que solicite o nome do usuário e depois exiba no console o nome em letras
maiúsculas, em letras minúsculas e a quantidade de caracteres no nome. */

var getName = prompt('Digite seu nome:')

var result = document.querySelector('#result')

result.innerHTML = `Seu nome em letras maiúsculas: ${getName.toUpperCase()} <br>Em letras minúsculas: ${getName.toLowerCase()}<br>Quantidade de caracteres: ${getName.length}`