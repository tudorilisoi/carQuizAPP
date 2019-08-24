let questionNumber = 0;
let score = 0;
const $CONTAINER = $(`#js-mainContent`)

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

function handleStartQuiz() {
    $('#start-button').on('click', ev => {
        ev.preventDefault()
        questionNumber = 0;
        score = 0;
        displayCurrentQuestion()
    })
}


function handleNextButton() {
    $('body').on('click', '.js-next-button', ev => {

        // TODO read the selected answer and update the score
        // please git pull
        ev.preventDefault()
        questionNumber++
        // questionNumber = questionNumber + 1;
        displayCurrentQuestion()
    })
}

function startQuiz() { }
function displayCurrentQuestion() {
    const currentQ = quizQuestions[questionNumber]

    const options = currentQ.answers.map(answerStr => {
        return `
    <option value="${answerStr}">${answerStr}</option>
    `
    })

    const htmlString = $(`
 <form>   
    <select>
    ${options.join('\n')}
    </select>
    <div>
        <input type="submit" value="Next" class="js-next-button" />
    </div>
</form>
`)
    $($CONTAINER).html(htmlString)

}

function changeScore() { }

function changeQuestionNumber() { }

function questionIncorrect() { }

function questionCorrect() { }

function updateScore() { }

function nextQuestion() { }

function restartQuiz() { }

const main = () => {
    handleNextButton()
    handleStartQuiz()
    startQuiz()
}

//when the DOM is ready
$(main)
