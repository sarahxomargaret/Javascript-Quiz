const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choices'));
const scores = document.querySelector('#scores');
const time = document.querySelector('#time');
const incorrectAnswer = document.querySelector('#incorrectAnswer');
var startBtn = document.getElementById('start')
var homeContainer = document.getElementById('home')
var quizContainer = document.getElementById('quiz')

var index = 0
let score = 0


// questions

var questions = [
    {
        question: "Which of the following keywords is used to define a variable?",
        choices: ["var", "let", "A and B", "None of the above"],
        answer: "A and B",
    },
    {
        question: "Arrays are defined by which of the following statements",
        choices: ["Ordered list of values", 'Ordered list of objects', "Ordered list of strings", "Ordered list of functions"],
        answer: "Ordered list of values",   
    },
    {
        question: "The 'function' and 'var' are known as:",
        choices: ["Keywords", "Datatypes", "Declaration statements", "Prototypes"],
        answer: 'Declaration states',
    },
    {
        question: "Which one of the following operators returns false if both values are equal?",
        choices: ["!", '!==', '!=', 'All of the above'],
        answer: '!=,'
    },
    {
        question: "Which function is used to serialize an object into a JSON sting?",
        choices: ['stringify()','parse()','covert()','None of the above'],
        answer: 'stringify()',
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

var startGame = function(){
//  hide the home container
homeContainer.classList.add('hidden')
// display the questions container
quizContainer.classList.remove('hidden')
// start the timer

// run question function
runQuestion()
}

function runQuestion(){
    quizContainer.innerHTML= ''
    // create    
    var h1El = document.createElement('h1')

    // add
    h1El.textContent = questions[index].question 


    // append
    quizContainer.append(h1El)

    // for (let i = 0; i < arrayOfObjs[index].foods.length; i++) {
    //     // create
    //     var btnEl = document.createElement('button')

    //     // add
    //     btnEl.textContent = arrayOfObjs[index].foods[i]
    //     btnEl.addEventListener('click', checkValue)

    //     // append
    //     firstContainer.append(btnEl)

    // }
}


// create event listener to start the game
startBtn.addEventListener('click', startGame)