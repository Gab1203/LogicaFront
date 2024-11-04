/*4. Calculando a Média
Peça ao usuário para inserir três notas (usando prompt), calcule a média e exiba se o aluno foi
aprovado ou reprovado (a média para aprovação é 7). Exemplo de saída:
Sua média é 6.5. Você foi reprovado. */

function avg(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function evaluate(media) {
  if (media >= 7) {
    return "aprovado!";
  } else {
    return "reprovado!";
  }
}

let nota1 = Number.parseFloat(prompt("Digite uma nota:"));
let nota2 = Number.parseFloat(prompt("Digite uma nota:"));
let nota3 = Number.parseFloat(prompt("Digite uma nota:"));

let media = avg(nota1, nota2, nota3);

texto = document.querySelector("#avg");

texto.innerHTML = "";
texto.innerHTML +=
  "<p>Sua média final é " +
  media +
  "</p>" +
  "<p>Você foi " +
  evaluate(media) +
  "</p>";
