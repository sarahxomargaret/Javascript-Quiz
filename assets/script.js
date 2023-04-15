var quizContent = document.querySelector("#quiz");
var title = document.querySelector(".title");
var ruleText = document.querySelector(".rules");
var testEl = document.querySelector('#test');
var timeEl = document.querySelector('#timer');
var questionTextEl = document.querySelector('.questionText');
var questionOptionsEl = document.querySelector('.questionOptions');
var scoreEl = document.querySelector('#score');
var quizStart = document.querySelector(".start");
var correctEl = document.querySelector("#correct");
var wrongEl = document.querySelector("#wrong");
var scoreScreenEl = document.querySelector("#scoreinput");
var topButtonEl = document.querySelector(".highscores");
var topScoresEl = document.querySelector("#topScores");
var finalScore = document.querySelector('.scoreDisplay');
var signUpButton = document.querySelector('#signup');
var initialsInput = document.querySelector('.initials');
var time = 60;
var timeInterval = 0;
var userScore = 0;
var currentQuestion = 0;

var questionChoices = [
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
        answer: 'Declaration statements',
    },
    {
        question: "Which one of the following operators returns false if both values are equal?",
        choices: ["!", '!==', '!=', 'All of the above'],
        answer: '!=',
    },
    {
        question: "Which function is used to serialize an object into a JSON sting?",
        choices: ['stringify()','parse()','covert()','None of the above'],
        answer: 'stringify()',
    }
];

function correctAnswer() {
    console.log('right');
    userScore += 10;
    scoreEl.textContent = "Score: " + userScore;
    correctEl.textContent = "Correct";
    clearText(correctEl);
}


function wrongAnswer() {
    console.log('wrong');
    time -= 10;
    wrongEl.textContent = "Incorrect"
    clearText(wrongEl);
}

function clearText(el) {
    setTimeout(function () {
        el.textContent = "";
    }, 2000);
}


function setScore() {
    testEl.setAttribute("class", "hidden");
    timeEl.setAttribute("class", "hidden");
    scoreScreenEl.removeAttribute("class", "hidden");
    topButtonEl.textContent = "Back to start";
    topButtonEl.addEventListener("click", function(){
        window.location.reload();
    })
    finalScore.textContent = "Your final score is " + userScore;
}



function highScoreList() {
    quizContent.setAttribute("class", "hidden");
    testEl.setAttribute("class", "hidden");
    scoreScreenEl.setAttribute("class", "hidden");
    scoreEl.setAttribute("class", "hidden");
    timeEl.setAttribute("class", "hidden");
    topButtonEl.textContent = "Back to start";
    topButtonEl.addEventListener("click", function(){
        window.location.reload();
    })
    topScoresEl.removeAttribute("class", "hidden");
}

topButtonEl.addEventListener("click", highScoreList);


function questionStart () {
    if (time === 0){
        setScore();
    }
    questionOptionsEl.replaceChildren();
    questionTextEl.setAttribute("class", "title");
    questionTextEl.textContent = questionChoices[currentQuestion].question;
    for (var i = 0; i < 4; i++) {
        var answerChoice = questionChoices[currentQuestion].choices[i];
        var answerOption = document.createElement("button");
        answerOption.setAttribute("class", "questions");
        answerOption.textContent = answerChoice;
        questionOptionsEl.append(answerOption);
    }
}



questionOptionsEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        event.target.textContent === questionChoices[currentQuestion]["answer"] ? correctAnswer() : wrongAnswer();
    }
    currentQuestion++;
    if (currentQuestion < questionChoices.length){
        questionStart();
    } else {
        setScore();
        clearInterval;
    }
})

quizStart.addEventListener("click", function () {
    quizContent.setAttribute("Class", "hidden");
    testEl.removeAttribute("class", "hidden");
    scoreEl.removeAttribute("class", "hidden");
    timeEl.textContent = time + " seconds remaining";

    timeInterval = setInterval(function () {
        time--;
        timeEl.textContent = time + " seconds remaining";

    }, 1000)


    questionStart();


    signUpButton.addEventListener("click", function(event){
        event.preventDefault();
    
        var user = {
            initials: initialsInput.trim()
        };
    
        localStorage.setItem("user", JSON.stringify(user));
    });
    

});