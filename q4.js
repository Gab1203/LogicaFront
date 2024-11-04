/*4. Calculando a Média
Peça ao usuário para inserir três notas (usando prompt), calcule a média e exiba se o aluno foi
aprovado ou reprovado (a média para aprovação é 7). Exemplo de saída:
Sua média é 6.5. Você foi reprovado. */

function avg(notas){

    for(let i = 0; i < notas.length; i++){

        let soma = 0
        soma += notas[i]

    }

    return soma/notas.length

}

let notas = [prompt('Digite uma nota:'), prompt('Digite outra nota:'), prompt('Digite outra nota:')]

texto = document.querySelector('#avg')

texto.innerHTML = ''
texto.innerHTML = 'Sua média final é ' + avg(notas)