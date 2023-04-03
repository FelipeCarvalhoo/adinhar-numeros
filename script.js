function guess() {
  // Gera um número aleatório entre 1 e 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
  // Obtém o valor do input do usuário
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  
  // Verifica se o valor digitado é válido
  if (isNaN(guess) || guess < 1 || guess > 100) {
    const error = document.getElementById("error");
    error.innerHTML = "Digite um número válido entre 1 e 100";
    return;
  }
  
  // Verifica se o valor digitado é igual ao número aleatório gerado
  if (guess === randomNumber) {
    const result = document.getElementById("result");
    result.innerHTML = "Parabéns, você acertou!";
  } else {
    const result = document.getElementById("result");
    result.innerHTML = `Que pena, o número correto era ${randomNumber}. Tente novamente.`;
  }
}