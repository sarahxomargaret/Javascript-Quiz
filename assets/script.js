const question = document.querySelector('#question');
const choice = Array.from(document.querySelectorAll('#choice-text'));
const progressText = document.querySelector('#progressText');
const scores = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const time = document.querySelector('#time');
const incorrectAnswer = document.querySelector('#incorrectAnswer');
const selectedAnswer = ""
const selectedChoice = ""
var classToApply = ""

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

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionBar = 0
    score = 0
    allQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(allQuestions.length === 0 || questionBar > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign()
    }

    // questionBar++
    // progressText.innerText = question ;{questionBar} of ;{MAX_QUESTIONS}
    // progressBarFull.style.width = $[(questionBar/MAX_QUESTIONS) * 100]%

    questionCounter++
    progressText.innerText = `Question ${questionBar} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionBar/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random () * allQuestions.length)
    currentQuestion = allQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choice.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    allQuestions.splice(questionsIndex, 1)

    acceptedAnswers = true
}

choice.forEach(choice=> {
    choice.addEventListener('click', e => {
        if(!acceptedAnswers) return

        acceptedAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()