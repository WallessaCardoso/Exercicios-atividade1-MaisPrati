// Este programa classifica a idade de uma pessoa em categorias:
// Criança:     0 a 11 anos
// Adolescente: 12 a 17 anos
// Adulto:      18 a 59 anos
// Idoso:       60 anos ou mais

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite a idade da pessoa: ", (input) => {
  const idade = parseInt(input);

  if (isNaN(idade) || idade < 0) {
    console.log("Por favor, digite uma idade válida.");
  } else if (idade < 12) { // Criança: 0 a 11
    console.log("Classificação: Criança");
  } else if (idade >= 12 && idade < 18) { // Adolescente: 12 a 17
    console.log("Classificação: Adolescente");
  } else if (idade >= 18 && idade < 60) { // Adulto: 18 a 59
    console.log("Classificação: Adulto");
  } else { // Idoso: 60 ou mais
    console.log("Classificação: Idoso");
  }

  readline.close();
});