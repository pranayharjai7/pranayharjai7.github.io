var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const computerChoice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return computerChoice[random];
}

function translator(choice) {
    if (choice == "rock") {
        return "&#128074";
    }
    if (choice == "paper") {
        return "&#128195";
    }
    if (choice == "scissors") {
        return "&#9986";
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You: (" + translator(userChoice) + "), got beaten by PC: (" + translator(computerChoice) + ")! You Lost! &#128557";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "You: (" + translator(userChoice) + "), beat PC: (" + translator(computerChoice) + ")! You WON! &#128293";
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "You: (" + translator(userChoice) + "), Draw with PC: (" + translator(computerChoice) + ")! It's a DRAW! &#128529";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + " " + computerChoice) {
        case "rock rock": draw(userChoice, computerChoice); break;
        case "rock paper": lose(userChoice, computerChoice); break;
        case "rock scissors": win(userChoice, computerChoice); break;

        case "paper rock": win(userChoice, computerChoice); break;
        case "paper paper": draw(userChoice, computerChoice); break;
        case "paper scissors": lose(userChoice, computerChoice); break;

        case "scissors rock": lose(userChoice, computerChoice); break;
        case "scissors paper": win(userChoice, computerChoice); break;
        case "scissors scissors": draw(userChoice, computerChoice); break;
    }
}


main();
function main() {
    rock_div.addEventListener('click', function () {
        game("rock");
    })
    paper_div.addEventListener('click', function () {
        game("paper");
    })
    scissors_div.addEventListener('click', function () {
        game("scissors");
    })
}


function resetScore() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Make your Move! &#128520";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}