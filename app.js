let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
 
};

const showWinner = (userWins, userChoice, computerChoice) => {
    if (userWins) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
     console.log("You lose!");
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";


}
};

const playGame = (userChoice) => {
console.log("user choice =", userChoice);
const computerChoice = genComputerChoice();
console.log("computer choice =", computerChoice);

if (userChoice === computerChoice) {
    console.log("It's a tie!");
    msg.innerText = "It's a tie!";
    msg.style.backgroundColor = "#335933";
    //  "#598059";

}else {
    let userWins = true;
    if (userChoice === "rock") {
        userWins = computerChoice === "scissors"? true : false;
    } else if (userChoice === "paper") {
        userWins = computerChoice === "rock"? true : false;
    } else if (userChoice === "scissors") {
        userWins = computerChoice === "paper"? true : false;
    }
    showWinner(userWins, userChoice, computerChoice);
}
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
