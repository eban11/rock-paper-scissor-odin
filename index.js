let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return 0;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "rock")
  ) {
    return -1;
  } else {
    return 1;
  }
};

const handlePlayerChoice = (e) => {
  const playerChoice = e.target.dataset.choice;
  const computerChoice = getComputerChoice();
  const round = playRound(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, round);
};

const displayResult = (playerChoice, computerChoice, roundResullt) => {
  const userScore = document.querySelector(".user-score");
  const compScore = document.querySelector(".comp-score");
  const info = document.querySelector(".info");

  if (roundResullt === 0) {
    info.textContent = "It is Draw!";
  } else if (roundResullt === -1) {
    computerScore += 1;
    compScore.textContent = computerScore;
    info.innerHTML = `You Lose! ${computerChoice}<sub>Comp</sub> beats ${playerChoice}<sub>User</sub>`;
  } else {
    playerScore += 1;
    userScore.textContent = playerScore;
    info.innerHTML = `You Win! ${playerChoice}<sub>User</sub> beats ${computerChoice}<sub>Comp</sub>`;
  }
};

document
  .querySelectorAll(".choice img")
  .forEach((choice) => choice.addEventListener("click", handlePlayerChoice));

// game();
