var choices = document.querySelectorAll(".choices img");
var playerDiv = document.getElementById("playerImage");
var computerDiv = document.getElementById("computerImage");
var playertext = document.querySelector("#player");
var computertext = document.querySelector("#computer");
var score = document.querySelector('.Status')

var playerCount = document.getElementById('playercount')
var computerCount = document.getElementById('computercount')
var playerCounter = 0;
var computerCounter = 0;

var playerChoice;
var computerChoice;

choices.forEach((choice) => {
    choice.addEventListener("click", playerChooses);
});

function playerChooses() {
    playerChoice = this.id;
    computerChooses();

    updateImage(playerDiv, this.src);
}

function computerChooses() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        computerChoice = "Rock";
        updateImage(computerDiv, "images/rock.png");
    } else if (computerChoice === 2) {
        computerChoice = "Paper";
        updateImage(computerDiv, "images/g.png");
    } else if (computerChoice === 3) {
        computerChoice = "Scissors";
        updateImage(computerDiv, "images/scissors.png");
    }

    declareWinner();
}

function updateImage(container, src) {
    container.innerHTML = ''; // Clear existing images
    var image = document.createElement("img");
    image.src = src;
    container.appendChild(image);
}

function declareWinner() {
    if (computerChoice === playerChoice) {
        score.textContent = 'Draw'
        document.getElementById("status").style.color = 'grey';
    } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Paper" && playerChoice === "Rock") ||
        (computerChoice === "Scissors" && playerChoice === "Paper")

        
    ) {
        score.textContent = 'Lose'

        computerCounter++;
        computerCount.textContent = computerCounter.toString() ;

        document.getElementById("status").style.color = '#FFBDBD';
    } else {
        score.textContent = 'Win'

        playerCounter++;
        playerCount.textContent = playerCounter.toString() ;

        document.getElementById("status").style.color = '#A4FAA7';
    }
}