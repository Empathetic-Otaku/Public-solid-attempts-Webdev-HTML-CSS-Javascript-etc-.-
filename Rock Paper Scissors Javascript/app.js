//firstly defining the variables and initial values for the players scores
let userScore = 0;
let computerScore = 0;

//Goes to the HTML file to get the id's of the scores
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

//Goes to the HTML document to get the classes
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

//Goes to the HTML file to get the divs of the variables (rock, paper and scissors)
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Function to get the computers choice for that round
function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function which converts the letter to the word so that it becomes workable
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

//Setting the logic for winning (in this case for us)
function win(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const fading = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} you win bruh`;
    fading.classList.add("win-glow");
    setTimeout(() => fading.classList.remove("win-glow"), 600);
}

//Setting the logic for losing (the computer gets the point)
function lose(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const fading = document.getElementById(userChoice)
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} you lost bruh`;
    fading.classList.add("lose-glow");
    setTimeout(() => fading.classList.remove("lose-glow"), 600);
}

//Logic for a tie of course
function tie(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ties with ${convertToWord(compChoice)}${smallCompWord} you tie bruh`;
    document.getElementById(userChoice).classList.add("tie-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("tie-glow"), 600);
}

//logic for all potential options for both sides
function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, compChoice);
            break;
    }
}

//function for the click event for the options
function main(){
    rock_div.addEventListener("click", () => game ("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();