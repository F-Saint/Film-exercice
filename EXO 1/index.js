// Sélection des éléments HTML
const choices = document.querySelectorAll('.choice');
const playButton = document.getElementById('play-button');
const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const score = document.getElementById('score');

// Options du jeu
const options = ['rock', 'paper', 'scissors'];

// Scores des joueurs
let userScore = 0;
let computerScore = 0;

// Fonction pour choisir aléatoirement l'option de l'ordinateur
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

// Fonction pour jouer un tour
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!'; // Égalité
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        userScore++;
        return 'You win!'; // Le joueur gagne
    }

    computerScore++;
    return 'You lose!'; // Le joueur perd
}

// Fonction pour mettre à jour les résultats affichés à l'écran
function updateResults() {
    userChoice.textContent = ` ${userSelection} `;
    computerChoice.textContent = ` ${computerSelection} `;
    score.textContent = `${userScore}-${computerScore}`;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateResults();
}

// Sélection de l'option du joueur
let userSelection;

// Écouteurs d'événements pour chaque choix du joueur
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        userSelection = choice.dataset.option;
        computerSelection = computerPlay();
        const result = playRound(userSelection, computerSelection);
        updateResults();

        if (result !== 'Tie!') {
            setTimeout(() => {
                alert(`${result}\nScore: ${userScore}-${computerScore}`);
            }, 10);
        }
    });
});

// Écouteur d'événement pour le bouton de réinitialisation
playButton.addEventListener('click', resetGame);