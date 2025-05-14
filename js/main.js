// importation depuis functions.js
import {
    questions,
    showQuestion,
    updateScore
} from './functions.js';

// recuperation elements du DOM
const startButton = document.getElementById('btn-start');
const restartButton = document.getElementById('btn-restart');
const containerQuiz = document.getElementById('quiz-screen');
const containerStart = document.getElementById('start-screen');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const containerResult = document.getElementById('result-screen');
const scoreResult = document.getElementById('score');

// variables relative au quiz
let questionIndex = 0;
let score = 0;
let choiceSelected = null;

// màj de la variables choiceSelected
function setChoiceSelected(index) {
    choiceSelected = index;
}

// ecoute au clic sur le button "commencer le quiz"
startButton.addEventListener('click', () => {
    containerStart.classList.add('hidden');
    containerQuiz.classList.remove('hidden');
    showQuestion(questionIndex, setChoiceSelected);
});

// ecoute au clic sur le button "suivant"
nextButton.addEventListener('click', () => {
    score += updateScore(choiceSelected, questionIndex);
    questionIndex++;
    choiceSelected = null;

    if (questionIndex < questions.length) {
        showQuestion(questionIndex, setChoiceSelected);
    } else {
        containerQuiz.classList.add('hidden');
        containerResult.classList.remove('hidden');
        scoreResult.textContent = score;
        restartButton.classList.remove('hidden');
    }
});

// ecoute au clic sur le button "valider"
submitButton.addEventListener('click', () => {
    const result = updateScore(choiceSelected, questionIndex);

    if (result === 1) {
        score += result;
        questionIndex++;
        choiceSelected = null;

        if (questionIndex < questions.length) {
            showQuestion(questionIndex, setChoiceSelected);
        } else {
            containerQuiz.classList.add('hidden');
            containerResult.classList.remove('hidden');
            scoreResult.textContent = score;
            restartButton.classList.remove('hidden');
        }
    }
    else {
        // reponse incorrecte => fin du quiz => possibilite de restart
        containerQuiz.classList.add('hidden');
        containerResult.classList.remove('hidden');
        scoreResult.textContent = score;
        restartButton.classList.remove('hidden');
    }
});

// ecoute au clic sur le button "recommencer"
restartButton.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    choiceSelected = null;
    containerResult.classList.add('hidden');
    containerQuiz.classList.remove('hidden');
    showQuestion(questionIndex, setChoiceSelected);
});

