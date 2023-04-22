let mainContent = document.querySelector('.content-container');
let contentEl = document.querySelector(".content");
let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let timeEl = document.getElementById('time-id');
timeEl.textContent = timeOnClock;
let quizHomeEl = document.querySelector('.quiz-home');
let startPageHeader = document.getElementById('start-page-header');
let answerResult = document.getElementById('answer-result');
let answerBtn;
let currentQuestion;
let currentAnswers;
let xQuestion = 0;
let timeOnClock;
timeOnClock = 60
let timeInt = "";
let score = 0;
quizEnd.remove();
userScoreEl.remove();
let quizHome = document.createElement('button');
quizHome.textContent = 'Home';

//Array of questions
let questionAnswerObjArr = [
    {
        question: 'Commonly used data types DO Not Include:',
        answers: [
            'strings',
            'booleans',
            'alerts',
            'numbers',],
        answer: 'booleans',
    },
    {
        question: 'The condition in an if / else statement is enclosed with ______.',
        answers: [
            'quotes',
            'curly brackets',
            'parenthesis',
            'square brackets',],
        answer: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',],
        answer: 'all of the above',
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',],
        answer: 'all of the above',
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables.',
        answers: [
            'commas',
            'curly brackets',
            'quotes',
            'parenthesis',],
        answer: 'curly brackets',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to debugger is:',
        answers: [
            'JavaScript',
            'terminal/bash',
            'for loops',
            'console.log',],
        answer: 'for loops',
    },
]

function startQuiz() {
    timeInt = setInterval(startClock, 1000);
}

function startClock() {

    timeOnClock--;
    timeEl.textContent = timeOnClock;

    if (timeOnClock <= 0) {
        return endQuiz();
    }
}

function endQuiz() {
    clearInterval(timeInt);
    currentAnswers.remove();
    currentQuestion.remove();

    contentEl.append(quizEnd);

    let submitScore = document.querySelector(".submit-button");
    submitScore.addEventListener('click', saveScore);
}

function moveToQuestions() {
    startBtn.remove();
    quizStart.remove();
    startPageHeader.remove();

    var questionContainerEl = document.getElementById("question-container-id");
    var listOfAnswers = document.createElement('ol');
    var questionText = document.createElement('p');

    if (xQuestion === questionAnswerObjArr.length) {
        questionAnswerObjArr.answers = ["finished"];
        return endQuiz();
    }

    for (i = 0; i < questionAnswerObjArr[xQuestion].answers.length; i++) {

        answerBtn = document.createElement('button');
        answerBtn.textContent = questionAnswerObjArr[xQuestion].answers[i];
        answerBtn.addEventListener('click', handleSelectedAnswer);

        questionText.textContent = questionAnswerObjArr[xQuestion].question;
        currentQuestion = questionText;
        currentAnswers = listOfAnswers;

        listOfAnswers.append(answerBtn);
        questionContainerEl.append(questionText);
        questionContainerEl.append(listOfAnswers);
    }
}

function handleSelectedAnswer() {
    if (this.innerHTML == questionAnswerObjArr[xQuestion].answer) {
        answerResult.textContent = 'Correct!'

        score = (score + scoreInt)
        scoreEl.innerHTML = (score + "%")

    } else {
        timeOnClock -= 10;
        if (timeOnClock < 0) {
            timeOnClock = 0;
        }
        answerResult.textContent = ('Incorrect: The correct answer is ' + questionAnswerObjArr[xQuestion].answer)
    }
    currentAnswers.remove();
    currentQuestion.remove();
    xQuestion++
    moveToQuestions();
}

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('click', moveToQuestions);