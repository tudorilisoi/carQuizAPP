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
        question: "3. Where is Porsche's country of origin?",
        answers: [
            "Italy",
            "Japan",
            "France",
            "Germany"
        ],
        correctAnswer: "Germany"
    },
    {
        question: "4. What vehicle Brand is made in Italy?",
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
        changeQuestionNumber()
        displayCurrentQuestion()
        displayScore()
        $('#start-title').hide()
    })
}


function handleNextButton() {
    // $('body').on('click', '.js-next-button', ev => {
    // TODO read the selected answer and update the score

    // please git pull
    // ev.preventDefault()
    questionNumber++
    // questionNumber = questionNumber + 1; 
    displayCurrentQuestion();
    changeQuestionNumber();
    // handleAnswerInput();
    // })
}

function displayCurrentQuestion() {
    const currentQ = quizQuestions[questionNumber]
    const input = currentQ.answers.map(answerStr => {
        return `
    <input class="choices" type="radio" name="one" required value="${answerStr}">${answerStr}</input><br>
    `
    })

    const htmlString = $(`
 <form id="myForm">  
    <h2>${quizQuestions[questionNumber].question}</h2>
    <p>
    ${input.join('\n')}
    </p>
    <div>
        <input type="submit" value="Next" class="js-next-button" />
    </div>
</form>
`)
    $($CONTAINER).html(htmlString)

}

function displayScore() {
    $('.score').text(score)
    //update the score in the heading by ++
}

function changeQuestionNumber() {
    $('.questionNumber').text(questionNumber + 1)
}

function handleAnswerInput() {
    $('body').on('click', '#js-submit-button', event => {
        if (questionNumber === 5){
            event.preventDefault()
            resultsPage()
        } else {
            event.preventDefault()
            handleNextButton()
    }
       
    })
    $('body').on('submit', '#myForm', event => {
        event.preventDefault()
        let choiceMade = $('input[name=one]:checked').val()
        if (choiceMade === quizQuestions[questionNumber].correctAnswer) {
            score++
            ifAnswerCorrect()
            displayScore()
        }
        else {
            ifAnswerIncorrect()
        }
    });
}



function ifAnswerCorrect() {
    let correctAnswer = `${quizQuestions[questionNumber].correctAnswer}`;
    $CONTAINER.html(` <section id="feedback-page" role="main">
              <h1>Correct Answer</h1>
                  <h2 >Correct! The right answer is: ${correctAnswer} </h2>
                      <img src="https://cdn.pixabay.com/photo/2017/06/11/11/46/auto-2392167__340.jpg" alt="Car doing burnout">
                      </section>
                      <button id="js-submit-button">Sumbit</button>
          `)
}

function ifAnswerIncorrect() {
    let correctAnswer = `${quizQuestions[questionNumber].correctAnswer}`;
    $CONTAINER.html(`<div id="incorrect-page" role="main">
<h1>Incorrect Answer</h1>
    <h2>Sorry, wrong answer! The right answer was ${correctAnswer}!</h2>
          <img src="https://i2-prod.mirror.co.uk/incoming/article7776851.ece/ALTERNATES/s615/Ferrari-458-Spider-wreck.jpg" alt="Wrecked Ferrari">
</div>
    <button id="js-submit-button">Submit</button>`);
}

function resultsPage() {
    $CONTAINER.html(`
    <section id="final-page">
      <h1>Final Score Results</h1>
      <h2>Final Score: ${score} out of 5</h2>
      <button id="js-restart-button">Try Again?</button>
    </section>`)
 }

function restartQuiz(){
    $('body').on('click', '#js-restart-button', event => {
        window.location.reload();
    })
}
 

const main = () => {
    // handleNextButton()
    handleStartQuiz()
    // startQuiz()
    //goToResultsPage()
    handleAnswerInput()
    restartQuiz()
}

//when the DOM is ready
$(main)