playerPlay()
computerSelection()
playRound()

/* prompt for user input and storing it in a var */

function playerPlay() {
  let playerSelection = prompt("Please choose Rock, Paper, or Scissors!");
  return playerSelection.toLowerCase();
}

/* game logic function */
function computerSelection() {
  let comptuerSelection = Math.floor(Math.random() * 3)+1;

   if (computerSelection == 1)
     {
      return "rock";
     }
   else if (computerSelection == 2)
     {
      return "paper";
     }
   else 
   {
   return "scissors";
   }
}

/* out put decision tree */
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
      alert("Tie!");
    }
  else if (rock) {
   if (computerSelection = paper) {
      alert("Lose!");
    }
    else (computerSelection = scissors) 
      alert("Win!");
  }
  else if (paper) {
    if (computerSelection = rock) {
      alert("Win!");
    }
      
    else (computerSelection = scissors) 
      alert("Lose!");
  }
  else if (scissors){
    if (computerSelection = rock) {
      alert("Lose!");
    }
    else (computerSelection = paper) 
      alert("Win!");
    }
  else
    alert("null");
}
