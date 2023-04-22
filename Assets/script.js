let mainContent = document.querySelector('.content-container');
let contentEl = document.querySelector(".content");
let startBtn = document.getElementById("start-button");
let quizStart = document.getElementById('quiz-start');
let timeEl = document.getElementById('time-id');
timeEl.textContent = timeOnClock; 
let quizHomeEl = document.querySelector('.quiz-home');
let startPageHeader = document.getElementById('start-page-header');
let answerResult = document.getElementById('answer-result');
let answerBtn ;
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