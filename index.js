let questionNumber = 0;
let score = 0;

/**
 *  the source of truth
 */
const quizQuestions = [
    
    {
        question: "1. Where is Honda's country of origin?",
        answers: [
            "India",
            "Japan",
            "South Korea",
            "Russia"
        ],
        correctAnswer: "Japan"
    },
    {
        question: "2. Where is BMW's country of origin?",
        answers: [
            "Germany",
            "Belgium",
            "Italy",
            "England"
        ],
        correctAnswer: "Germany"
    },
    {
        question: "3. Where is Porche's country of origin?",
        answers: [
            "Italy",
            "Japan",
            "France",
            "Germany"
        ],
        correctAnswer: "Germany"
    },
    {
        question: "4. What vehchile Brand is made in Italy?",
        answers: [
            "Mercedes-Benz",
            "Ford",
            "Fiat",
            "Peugot"
        ],
        correctAnswer: "Fiat"
    },
    {
        question: "5. Where does the SEAT brand originate from?",
        answers: [
            "Spain",
            "Ireland",
            "Russia",
            "South Korea"
        ],
        correctAnswer: "Spain"
    },

];

function setupStartQuizHandler(){
    $('#start-button').click(ev=>{
        questionNumber = 0;
        score = 0;
        displayCurrentQuestion()

    })
}

function startQuiz(){}

function changeScore(){} 
function displayCurrentQuestion(){

    const q = quizQuestions[questionNumber]



} 

function changeQuestionNumber(){}

function questionIncorrect(){}

function questionCorrect(){}

function updateScore(){}
    
function nextQuestion(){}

function restartQuiz(){}

