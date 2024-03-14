const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Hamburg", "Paris", "Frankfurt", "Berlin"],
        correctAnswer: "Berlin"
    },
    {
        question: "What is the capital of Spain?",
        options: ["Valencia", "Madrid", "Berlin", "Rome"],
        correctAnswer: "Madrid"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Paris", "Berlin", "Venice"],
        correctAnswer: "Rome"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Nagoya", "Sapporo"],
        correctAnswer: "Tokyo"
    }
];
let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex].question;
    const options = questions[currentQuestionIndex].options;
    document.getElementById("question").textContent = question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    for (let i = 0; i < options.length; i++) {
        const option = document.createElement("div");
        option.textContent = options[i];
        option.classList.add("option");
        option.addEventListener("click", () => checkAnswer(i));
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedAnswerIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const selectedOption = document.getElementsByClassName("option")[selectedAnswerIndex];
    const optionsContainer = document.getElementById("options");
    if (selectedAnswerIndex === correctAnswer) {
        selectedOption.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        selectedOption.style.backgroundColor = "red";
        const correctOption = document.getElementsByClassName("option")[correctAnswer];
        correctOption.style.backgroundColor = "green";
    }
    optionsContainer.removeEventListener("click", loadQuestion);
    optionsContainer.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
            showResults();
        } else {
            loadQuestion();
        }
    });
}

function showResults() {
    const quizContainer = document.getElementsByClassName("quiz-container")[0];
    quizContainer.style.display = "none";
    const resultsContainer = document.createElement("div");
    resultsContainer.classList.add("results-container");
    resultsContainer.textContent = `You answered ${correctAnswers} out of ${questions.length} questions correctly`;
    document.body.appendChild(resultsContainer);
}

loadQuestion();