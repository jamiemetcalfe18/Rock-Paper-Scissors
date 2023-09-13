let userScore = 0;
let computerScore = 0;

let updateScore = function() {
    document.getElementById('score').textContent = `Score: User ${userScore} - ${computerScore} Computer`;
}

let compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }
    else if(choice1 === "rock"){
        if(choice2 === "scissors") {
            userScore++;
            return "Rock Wins!";
        }
        else {
            computerScore++;
            return "Paper wins!";
        }
    }
    else if(choice1 === "paper"){
        if(choice2 === "rock") {
            userScore++;
            return "Paper Wins!";
        }
        else {
            computerScore++;
            return "Paper loses!";
        }
    }
    else if(choice1 === "scissors"){
        if(choice2 === "rock") {
            computerScore++;
            return "Scissors lose!";
        }
        else {
            userScore++;
            return "Scissors win!";
        }
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let userChoice = this.id;
        let computerChoice = Math.random();
        
        if(computerChoice < 0.33){
            computerChoice = "rock";
        }
        else if(computerChoice > 0.33 && computerChoice < 0.66){
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }

        let result = compare(userChoice, computerChoice);

        document.getElementById('result').textContent = result;
        updateScore();

        if (userScore == 5 || computerScore == 5) {
            let winner = userScore > computerScore ? "User" : "Computer";
            let winnerDiv = document.getElementById('winner');
            winnerDiv.textContent = `Game Over. ${winner} wins!`;

            let tryAgainButton = document.createElement('button');
            tryAgainButton.textContent = 'Try Again';
            tryAgainButton.id = 'try-again';
            tryAgainButton.addEventListener('click', function() {
                userScore = 0;
                computerScore = 0;
                updateScore();
                winnerDiv.textContent = '';
                document.getElementById('result').textContent = '';
                buttons.forEach(button => button.disabled = false);
            });
            winnerDiv.appendChild(tryAgainButton);

            buttons.forEach(button => button.disabled = true);
        }
    });
});
