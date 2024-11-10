/*13. Manipulação de Objetos
Crie um objeto chamado carro com as propriedades marca, modelo e ano. Exiba cada uma das
propriedades no console. */



var result = document.querySelector('#result')

var carro = {
    marca: 'Ford',
    modelo: 'Ka',
    ano: '2014'
}

result.innerHTML = `Marca do carro: ${carro.marca} <br>Modelo: ${carro.modelo} <br>Ano: ${carro.ano}`