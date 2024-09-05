// script.js

const board = document.getElementById('game-board');
const cells = board.getElementsByClassName('cell');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameActive = false;
            return cells[a].textContent;
        }
    }
    return [...cells].every(cell => cell.textContent) ? 'Draw' : null;
}

function handleClick(event) {
    const cell = event.target;

    if (!gameActive || cell.textContent) return;

    cell.textContent = currentPlayer;

    const result = checkWinner();
    if (result) {
        if (result === 'Draw') {
            setTimeout(() => alert("It's a Draw!"), 10);
        } else {
            setTimeout(() => alert(`${result} Wins!`), 10);
        }
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function restartGame() {
    [...cells].forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
}

board.addEventListener('click', handleClick);
restartButton.addEventListener('click', restartGame);
