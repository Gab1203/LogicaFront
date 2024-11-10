/*14. Função que Verifica Maior Número
Escreva uma função chamada maiorNumero que recebe dois números e retorna o maior deles.
Exiba o resultado no console. */

var result = document.querySelector('#result')

function maiorNumero(n1, n2){

    if(n1 > n2)
        return n1
    else if(n1 == n2)
        return 'Os números são iguais'
    else
        return n2
}

var n1 = prompt('Digite um número:'), n2 = prompt('Digite outro número:')

result.innerHTML = `Maior número: ${maiorNumero(n1,n2)}`