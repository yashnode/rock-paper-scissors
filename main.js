let computerPlay = () => {
    let a = Math.floor(Math.random() * 3);
    let choice = ['Rock', 'Paper', 'Scissors'];
    return (choice[a]);
};
let playRound = (computerSelection, playerSelection) => {
    //check for tie
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase())
        return "Tie!";
    //check for rock
    if (playerSelection.toLowerCase() === 'rock')
        if (computerSelection.toLowerCase() == 'scissors')
            return "You Win! Rock beats Scissors.";
        else return "You Lose! Paper beats Rock.";
        //check for scissors
    if (playerSelection.toLowerCase() === 'scissors')
        if (computerSelection.toLowerCase() == 'paper')
            return "You Win! Scissors beats Paper.";
        else return "You Lose! Rock beats Scissors.";
        //check for paper
    if (playerSelection.toLowerCase() === 'paper')
        if (computerSelection.toLowerCase() == 'rock')
            return "You Win! Paper beats Rock.";
        else return "You Lose! Scissors beats paper.";
};

let game = () => {
    computer = 0;
    player = 0;
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt('Enter "Rock" "Paper" or "Scissors"', "Scissors");
        let computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
        console.log(result);
        if (result.includes("Lose"))
            computer++;
        else if (result.includes("Win"))
            player++;
    }
    if (computer == player) {
        console.log(`Match Tied!`);
    } else if (computer > player) {
        points = computer - player;
        console.log(`Computer wins! by ${points} points.`);
    } else {
        points = player - computer;
        console.log(`You win! by ${points} points.`);
    }

};
game();