var win = document.querySelector("win");
var lose = document.querySelector("lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var startCard = document.querySelector(".start-card");
var incorrectAnswer = document.querySelector("incorrect-answer")
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById("submit");
var questiontext = document.getElementById("questiontext");

var winCounter = 0;
var loseCounter = 0;
var isWin = 0;
var timer;
var timerCount;
var output = [];
var answers;


//init function is called the pages loads.
function init() {
    getWins();
    getLosses();
}

//the startGame function happens when the user clicks the start button
function startGame() {
    isWin = false;
    timerCount = 120; // SECONDS
    // prevents start button from being clicked when round is in progress
    startButton.disable = true;
    startCard.style.display = "none";
    startTimer();
    // renderquestions();
    document.getElementById('timerDisplay').innerHTML = '00', '+sec';
}

//the winGame function is when the win conditions are met
function winGame() {
    question.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disable = false;
    setWins()
}

// the loseGame function is announced when the timer reaches 0
function loseGame() {
    question.textContent = "GAME OVER";
    loseCounter++
    startButton.disable = false;
    setLosses()
}

// the setTimer funtion starts and stops the time and results in a winGame () and loseGame()
function startTimer() {
    //sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            //tests if win conditions are met
            if (isWin && timerCount > 0) {
                //clears interval and stop timer
                clearInterval(timer);
                winGame();
            }
        }
        //tests if time has run out
        if (timerCount === 0) {
            alert("Time is up!");
            //clear interval
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

//create questions on screen
function renderquestions() {
    //randomly pick questions from the question array
    //randomQuestion = myQuestions[Math.floor(Math.random() * questions.length)];

    // Add it to the DOM
    questiontext.textContent = myQuestions[0].question;

    // Set the h3's text to the question

    // add the h3  to the question area

    // create an ul element
    // 
    // LOOP
    // create an li element
    // set the li element's text to the first answer
    // add the li to the ul
    // REPEAT FOR ALL OTHER ANSWERS
    myQuestions.forEach( (currentQuestion))
    // define the click event listener

    // add the event listener to the ul

    // add the ul to the question area  

    // NOW check if correct or incorrect
    //if answer is correct
    if (userAnswer === question[i].correctAnswer) {
        numCorrect++;
    } else {
        //alert if the answer is wrong
        answerContainers[i].style.color ='red';
       }
    }
// correct questions out of total
// resultsContainer.innerHTML =numCorrect + 'out of' + questions.length;

// // on submit, show the results
// submitButton.onclick=function({
//    // showResults(questions,quizContainer);
// })


// display question and answers
var myQuestions = [
    {
        question: "What is JavaScript is a _____ ________language.",
        answers: [
            'a. five - thread',
            'b. three - thread',
            'c. single - thread',
            'd. mark up '],
        correctAnswer: 'c. single - thread'
    },

    {
        question: "What is JavaScript change ______ attribute values.",
        answers: [
            'a. CSS',
            'b. HTML',
            'c. line',
            'd. none of the above'],
        correctAnswer: 'b. HTML'
    },

    {
        question: "JavaScript statements are composed of:",
        answers: [
            'a. Expressions, Operations, Values, String, Objects',
            'b. Expressions, Operations, Comments, Values, Keywords',
            'c. Expressions, Operators, Comments, Values, Keywords',
            'd. Expression, Operators, Command, Keyword, Values '],
        correctAnswer: 'c. Expressions, Operators, Comments, Values, Keywords'
    },

    {
        question: "What are JavaScript Data Types:",
        answers: [
            'a. Number, Undefined, Object, String, Boolean',
            'b. None of them',
            'c. Numbers, Undefined, Objects, String, Boolean',
            'd. Number, Undefined, Objects, Strings, Booleans'],
        correctAnswer: 'a. Number, Undefined, Object, String, Boolean'
    },

    {
        question: "What does DOM stand for?",
        answers: [
            'a. Document Object Model',
            'b. Document Objects Model',
            'c. Download Object Model',
            'd. Download, Objectives, Models'],
        correctAnswer: 'a. Document Object Model'
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            'a. js',
            'b. JavaScript',
            'c. Script',
            'd. script'],
        correctAnswer: 'd. script'
    },

    {
        question: "How do you write Good Morning in an alert box?",
        answers: [
            'a. alert(Good morning)',
            'b. message(Good morning)',
            'c. msg (Good morning)',
            'd. alert(Good morning)'],
        correctAnswer: 'd. alert("Good morning)',

    }
]

// // for the questions
// generateQuiz(myQuestions, questions, , resultsContainer, submitButton);
// function showQuestions(questions, quizContainer);
// for (var i = 0; i < questions.length; i++)
//     answers = [];
// for (letter in questions[i].answers)

//     // show the correct number out of total
//     resultsCard.innerHTML = numCorrect + 'out of' + question.length;

//updates win count on screen
startButton.addEventListener("click",startGame);
// submitButton.onclick = function () {
    // showResults(question, quizCard, resultsContainer);
//}