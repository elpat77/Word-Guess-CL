function Word() {
    this.words = ["food", "candy", "boy"];
    this.currentWord = '';
    this.blanksAndCorrect = [];
    this.wrongGuesses = [];
    this.correct = 0;
}

Word.prototype.selectWord = function () {
    const randomNum = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomNum];

    this.currentWord = randomWord;

    for (let index = 0; index < this.currentWord.length; index++) {
        this.blanksAndCorrect.push("_")

    }
};

Word.prototype.guess = function (letter) {
    let inWord = false;

    for (let i = 0; i < this.currentWord.length; i++) {
        if (letter === this.currentWord[i]) {
            this.blanksAndCorrect[i] = letter;
            this.correct++;
            inWord = true;

        }

    }
    if (inWord === false) {
        this.wrongGuesses.push(letter);
    }

};

const newGame = new Word();
newGame.selectWord();
newGame.guess("o");
console.log(newGame);

module.exports = Word;