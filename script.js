let userChoice= prompt("Do you choose rock, paper, or scissors?");

let computerChoice= Math.random();
if(computerChoice<.33){
  computerChoice="rock";
}
else if(computerChoice>.33 && computerChoice<.66){
  computerChoice="paper";
}
else {
  computerChoice="scissors";
} console.log(computerChoice);

let compare = function(choice1, choice2){
  if(choice1===choice2){
    return "The result is a tie!";
  }
  else if(choice1 === "rock"){
    if(choice2==="scissors") {
      return "Rock Wins!" 
    }
    else 
        return "Paper wins!"
  }
  else if(choice1 === "paper"){
    if(choice2==="rock") 
  {
      return "paper Wins!" 
  }
    else 
        return "Paper loses!"
    }
  }

console.log(compare(userChoice,computerChoice));
