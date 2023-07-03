//alphabet
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
// array of letters guessed correctly
var correctlyGuessedLetters = [];
//number of lives
var numLives = 6;
//Current File
var currentFile = window.location.pathname.split("/").pop();
//guessed letters
var guessedLetters = [];
//Current generated word
var answer;
//word_bank
const wordBank = {"Sports": ["tom brady", "celtics", "lebron james"], 
"Recondite Knowledge": ["jennifer lopez", "blue whale", "ostrich"], 
"Places": ["mongolia", "vatican city", "machu picchu"]};
//word length
//categories
const categories = ["Sports", "Recondite Knowledge", "Places"]
//hint bank
const hintBank = {"tom brady" : "Quarterback that has won the most SuperBowls", 
"celtics" : "Franchise that has won the most NBA championships",
"lebron james" : "The NBA's all-time leading scorer", 
"jennifer lopez" : "The inspiration behind the creation of Google Images",
"blue whale" : "The animal whose heart weight over 400 pounds",
"ostrich" : "This animal has eyes bigger than its brain",
"mongolia" : "The world's sparsest population",
"vatican city" : "This country is 120 times smaller than Manhattan",
"machu picchu" : "This place very well-preserved and is 75% its original"}

//regenerate word button
function generateWord() {
    guessedLetters = [];
    document.getElementById("guessedBox").innerHTML = "Guessed Letters: " + guessedLetters;
    correctlyGuessedLetters = [];
    if (currentFile === "sports.html") {
        answer = wordBank["Sports"][Math.floor(Math.random() * categories.length)];
    } else if (currentFile === "recondite.html") {
        answer = wordBank["Recondite Knowledge"][Math.floor(Math.random() * categories.length)];
    } else if (currentFile === "places.html") {
        answer = wordBank["Places"][Math.floor(Math.random() * categories.length)];
    }
    var formattedAnswer = answer.split(" ");
    var append = "";
    for (var i = 0; i < formattedAnswer.length; ++i) {
        append += "_\u00A0".repeat(formattedAnswer[i].length) + "\u00A0\u00A0\u00A0\u00A0";
    }
    document.getElementById("setup").innerText = append; 
}

//hint button
function getHint() {
    document.getElementById("hint").innerHTML = "Hint: " + hintBank[answer];
}

//guess
function guess() {
    var count = document.getElementById("setup").innerText;
    var formattedAnswer = answer.split(" ");
    var currentGuess = document.getElementById("letterGuess").value.toLowerCase();
    if (guessedLetters.includes(currentGuess)) {
        alert("You've already guessed this letter. Try Again!")
    } else {
        guessedLetters.push(currentGuess);
    }
    document.getElementById('letterGuess').value = '';
    document.getElementById("guessedBox").innerHTML = "Guessed Letters: " + guessedLetters;
    for (var i = 0; i < formattedAnswer.length; ++i) {
        for (var j = 0; j < formattedAnswer[i].length; ++j) {
            if (formattedAnswer[i][j] === currentGuess) {
                if (i === 0) {
                    var firstPart = count.substring(0, j * 2);
                    var secondPart = count.substring((j * 2) + 1);
                    count = firstPart + currentGuess + secondPart;
                } else if (i === 1) {
                    var firstPart = count.substring(0, (j * 2) + 4 + (formattedAnswer[0].length * 2));
                    var secondPart = count.substring((j * 2) + 4 + (formattedAnswer[0].length * 2) + 1);
                    count = firstPart + currentGuess + secondPart;
                }
                correctlyGuessedLetters.push(currentGuess);
            }
        }
    }
    document.getElementById("setup").innerText = count;
    win();
}

function win() {
    var formattedAnswer = answer.split(" ").join("");
    if (correctlyGuessedLetters.length === formattedAnswer.length) {
        document.getElementById("winningCard").innerHTML = "Congratulations, you have successfully avoided being hung!";
    }
}

function initializePage() {
    generateWord();
}