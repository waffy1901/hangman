//alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
//number of lives
var numLives = 6;
//Current File
var currentFile = window.location.pathname.split("/").pop();
//guessed letters
var guessedLetters = [];
//Current generated word
var answer;
//word_bank
const wordBank = {"Sports": ["Tom Brady", "Celtics", "Lebron James"], 
"Recondite Knowledge": ["Jennifer Lopez", "Blue Whale", "Ostrich"], 
"Places": ["Mongolia", "Vatican City", "Machu Picchu"]};
//word length
//categories
const categories = ["Sports", "Recondite Knowledge", "Places"]
//hint bank
const hintBank = {"Tom Brady" : "Quarterback that has won the most SuperBowls", 
"Celtics" : "Franchise that has won the most NBA championships",
"Lebron James" : "The NBA's all-time leading scorer", 
"Jennifer Lopez" : "The inspiration behind the creation of Google Images",
"Blue Whale" : "The animal whose heart weight over 400 pounds",
"Ostrich" : "This animal has eyes bigger than its brain",
"Mongolia" : "The world's sparsest population",
"Vatican City" : "This country is 120 times smaller than Manhattan",
"Machu Picchu" : "This place very well-preserved and is 75% its original"}

//regenerate word button
function generateWord() {
    if (currentFile === "sports.html") {
        answer = wordBank["Sports"][Math.floor(Math.random() * categories.length)];
    } else if (currentFile === "recondite.html") {
        answer = wordBank["Recondite Knowledge"][Math.floor(Math.random() * categories.length)];
    } else if (currentFile === "places.html") {
        answer = wordBank["Places"][Math.floor(Math.random() * categories.length)];
    }
    
}

//hint button
function getHint() {
    document.getElementById("hint").innerHTML = "Hint: " + hintBank[answer];
}

//guess
function guess() {
    var currentGuess = document.getElementById("letterGuess").value
    if (guessedLetters.includes(currentGuess)) {
        alert("You've already guessed this letter. Try Again!")
    } else {
        guessedLetters.push(currentGuess)
    }
    document.getElementById('letterGuess').value = '';
}

function initializePage() {
    generateWord();
}