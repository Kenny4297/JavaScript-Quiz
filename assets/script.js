class Quiz {
    constructor () {}

    questions = [
        {
            question: "In what decade was Javascript invented?",
            answers: ["1980", "1990", "2000", "2020"],
            rightAnswer: "1990"
        },

        {
            question: "What kind of loop is best to use when iterating through a string?",
            answers: ["if...else", "for...while", "for", "do...while"],
            rightAnswer: "for"
        },

        {
            question: "Promises are real time representations of what?",
            answers: ["loops", "if...then statements", "variables", "functions"],
            rightAnswer: "if...then statements"
        },

        {
            question: "Select the built in JavaScript method:",
            answers: [".toMain()", ".withDecor()", ".toBold()",".toUppercase()"],
            rightAnswer: ".toUppercase()"
        },

        {
            question: "JavaScript runs on what built in browser engine?",
            answers: ["V8", "C++", "Diesel", "Tesla"],
            rightAnswer: "V8"
        },
    ]

    updateQuestion = () => {
        // console.log(count);
        if (count === 5 ) {
            return this.endPage();
        }
        rightOrWrong.style.display = 'none';
        scoreDisplay.innerText = `Current score: ${score}`;

        title.innerText = this.questions[count].question;
    
        q1.innerText = this.questions[count].answers[0]
        q2.innerText = this.questions[count].answers[1]
        q3.innerText = this.questions[count].answers[2]
        q4.innerText = this.questions[count].answers[3]
    };

    nextQuestion = () => {
        console.log(`Count count from "nextQuestion": ${count}`)
        Array.from(buttonArray).forEach((button) => {
            button.addEventListener('click', (event) => {
                console.log("Event listener loop count")
                if (event.target.textContent === this.questions[count].rightAnswer) {
                    console.log("Correct")
                    count++
                    score += 10
                    scoreDisplay.innerText = `Current score: ${score}`;
                    console.log(`This is the current score: ${score}`);
                    rightOrWrong.style.display = 'block';
                    rightOrWrong.style.color = "darkgreen";
                    rightOrWrong.innerText = "Correct!"
                    event.target.style.backgroundColor = "darkgreen";
                    setTimeout(() => {
                        event.target.style.backgroundColor = "purple";
                        if (count === 5) {
                            // event.stopImmediatePropagation();
                            // event.preventDefault();
                            return this.endPage();
                        }
                        this.updateQuestion();
                    }, );
                } else {
                    console.log("wrong answer")
                    count++
                    rightOrWrong.style.display = 'block';
                    rightOrWrong.style.color = "darkred"
                    rightOrWrong.innerText = "Wrong!";
                    event.target.style.backgroundColor = "darkred";
                    gameTime -= 10;
                    setTimeout(() => {
                        event.target.style.backgroundColor = "purple";
                        if (count === 5) {
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return this.endPage();
                        }
                        this.updateQuestion();
                    }, );
                }
            })
        })
    };

    endPage = () => {
        this.stopTimer();
        quizSection.style.display = "none";
        endPageDisplay.style.display = "flex";
        // if (gameTime <= 0) {
        //     document.getElementById("you-lose").innerText = "You lose!"
        //     document.getElementById("finalScore").innerHTML = score;
        // }
        // document.getElementById("you-lose").innerText = "You Win!"

        document.getElementById("finalScore").innerHTML = score;
        count = 0;

        if (score > Math.min(highScores)) {
            highScoreRecord.style.display = 'flex';
            submitButton.addEventListener('click', (event) => {
                endPageDisplay.style.display = "none";
                highScoresPage.style.display = 'flex';
            })
        }


    }

    goBack = () => {
        clearInterval(tickingTimer);
        this.stopTimer();
        highScoresPage.style.display = 'none';
        endPageDisplay.style.display = "none";
        homePageSection.style.display = 'flex';
    }

    LowestHighScore = () => {
        let individualHighScores = Object.values(highScoresObject);
        let minHighScore = Math.min(...individualHighScores);
        return minHighScore;
    }

    stopTimer = () => {
        clearInterval(quizTimer);
    }
};

const quiz = new Quiz();

const quizSection = document.getElementById("section");
const startGameButton = document.querySelector("#start-game-button");
const homePageSection = document.querySelector("#home-page");
const highScoresPage = document.querySelector("#high-scores");
const highScoresButton = document.getElementById("high-scores-button");
const scoreDisplay = document.getElementById("score");
const endPageDisplay = document.getElementById("end-page");
const rightOrWrong = document.getElementById("right-or-wrong");
const highScoresInput = document.getElementById("high-scores-input");
const finalScore = document.getElementById("finalScore");
const topScores = document.getElementById("top-scores");
const highScoreSubmitButton = document.getElementById("high-score-submit-button");
const addHighScorePrompt = document.getElementById("add-high-score-prompt");
const highScoreRecord = document.getElementById("high-score-record");
const submitButton = document.getElementById("btn");

const buttonArray = document.getElementsByClassName("button");
const goBackButtonArray = document.getElementsByClassName("go-back-button");

const timer = document.getElementById("timer");

//First page 

count = 0;
score = 0;

quizSection.style.display = 'none';

// title.innerText = "Javascript Quiz"
// paragraph.innerText = "This is a javascript quiz, and here are the instructions"

startGameButton.addEventListener('click', (event) => {
    count = 0;
    gameTime = 3;
    homePageSection.style.display = "none"
    quizSection.style.display = 'flex';
    quizTimer;
    quiz.updateQuestion();
    quiz.nextQuestion();
})

highScoresButton.addEventListener('click', () => {
    homePageSection.style.display = 'none';
    highScoresPage.style.display = 'flex';
});

//WHY IS THIS ACTIVE IF THE BUTTON IS NOT AVAILABLE
Array.from(goBackButtonArray).forEach((button) => {
    console.log("event listener button back check")
    button.addEventListener('click', () => {
        // endPageDisplay.style.display = 'none';
        quiz.goBack();
    })
})

// Adding to local storage

//This highScores array will reflect what is inside Local Storage
let highScores = [];

const addScore = (event) => {
    event.preventDefault();
    let playerScore = {
        playerName: document.getElementById("name").value,
        finalScore: score
    }
    highScores.push(playerScore);
    console.log(playerScore);

    // localStorage.setItem("MyScores", JSON.stringify(highScores));
    localStorage.setItem(playerScore.playerName, playerScore.finalScore)

    // console.log(`local storage: ${localStorage.getItem("MyScores")}`);
    
    // highScores = localStorage.getItem("MyScores");

    homePageSection.style.display = 'none';
    highScoresPage.style.display = 'flex';

    // topScores.innerText = showScores;
    // topScores.innerText = localStorage.getItem("MyScores");
    topScores.innerText = JSON.stringify(localStorage);
}

submitButton.addEventListener('click', addScore);

let gameTime = 3;

const tickingTimer = () => {
    if (gameTime >= 0) {
        timer.innerHTML = `:${gameTime}`;
        gameTime--;
    } else {
        clearInterval(tickingTimer);
        quiz.endPage();
    }
}

const quizTimer = setInterval(tickingTimer, 1000);




















