/*11. Array de Nomes
Crie um array com 5 nomes. Exiba cada nome no console uƟlizando um loop for ou forEach. */

var result = document.querySelector('#result')
var array = []


for(let i= 0; i < 5; i++){

    array[i] = prompt('Digite um nome:')
}

array.forEach(
    result.innerHTML += `${array}`
)