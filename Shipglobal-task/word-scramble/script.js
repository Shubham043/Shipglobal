const words = [
    { word: "EXCHANGE", hint: "The act of trading" },
    { word: "TRADING", hint: "The act of buying and selling" },
    { word: "MARKET", hint: "A place where goods are bought and sold" }
];

let currentWord;
let attempts = 0;
let timerInterval;
let timeLeft = 20; // seconds

function shuffleWord(word) {
    let arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr.join(' ');
}

function startGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    const scrambledWord = shuffleWord(currentWord.word);
    document.getElementById('scrambled-word').textContent = scrambledWord;
    document.getElementById('hint').textContent = `Hint: ${currentWord.hint}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = attempts = 0;
    document.getElementById('user-input').value = '';
    resetTimer();
}

function checkWord() {
    const userInput = document.getElementById('user-input').value.toUpperCase();
    attempts++;
    document.getElementById('attempts').textContent = attempts;
    if (userInput === currentWord.word) {
        document.getElementById('feedback').textContent = "Correct! You unscrambled the word.";
        clearInterval(timerInterval);
    } else {
        document.getElementById('feedback').textContent = "Incorrect guess. Try again!";
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 20;
    document.getElementById('timer').textContent = `${timeLeft}s`;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('feedback').textContent = "Time's up! The correct word was " + currentWord.word;
    }
}

document.getElementById('check-word').addEventListener('click', checkWord);
document.getElementById('refresh-word').addEventListener('click', startGame);

startGame();
