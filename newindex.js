var inquirer = require("inquirer");
var storeCB = '';

var animals = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];
console.log("Starting new game");

// create an array that will get a random location
var randomNum = Math.floor(Math.random() * animals.length);
console.log("I'm thinking of the animal at position " + randomNum);

// create an array that will get the word assocaiated with that random location
var randomAnimal = animals[randomNum];
console.log("The animal I'm thinking of is " + randomAnimal);

// create a new variable that counts the letters in the random word, 
// converts and displays that number into a _ character  
var chosenWord = [];
for (var i = 0; i < randomAnimal.length; i++) {
    chosenWord[i] = "_";
}
console.log(chosenWord);

const chooseLetter = () => {
    inquirer.prompt({
        type: 'input',
        message: 'Choose a letter',
        name: "letter"
    })
        .then(res => {
            for (var i = 0; i < randomAnimal.length; i++) {
                if (randomAnimal[i] === storeCB) {
                    chosenWord[i] = storeCB;
                    console.log("chosenWord " + chosenWord.join(' '));
                    console.log(chosenWord);
                    chooseLetter(storeCB);
                }
                else if (chosenWord.join('') === randomAnimal) {
                    alert('you won');
                }
            }
        });
};

const myApp = () => {
    let storeCB = ''
    chooseLetter(res => {
        storeCB = res;
        console.log("chosen letter", storeCB);
        for (var i = 0; i < randomAnimal.length; i++) {
            if (randomAnimal[i] === storeCB) {
                chosenWord[i] = storeCB;
                console.log("chosenWord " + chosenWord.join(' '));
                console.log(chosenWord);
                chooseLetter(storeCB);
            }
            else if (chosenWord.join('') === randomAnimal) {
                alert('you won');
            }
        }
    });
}
chooseLetter();
