const myFavMovies = ['Devil Wears Prada', 'Baby Boom', 'Home Alone', 'You\'ve Got Mail', 'Monsters Inc.'];
console.log("My Favorite Movies Are:", myFavMovies);
let userMovie = prompt("What is your favorite movie?")
myFavMovies.push(userMovie);
console.log("Our Favorite Movies Combined:", myFavMovies.toString());

// console.log(mergedBike);
//Let's make a program: asking a random question
// const questions = [
    // { question: "red + blue", answer: "purple" },
    // { question: "2 + banana", answer: "2banana" },
    // {question: "adding white", answer: "tint" }
// ]
// break it down into steps
// 1. determine how long question set is
// const questionLength = questions.length;
// 2. Choose a pseudo-random number between 0 and the length of the array
// const questionIndex = Math.floor(Math.random() * questionLength);
// 3. Display question with window.promopt
// const answer = window.prompt(question[questionIndex].question);
// if (answer === questions[questionIndex].answer) {
    // window.alert("you win");
// }