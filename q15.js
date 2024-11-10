/*15. Loop while
Escreva um programa que conte de 1 até 10 usando um loop while e exiba cada número no
console. */


var result = document.querySelector('#result')

var i = 1

while(i <= 10){
    result.innerHTML += `${i} <br>`
    i++
}