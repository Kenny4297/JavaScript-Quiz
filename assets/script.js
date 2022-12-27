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
        Array.from(buttonArray).forEach((button) => {
            button.addEventListener('click', (event) => {
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
                            event.stopImmediatePropagation();
                            event.preventDefault();
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
        quizSection.style.display = "none";
        endPageDisplay.style.display = "flex";
        document.getElementById("finalScore").innerHTML = score;

    }

    goBack = () => {
        highScoresPage.style.display = 'none';
        endPageDisplay.style.display = "none";
        homePageSection.style.display = 'flex';
    }

    LowestHighScore = () => {
        let individualHighScores = Object.values(highScoresObject);
        let minHighScore = Math.min(...individualHighScores)
        return minHighScore;
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


// document.getElementById('textbox_id').value to get the value of desired box

const buttonArray = document.getElementsByClassName("button");
const goBackButtonArray = document.getElementsByClassName("go-back-button");

//First page 

count = 0;
score = 0;
highScoresObject = {'ked': 9, 'sarah': 4};

quizSection.style.display = 'none';

// title.innerText = "Javascript Quiz"
// paragraph.innerText = "This is a javascript quiz, and here are the instructions"

startGameButton.addEventListener('click', () => {
    homePageSection.style.display = "none"
    quizSection.style.display = 'flex';
    quiz.updateQuestion();
    quiz.nextQuestion();
})

highScoresButton.addEventListener('click', () => {
    // console.log(homePageSection);
    homePageSection.style.display = 'none';
    highScoresPage.style.display = 'flex';
    console.log("high scores check");
});


Array.from(goBackButtonArray).forEach((button) => {
    console.log("event listener button back check")
    button.addEventListener('click', () => {
        quiz.goBack();
    })
})

// Adding to local storage
let totalScore = [];

const addScore = (event) => {
    event.preventDefault();
    let score = {
        playerName: document.getElementById("name").value,
        score: document.getElementById("score").value
    }
    totalScore.push(score);
    console.log(score);

    localStorage.setItem("MyScores", JSON.stringify(totalScore));
    console.log(`local storage: ${localStorage.getItem("MyScores")}`)
}

document.getElementById("btn").addEventListener('click', addScore);



















