// Create an array with your favorite games as objects inside of the array. Each game object will represent one game.
// Each object will have the same properties. I recommend title, type, numberOfPlayers, rating, shortDescription. Please note, the naming convention of object properties is camelCase.
// You must have 3 or more games in the collection
// Prompt the user with a message like "I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game"
// Cast the prompt to a number (if possible)
// Using the plus sign as a concatenation operator, alert the user to you game. "You selected" + myGameArray[promptResponse -1 ].title + " which is a " + myGameArray[promptResponse - 1].type + " of game..." And so forth.
// Add your exercise files to your git repo and commit your changes. Push to github. Upload to your MCAD hosting and share a link to that url in this discussion. Ensure that URL is accessible and functional.

// title, type, numberOfPlayers, rating, shortDescription
const games = [
{title: 'Bingo', type: 'Chance', numberOfPlayers: 'Unlimted', rating: '10', shortDescription: 'Caller calls out letters with numbers and players fill out card based on what is called'},
{title: 'Hangman', type: 'Drawing', numberOfPlayers: '2', rating: '5', shortDescription: 'players battle each other to try and figure out what the word is and it\'s wrong, then a person is drawn'},
{title: 'Tic Tac Toe', type: 'Drawing', numberOfPlayers: '2', rating: '1', shortDescription: 'players work to mark x\'s and o\'x until the board is filled'}
]
console.log(games)
window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

window.alert("You selected" + myGameArray[promptResponse -1 ].title + " which is a " + myGameArray[promptResponse - 1].type + " of game...");