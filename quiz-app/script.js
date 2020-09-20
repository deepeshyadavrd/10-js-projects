const quizData = [
    {
        question: 'How old is Deepesh',
        a: '10',
        b: '17',
        c: '24',
        d: '112',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'PHP',
        correct: 'a'
    },
    {
        question: 'Who is PM of India?',
        a: 'Suresh',
        b: 'Narendra Modi',
        c: 'Mandeep',
        d: 'Umesh',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Cascading Style Sheet',
        c: 'JavaScript Opject Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'What year JavaScript launched:',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of above',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    question.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    //currentQuiz++;
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();
    //console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
    
});