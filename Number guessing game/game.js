let targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
const feedbackText = document.getElementById("feedback");
const guessInput = document.getElementById("user-guess");
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", checkGuess);


function checkGuess() {
// Explicit Type Coercion: Extract raw string data format fields and force-cast to strict numbers
let userValue = Number(guessInput.value);
// Guard Clause Boundary Checks Validation Filtering Strategy
if (!userValue || userValue < 1 || userValue > 100) {
        feedbackText.textContent = "❌ Enter a valid number between 1 and 100!"
;
        feedbackText.style.color = "#ef4444"; /* Illuminates text alerts deep alarm warning red */
return; /* Halt execution path immediately to safeguard turns state counters values */
    }
    attemptsLeft--; /* Decrement Operator: Subtracts exactly 1 from remaining session turn memory values */
// Conditional Branch Evaluation Core Matrix Loops

    // Conditional Branch Evaluation Core Matrix Loops
if (userValue === targetNumber) {
        feedbackText.textContent = "🎉 Correct! You guessed the number!"
;
        feedbackText.style.color = "#4ade80"; /* Transforms text feedback values clear affirmative vibrant green */
endGame();
    } 
    
else if (attemptsLeft === 0) {
        feedbackText.textContent = `💥 Game Over! The hidden number was ${targetNumber}.`
        feedbackText.style.color = "#ef4444";
endGame();
;
}else if (userValue > targetNumber) {
        feedbackText.textContent = `📉 Too High! Try again. (${attemptsLeft} guesses left)`
;
        feedbackText.style.color = "#f59e0b"; /* Changes dynamic clues display layout colors to alert warning orange */
    } 
    
else {
        feedbackText.textContent = `📈 Too Low! Try again. (${attemptsLeft} guesses left)`
        feedbackText.style.color = "#f59e0b";
;
     guessInput.value = ""; 
    }
    
}

    function endGame() {
// Enforce secure system shutdown state attributes settings modification vectors
    guessInput.disabled = true;
    }
