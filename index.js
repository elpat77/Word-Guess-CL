var inquirer = require("inquirer");
var Word = require("./Word");

var animals = ["turtle", "parrot", "dolphin", "elephant", "giraffe", "eagle"];


function showWords() {
    inquirer.prompt({
        type: "input",
        message: "Choose a letter",
        name: "letter",
    })

        .then(res => {
            console.log(animals);
        })
}
showWords() 