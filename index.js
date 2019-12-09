// Dependencies
var inquirer = require("inquirer");
var Word = require("./Word");


//global variables and word array
var cryptocurrencies = ["Bitcoin", "Litecoin", "XRP", "BinanceCoin", "Ethereum", "Monero", "Tron", "Dogecoin", "Tether", "Chainlink", "Stellar", "Cardano"];
var guessesLeft = 10;

//function to get a random word
function getRandomCrypto() {
    var randomNum = Math.floor(Math.random() * cryptocurrencies.length);
    // console.log("I'm thinking of the letter at position " + randomNum);
    var currentCrypto = new Word(cryptocurrencies[randomNum]);
    // console.log("The cryptocurrency I'm thinking of is ", currentCrypto);
    runGame();



    function runGame() {
        inquirer.prompt({
            type: "input",
            message: "\n\n*******************************\n\n" + "Welcome! I'm thinking of a cryptocurrency" + "\nTry to guess which one it is!" +
                "\nYour remaining number of guesses is: " + guessesLeft +
                "\n\n*******************************\n\n" + "The cryptocurrency is: " + currentCrypto.showWord() + "\n\nChoosse a letter",
            name: "input"
        })
            .then(answers => {
                if (!currentCrypto.showWord().includes(answers.input)) {
                    guessesLeft--;
                }
                // Running the guessLetter function on each letter in currentCrypto
                currentCrypto.userGuess(answers.input);
                // Checking if the user has won the game
                if (currentCrypto.showWord().includes("_") && guessesLeft > 0) {
                    runGame();
                } else if (!currentCrypto.showWord().includes("_") && guessesLeft >= 0) {
                    console.log('\nCongratulations, you win!');
                    console.log('The cryptocurrency was: ', currentCrypto.showWord(), "\n");
                } else if (guessesLeft < 1) {
                    console.log('\nYou have', guessesLeft, 'guesses left')
                    console.log('\nGame over! Please try again\n');

                }
            });
    }
}

getRandomCrypto()
