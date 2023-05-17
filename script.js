
const quizContainer = document.getElementById('quiz')
const submitButton = document.getElementById('submit')
const resultsContainer = document.getElementById('results')

const myQuestions = [
{
    question: "What is the capital of France?",
    answers: {
    a: "Paris",
    b: "London",
    c: "New York"
    },
    correctAnswer: "a"
},
{
    question: "What is the largest country in the world?",
    answers: {
    a: "Russia",
    b: "China",
    c: "United States"
    },
    correctAnswer: "a"
},
{
    question: "What is the currency of Japan?",
    answers: {
    a: "Yuan",
    b: "Euro",
    c: "Yen"
    },
    correctAnswer: "c"
}
];

function buildQuiz(){
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = []

        for(letter in currentQuestion.answers){
            answers.push(
                `<label><input type="radio" name="question${questionNumber}" value="${letter}" />${letter} :${currentQuestion.answers[letter]}</label>
                `
            )
        }
        //console.log(answers);
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>
            `
        )
    })
    //console.log(output);
    quizContainer.innerHTML = output.join('')
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers')

    let numCorrect = 0

    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber]
        // input[name=question1]:checked
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++
            answerContainers[questionNumber].style.color = 'green'

        } else {
            answerContainers[questionNumber].style.color = 'red'
        }
    })

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`
}

buildQuiz()

submitButton.addEventListener('click', showResults)
