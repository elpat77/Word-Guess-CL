var Letter = require("./Letter.js");


class Word {
    constructor(word) {
        this.word = word;
        this.letters = [];
        for (let i = 0; i < word.length; i++) {
            let letter = new Letter(word[i])
            this.letters.push(letter);
        }
        // console.log("the word is", word);
    }
    contains(letter) {
        return this.word.toLowerCase().includes(letter) ? true : false;
    }

    stringWord() {
        let wordString = "";
        for (let i = 0; i < this.letters.length; i++) {
            wordString = wordString + this.letters[i].getLetter() + ' ';
        }
        console.log("wordString", wordString);
        // return wordString;
    }

    userGuess(guess) {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].guessedLetter(guess);
        }
    }

    showWord() {
        var wordString = "";
        for (let i = 0; i < this.letters.length; i++) {
            wordString = wordString + this.letters[i].showLetter();
        }
        return wordString;
    }
}

module.exports = Word;