/*12. Função para Converter Celsius em Fahrenheit
Crie uma função que converta graus Celsius em Fahrenheit. A fórmula de conversão é: F = C *
9/5 + 32. Teste a função e exiba o resultado no console. */

function conversion(celsius){

    Number.parseFloat(celsius)
    return  celsius * 9/5 + 32

}

var result = document.querySelector('#result')
var c = prompt('Digite uma temperatura em °C:')

result.innerHTML = `${c} °C em °F é ${conversion(c)} °F`