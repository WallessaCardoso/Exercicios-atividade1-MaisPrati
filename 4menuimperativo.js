// Este programa mostra um menu no console e executa uma ação conforme a opção escolhida
// Utiliza switch-case para tratar as opções

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Exibe o menu
console.log("=== MENU INTERATIVO ===");
console.log("1 - Dizer Olá 👋");
console.log("2 - Mostrar a data atual 📅");
console.log("3 - Sair ❌");

readline.question("Escolha uma opção (1, 2 ou 3): ", (opcao) => {
  switch (opcao) {
    case "1":
      console.log("Olá, usuário! 👋 Seja bem-vindo(a)!");
      break;

    case "2":
      const dataAtual = new Date();
      console.log("Data atual: " + dataAtual.toLocaleDateString());
      break;

    case "3":
      console.log("Saindo do programa... Até logo!");
      break;

    default:
      console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
  }

  readline.close();
});
