// Dependencies
var inquirer = require("inquirer");
var Word = require("./Word");


//global variables and word array
var cryptocurrencies = ["Bitcoin", "Litecoin", "XRP", "Ethereum", "Monero", "Tron", "Dogecoin", "Tether", "Chainlink", "Stellar", "Cardano"];
var currentCrypto = "";
var guessesLeft = 7;
var lettersGuessed = [];

//function to get a random word

function getRandomCrypto() {

    var randomNum = Math.floor(Math.random() * cryptocurrencies.length);
    console.log("I'm thinking of the animal at position " + randomNum);

    // create an array that will get the word assocaiated with that random location
    var randomCrypto = cryptocurrencies[randomNum];
    console.log("The crypto I'm thinking of is " + randomCrypto);

    var currentCrypto = new Word(randomCrypto);
    console.log("The cryptocurrency I'm thinking of is ", currentCrypto);
    runGame();
}


function runGame() {
    inquirer.prompt({
        type: "input",
        message: "Choose a letter",
        name: "input"
    }).then(result => {
        let input = result.input;
        if (!lettersGuessed.includes(input)) {
            lettersGuessed.push(input);
            console.log(input);
            guessesLeft--;
        }
        // // Running the guessLetter function on each letter in currentCrypto
        // lettersGuessed.userGuess(input[0].toLowerCase());
        // // Checking if the user has won the game
        // if (lettersGuessed.stringWord().includes("_") && guessesLeft > 0) {
        //     runGame();
        // } else if (!lettersGuessed.stringWord().includes("_") && guessesLeft > 0) {
        //     console.log('you win');
        //     // displayWin();
        // } else if (guesses < 1) {
        //     console.log('you lose');
        //     // displayLoss();
        // }
    });
}

getRandomCrypto();
