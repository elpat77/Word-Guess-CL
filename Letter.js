

//Construction or function for creating letters
// should display an underliying character 
// must define a string value to store the underlying character
// a boolean value that stores whether the letter has been guessed or not
// a function that returns the underlying character if the letter has been guessed
// a function that takes a character as an arguement and checks it against the underlying character
// updating the stored boolean value to true
function createLetters(letter) {
    this.letter = letter;
    this.guessed = false;
    this.showLetter = function () {
        if (this.letter === " ") {
            return " ";
        } else if (!this.guessed) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.checks = function (letterGuessed) {
        if (letterGuessed === this.letter) {
            this.guessed = true;
        }
    }
}
module.exports = createLetters
