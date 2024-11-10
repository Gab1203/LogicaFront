/*16. Número Aleatório
Crie um programa que gere um número aleatório entre 1 e 100 e peça ao usuário para adivinhar
o número. O programa deve conƟnuar até que o usuário acerte, dando dicas se o número
inserido é maior ou menor que o número sorteado. */





function randomNumber(rand, attempt){
attempt = Number.parseInt(attempt)
    
    if(attempt == rand){
        alert(`Parabéns, você acertou, o número de fato é ${rand}`)
        return true
        
    }
    else if(attempt > rand){
        alert('O número é mais baixo')
        return false

    }else if(attempt < rand){
        alert('O número é mais alto')

        return false
    }

}

var rand = Math.floor(Math.random() * 101);
var attempt = 0


do{
    attempt = prompt('Tente um número:')
    alert(rand)
    
      

}while(!randomNumber(rand, attempt))