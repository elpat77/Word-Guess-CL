//contains a word constructor that dependfs on the letter constructor. It should define:
// 1) an array of new letter objects representing the letters of the underlying word
// 2) a function that returns a string representing the word. This should call the function on each 
// letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
// 3) A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require("./Letter");

function createWord(wordString) {
    this.wordString = wordString;
    this.tempWord = [];
    this.createWord = function () {
        for (let i = 0; i < wordString.length; i++) {
            var newWord = new Letter(wordString[i]);
            this.tempWord.push(newWord);

        }
    }
}