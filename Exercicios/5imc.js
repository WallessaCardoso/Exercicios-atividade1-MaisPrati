// Programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa.
// O usuário deve informar o peso (em kg) e a altura (em metros).
// OBS: Use ponto (.) e NÃO vírgula (,) para separar os decimais na altura. Ex: 1.75

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntar peso
rl.question('Digite o seu peso em kg: ', (pesoInput) => {
  const peso = parseFloat(pesoInput);

  // Perguntar altura
  rl.question('Digite a sua altura em metros: ', (alturaInput) => {
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      console.log('Por favor, insira valores válidos.');
      rl.close();
      return;
    }

    const imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    // Classificação do IMC
    if (imc < 18.5) {
      console.log('Categoria: Baixo peso');
    } else if (imc < 24.9) {
      console.log('Categoria: Peso normal');
    } else if (imc < 29.9) {
      console.log('Categoria: Sobrepeso');
    } else {
      console.log('Categoria: Obesidade');
    }

    rl.close();
  });
});