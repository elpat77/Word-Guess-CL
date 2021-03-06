
//Construction or function for creating letters
// should display an underliying character 
// must define a string value to store the underlying character
// a boolean value that stores whether the letter has been guessed or not
// a function that returns the underlying character if the letter has been guessed
// a function that takes a character as an arguement and checks it against the underlying character
// updating the stored boolean value to true

class Letter {
    constructor(letter) {
        this.letter = letter;
        this.letterGuessed = false;
    }

    getLetter() {
        if (this.letterGuessed) {
            return this.letter;
        } else if (!this.letterGuessed) {
            return "_ ";
        }
    }

    getLetterGuessed() {
        return this.letterGuessed;
    }

    guessedLetter(guess) {
        if (guess.toLowerCase() === this.letter.toLowerCase()) {
            this.letterGuessed = true;
        }
    }

    showLetter() {
        return this.letter;
    }
}
// letter = new Letter('J');
// console.log(letter);

// letter.guessedLetter('W');
// console.log(letter);

// letter.guessedLetter('j');
// console.log(letter);

module.exports = Letter
