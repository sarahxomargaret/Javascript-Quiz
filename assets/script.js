const question = document.querySelector('#question');
const choice = Array.from(document.querySelectorAll('#.choice-text'));
const progressText = document.querySelector('#progressText');
const scores = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const time = document.querySelector('#time');
const incorrectAnswer = document.querySelector('#incorrectAnswer');
const selectedAnswer = ""
const selectedChoice = ""

let currentQuestion = {}
let acceptedAnswers = true
let score = 0
let questionBar = 0
let allQuestions = []

// questions

var questions = [
    {
        question: "Which of the following keywords is used to define a variable?",
        choice1: "var",
        choice2: "let",
        choice3: "A and B",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question: "Arrays are defined by which of the following statements",
        choice1: "Ordered list of values",
        choice2: "Ordered list of objects",
        choice3: "Ordered list of strings",
        choice4: "Ordered list of functions",
        answer: 1,   
    },
    {
        question: "The 'function' and 'var' are known as:",
        choice1: "Keywords",
        choice2: "Datatypes",
        choice3: "Declaration statements",
        choice4: "Prototypes",
        answer: 3,
    },
    {
        question: "Which one of the following operators returns false if both values are equal?",
        choice1: "!",
        choice2: "!==",
        choice3: "!=",
        choice4: "All of the above",
        answer: 3,
    },
    {
        question: "Which one of the following symbols is used for creating comments?",
        choice1: "\\",
        choice2: "//",
        choice4: "\**/",
        answer: 2,
    }
]