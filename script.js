/* game logic function */
function computerPlay() {
  let comptuerChoice = Math.floor(Math.random() * 3);

   if (computerChoice == 0)
     {
      return "rock";
     }
   else if (computerChoice == 1)
     {
      return "paper";
     }
   else 
   {
   return "scissors";
   }
}

/* prompt for user input and storing it in a var */
var userChoice = prompt("Please choose Rock, Paper, or Scissors!");

function userChoice() {
  if (rock) {
    if (computerChoice = rock) {
      alert("Tie!");
    }
      
    else if (computerChoice = paper) {
      alert("Lose!");
    }
      
    else (computerChoice = scissors) 
      alert("Win!");
    }
    
  else if (paper) {
    if (computerPlay = paper) {
      alert("Tie!");
    }
      
    else if (rock) {
      alert("Win!");
    }
      
    else (scissors) 
      alert("Lose!");

  }
    
  else (scissors) 
    
    if (computerPlay = rock) {
      alert("Lose!");
    }

    else if (computerPlay = paper) {
      alert("Win!");
    }

    else (computerPlay= scissors) 
      alert("Tie!");
  
}