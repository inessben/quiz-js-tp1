// questions / reponses du quiz 
export const questions = [
    {
        question: "Qui est le mari de Beyoncé ?",
        answers: ["Tiakola", "Justin Timberlake", "Jay-Z"],
        correct: 2
    },
    {
        question: "Combien y a-t-il de popcorns dans un pot medium ?",
        answers: ["5", "Beaucoup", "Ciel"],
        correct: 1
    },
    {
        question: "Quel est le meilleur album de SCH ?",
        answers: ["Tous", "Thriller", "13 Organisé"],
        correct: 0
    }
];

// affichage de la question et des réponses
export function showQuestion(questionIndex, setChoiceSelected) {
    const q = questions[questionIndex];
    const questionText = document.getElementById('question');
    const boxAnswers = document.getElementById('answers');

    if (!questionText || !boxAnswers) return;

    questionText.textContent = q.question;
    boxAnswers.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.classList.add('btn', 'btn-outline-secondary', 'd-inline-block', 'fs', 'mb-2');

        btn.addEventListener('click', () => {
            setChoiceSelected(index);
        });

        boxAnswers.appendChild(btn);
    });
}

// verification de la réponse
export function updateScore(choiceSelected, questionIndex) {
    return questions[questionIndex].correct === choiceSelected ? 1 : 0;
}
