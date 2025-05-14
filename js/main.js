// importation depuis functions.js
import {
    questions,
    showQuestion,
    updateScore
} from './functions.js';

// recup. elements du DOM
const startButton = document.getElementById('btn-start');
const restartButton = document.getElementById('btn-restart');
const containerQuiz = document.getElementById('quiz-screen');
const containerStart = document.getElementById('start-screen');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const containerResult = document.getElementById('result-screen');
const scoreResult = document.getElementById('score');

// variables relatives au quiz
let questionIndex = 0;
let score = 0;
let choiceSelected = null;

// màj variable choiceSelected
function setChoiceSelected(index) {
    choiceSelected = index;
}

// ecoute du clic sur le bouton "Commencer le quiz"
startButton?.addEventListener('click', () => {
    containerStart.classList.add('hidden');
    containerQuiz.classList.remove('hidden');
    showQuestion(questionIndex, setChoiceSelected);
});

// ecoute du clic sur le bouton "Suivant"
nextButton?.addEventListener('click', () => {
    if (choiceSelected === null) return;

    score += updateScore(choiceSelected, questionIndex);
    questionIndex++;
    choiceSelected = null;

    if (questionIndex < questions.length) {
        showQuestion(questionIndex, setChoiceSelected);
    } else {
        containerQuiz.classList.add('hidden');
        containerResult.classList.remove('hidden');
        scoreResult.textContent = `${score} / ${questions.length}`;
        restartButton.classList.remove('hidden');
    }
});

// ecoute du clic sur le bouton "valider"
submitButton?.addEventListener('click', () => {
    if (choiceSelected === null) return;

    const result = updateScore(choiceSelected, questionIndex);
    score += result;
    questionIndex++;
    choiceSelected = null;

    if (result === 1 && questionIndex < questions.length) {
        showQuestion(questionIndex, setChoiceSelected);
    } else {
        // fin du quiz (bonne ou mauvaise réponse)
        containerQuiz.classList.add('hidden');
        containerResult.classList.remove('hidden');
        scoreResult.textContent = `${score} / ${questions.length}`;
        restartButton.classList.remove('hidden');
    }
});

// ecoute du clic sur le bouton "recommencer"
restartButton?.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    choiceSelected = null;
    containerResult.classList.add('hidden');
    containerQuiz.classList.remove('hidden');
    showQuestion(questionIndex, setChoiceSelected);
});
