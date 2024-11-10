/*10. Tabuada
Peça ao usuário para inserir um número e exiba a tabuada desse número (do 1 ao 10) usando
um loop for. */

var number = Number.parseInt(prompt('Digite um número para saber sua tabuada:')) 
var result = document.querySelector('#result')

for(let i=1; i <= 10; i++){
    result.innerHTML +=  `${number} *  ${i} = ${number * i} <br>`
}