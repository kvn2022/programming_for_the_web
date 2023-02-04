//Array objects that represent a question and answer.
const quizQA = [
    {question: "The Colosseum is located where?", answer: "Rome"},
    
    {question: "What civilization built the Chichen Itza?", answer: "The Mayans"},
    
    {question: "What is the oldest structure on the ancient list of the seven wonders?", answer: "The Great Pyramids of Giza"},
    
    {question: "What is the longest man made structure?", answer: "The Great Wall of China"},
    
    {question: "What was the statue of Zues at Olympia made out of?", answer: "Gold"},
]
//See array of quiz in console
console.log("Wonders of the World Quiz Questions and Answers Are:", quizQA)
console.log(quizQA.length);

//A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess.

const randomIdx = Math.round(Math.random() * quizQA.length - 1);
const answer = window.prompt("Lets take a quiz about the Wonders of the World! " + quizQA[randomIdx].question);
console.log("The question is ", quizQA[randomIdx].question);

window.alert("You answered " + answer + ". The correct answer was " + quizQA[randomIdx].answer + ".");
console.log("You answered " + answer + ". The correct answer was ", quizQA[randomIdx].answer + ".");
