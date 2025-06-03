let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
 
};

const showWinner = (userWins) => {
    if (userWins) {
        console.log("You win!");
        msg.innerText = "You win!";
    } else {
     console.log("You lose!");
        msg.innerText = "You lose!";

}
};

const playGame = (userChoice) => {
console.log("user choice =", userChoice);
const computerChoice = genComputerChoice();
console.log("computer choice =", computerChoice);

if (userChoice === computerChoice) {
    console.log("It's a tie!");
    msg.innerText = "It's a tie!";
}else {
    let userWins = true;
    if (userChoice === "rock") {
        userWins = computerChoice === "scissors"? true : false;
    } else if (userChoice === "paper") {
        userWins = computerChoice === "rock"? true : false;
    } else if (userChoice === "scissors") {
        userWins = computerChoice === "paper"? true : false;
    }
    showWinner(userWins);
}
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
