playerPlay();
computerSelection();
playRound();

/* prompt for user input and storing it in a var */

function playerPlay() {
  let playerSelection = prompt("Please choose Rock, Paper, or Scissors!");
  return playerSelection.toLowerCase();
}

/* game logic function */
function computerSelection() {
  let computerSelection = Math.floor(Math.random() * 3);

   if (computerSelection == 0)
     {
      return "rock";
     }
   else if (computerSelection == 1)
     {
      return "paper";
     }
   else 
   {
   return "scissors";
   }
}


/* out put decision tree */
function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
      alert("Tie!");
    }
  else if (playerSelection == "rock") {
   if (computerSelection == "paper") {
      alert("Lose!");
    } 
   else (computerSelection == "scissors") 
      alert("Win!");
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      alert("Win!");
    }
      
    else (computerSelection == "scissors") 
      alert("Lose!");
  }
  else if (playerSelection == "scissors"){
    if (computerSelection == "rock"){
      alert("Lose!");
    }
    else (computerSelection == "paper") 
      alert("Win!");
    }
  else
    alert("null");
}