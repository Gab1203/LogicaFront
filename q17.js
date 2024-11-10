/*17. Inverter uma String
Crie uma função que receba uma string como parâmetro e retorne essa string ao contrário. Por
exemplo, ao receber "javascript", deve retornar "tpircsavaj". */

var result = document.querySelector('#result')

function inverter(a){

    let reverse = ''

    for(let i = a.length; i >= 0; i++){
        reverse += a.charAt(i)
    }
    return reverse

}


var a = prompt('Digite uma string:')
var inverso = inverter(a)

result.innerHTML = `String digitada: ${a} <br>String invertida: ${inverso}`