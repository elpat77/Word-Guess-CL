// Dependencies
var inquirer = require("inquirer");
var Word = require("./Word");


//global variables and word array
var cryptocurrencies = ["Bitcoin", "Litecoin", "XRP", "BinanceCoin", "Ethereum", "Monero", "Tron", "Dogecoin", "Tether", "Chainlink", "Stellar", "Cardano"];
var guessesLeft = 7;
var lettersGuessed = [];


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
                "\nYour total number of guesses is: " + guessesLeft +
                "\n\n*******************************\n\n" + "The cryptocurrency is: " + currentCrypto.showWord() + "\n\nChoosse a letter",
            name: "input"
        })
            .then(result => {
                let input = result.input;
                if (!lettersGuessed.includes(input)) {
                    lettersGuessed.push(input);
                    currentCrypto.userGuess(input);
                    // console.log(lettersGuessed);
                    // console.log(guessesLeft);
                    // console.log(currentCrypto);
                    if (!currentCrypto.contains(input)) {
                        guessesLeft--;
                        console.log("Sorry,", input, "is incorrect, try again!");
                        console.log("You have", guessesLeft, "guesses left")
                    }
                    if (guessesLeft = 0) {
                        console.log("Sorry game over, try again!");
                        // runGame();
                    }
                    if (!currentCrypto.done()) {
                        runGame();
                    }


                }
            });
    }
}

getRandomCrypto()
