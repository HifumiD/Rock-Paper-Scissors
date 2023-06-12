function playGame() {
    var quit = false;
    var score = 0;
    var score1 = 0;
  
    for (var i = 0; i < 5; i++) {
      function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
  
      function determineWinner(playerSelection, computerChoice) {
        if (
          (playerSelection == "Rock" && computerChoice == "Rock") ||
          (playerSelection == "Paper" && computerChoice == "Paper") ||
          (playerSelection == "Scissors" && computerChoice == "Scissors")
        ) {
          return "Draw";
        } else if (
          (playerSelection == "Rock" && computerChoice == "Paper") ||
          (playerSelection == "Paper" && computerChoice == "Rock") ||
          (playerSelection == "Scissors" && computerChoice == "Paper")
        ) {
            updateScoreAI()
          return "Lose";
        } else {
            updateScorePlayer()
          return "Win";
        }
      }

      function updateScorePlayer(){
        score++
        var scoreNumber = document.querySelector("#Score")
        scoreNumber.textContent = score
      }

      function updateScoreAI(){
        score1++
        var scoreNumber1 = document.querySelector("#aiScore")
        scoreNumber1.textContent = score1
      }
  
      function handleRockClick() {
        var playerSelection = "Rock";
        var computerChoice = getComputerChoice();
        var result = determineWinner(playerSelection, computerChoice);
        alert("Result: " + result);
        
      }

      
      function handlePaperClick() {
        var playerSelection = "Paper";
        var computerChoice = getComputerChoice();
        var result = determineWinner(playerSelection, computerChoice);
        alert("Result: " + result);
        
      }
  
      function handleScissorsClick() {
        var playerSelection = "Scissors";
        var computerChoice = getComputerChoice();
        var result = determineWinner(playerSelection, computerChoice);
        alert("Result: " + result);
        
      }
  
      var rockButton = document.querySelector('#Rock');
      rockButton.onclick = handleRockClick;
  
      var paperButton = document.querySelector('#Paper');
      paperButton.onclick = handlePaperClick;
  
      var scissorsButton = document.querySelector('#Scissors');
      scissorsButton.onclick = handleScissorsClick;
    }
  }
  
  playGame();