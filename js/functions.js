// questions/réponses du quiz 
export const questions = [
    {
        question: "Qui est le mari de Beyoncé ?",
        answers: ["Tiakola", "Justin Timberlake", "Jay-z"],
        correct: 2
    },
    {
        question: "Combien y a t-il de popcorn dans un pot meduim ?",
        answers: ["5", "beaucoup", "ciel"],
        correct: 1
    },
    {
        question: "Quel est le meilleur album de SCH ?",
        answers: ["Tous", "Thriller", "13 organisé"],
        correct: 0
    }
];

// affichage question et réponses
export function showQuestion(questionIndex, setChoiceSelected) {
    const q = questions[questionIndex];
    const questionText = document.getElementById('question');
    const boxAnswers = document.getElementById('answers');

    questionText.textContent = q.question;
    boxAnswers.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.classList.add('btn', 'btn-outline-secondary', 'd-inline-block', 'mb-2');

        btn.addEventListener('click', () => {
            setChoiceSelected(index);
        });

        boxAnswers.appendChild(btn);
    });
}

// vérification réponse
export function updateScore(choiceSelected, questionIndex) {
    return questions[questionIndex].correct === choiceSelected ? 1 : 0;
}




