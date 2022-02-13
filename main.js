let computerPlay = () => {
    let a = Math.floor(Math.random() * 3);
    let choice = ['rock', 'paper', 'scissors'];
    return (choice[a]);
};


function playRound(playerSelection) {
    let computerSelection = computerPlay();
    //check for tie
    if (computerSelection === playerSelection)
        return "Tie!";
    //check for rock
    if (playerSelection === 'rock')
        if (computerSelection === 'scissors')
            return "You Win! Rock beats Scissors.";
        else return "You Lose! Paper beats Rock.";
        //check for scissors
    if (playerSelection === 'scissors')
        if (computerSelection === 'paper')
            return "You Win! Scissors beats Paper.";
        else return "You Lose! Rock beats Scissors.";
        //check for paper
    if (playerSelection === 'paper')
        if (computerSelection === 'rock')
            return "You Win! Paper beats Rock.";
        else return "You Lose! Scissors beats paper.";
};

const showLive = (playerSelection) => {
    result = playRound(playerSelection);
    showLiveResult(result);
    return result;
};

function showLiveResult(result) {
    document.getElementById('liveResult').innerText = `live: ${result}`;
}

function game() {
    let player = 0;
    let computer = 0;


    const paper = document.getElementById('paper');
    paper.addEventListener('click', function results() {

        if (computer < 5 && player < 5) {
            result = showLive('paper');
            if (result.includes('Win')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
            } else if (result.includes('Lose')) {
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            } else if (result.includes('Tie')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            }
        } else {
            showFinal(computer, player);
            this.removeEventListener('click', results);
        }
    })


    const scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function results() {

        if (computer < 5 && player < 5) {
            result = showLive('scissors');
            if (result.includes('Win')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
            } else if (result.includes('Lose')) {
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            } else if (result.includes('Tie')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            }
        } else {
            showFinal(computer, player);
            this.removeEventListener('click', results);
        }
    })


    const rock = document.getElementById('rock');
    rock.addEventListener('click', function results() {

        if (computer < 5 && player < 5) {
            result = showLive('rock');
            if (result.includes('Win')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
            } else if (result.includes('Lose')) {
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            } else if (result.includes('Tie')) {
                player++;
                document.getElementById('player').innerText = `${player}`;
                computer++;
                document.getElementById('computer').innerText = `${computer}`;
            }
        } else {
            showFinal(computer, player);
            this.removeEventListener('click', results);
        }
    })
}

function showFinal(computer, player) {
    if (computer == player) {
        document.getElementById('finalResult').innerText = "Final Result: It's a draw!";
    } else if (computer > player) {
        document.getElementById('finalResult').innerText = `Final Result: Computer Wins by ${computer-player} points!`;
    } else {
        document.getElementById('finalResult').innerText = `Final Result: Player Wins by ${player-computer} points!`;
    }

}
game();