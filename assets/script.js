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

const updateQuestion = () => {
    // console.log(count);
    if (count === 5 ) {
        return endPage();
    }
    rightOrWrong.style.display = 'none';
    scoreDisplay.innerText = `Current score: ${score}`;

    title.innerText = questions[count].question;

    q1.innerText = questions[count].answers[0]
    q2.innerText = questions[count].answers[1]
    q3.innerText = questions[count].answers[2]
    q4.innerText = questions[count].answers[3]
};

const checkForCorrectAnswer = (event) => {
    console.log("'Check for correct answer' function check")
    if (event.target.textContent === questions[count].rightAnswer) {
        console.log("Correct")
        count++
        console.log(`The count for a correct selection: ${count}`)
        score += 10
        // scoreDisplay.innerText = `Current score: ${score}`;
        // console.log(`This is the current score: ${score}`);
        rightOrWrong.style.display = 'block';
        rightOrWrong.style.color = "darkgreen";
        rightOrWrong.innerText = "Correct!"
        event.target.style.backgroundColor = "darkgreen";
        setTimeout(() => {
            event.target.style.backgroundColor = "purple";
            if (count === 5) {
                // event.stopImmediatePropagation();
                // event.preventDefault();
                return endPage();
            }
            updateQuestion();
        }, 1000);
    } else {
        // console.log("wrong answer")
        count++
        console.log(`the count after an incorrect selection:${count}`)
        rightOrWrong.style.display = 'block';
        rightOrWrong.style.color = "darkred"
        rightOrWrong.innerText = "Wrong! -10 seconds!";
        event.target.style.backgroundColor = "darkred";
        gameTime -= 10;
        setTimeout(() => {
            event.target.style.backgroundColor = "purple";
            if (count === 5) {
                // event.stopImmediatePropagation();
                // event.preventDefault();
                return endPage();
            }
            updateQuestion();
        }, 1000);
    }
}

const nextQuestion = () => {
    console.log("'nextQuestion()' function check")
    Array.from(buttonArray).forEach((button) => {
        button.addEventListener('click', (checkForCorrectAnswer))
    })
};

const endPage = () => {
    stopTimer();
    gameTime = 30;
    // removeEventListener(this.checkForCorrectAnswer);
    quizSection.style.display = "none";
    endPageDisplay.style.display = "flex";

    document.getElementById("finalScore").innerHTML = score;
    count = 0;

    goBackButton();

    if (score > localStorageHighScores[0].finalScore) {
        highScoreRecord.style.display = 'flex';
        submitButton.addEventListener('click', (event) => {
            endPageDisplay.style.display = "none";
            highScoresPage.style.display = 'flex';
        })
    }
};

const goBackPage = () => {
    // clearInterval(tickingTimer);
    stopTimer();
    highScoresPage.style.display = 'none';
    endPageDisplay.style.display = "none";
    homePageSection.style.display = 'flex';
}

const goBackButton = () => {
    goBackButtonArray.forEach((button) => {
        button.addEventListener('click', () => {
            goBackPage();
        })
    })
}

const stopTimer = () => {
    clearInterval(quizTimer);
}

const startTimer = () => {
    quizTimer;
}

const clearHighScores = () => {
    console.log("clear high scores function check")
    localStorageHighScores = [];
    localStorage.clear();

    let dummyScore = {
        playerName: "loser",
        finalScore: 0
    }
    
    localStorageHighScores.push(dummyScore);
    localStorageHighScores.push(dummyScore);
    localStorageHighScores.push(dummyScore);

    document.getElementById("high-scores-list1").innerText = `${localStorageHighScores[0].playerName} : ${localStorageHighScores[0].finalScore}`

    document.getElementById("high-scores-list2").innerText = `${localStorageHighScores[1].playerName} : ${localStorageHighScores[1].finalScore}`

    document.getElementById("high-scores-list3").innerText = `${localStorageHighScores[2].playerName} : ${localStorageHighScores[2].finalScore}`
}


const tickingTimer = () => {
    if (gameTime >= 0) {
        timer.innerHTML = `:${gameTime}`;
        gameTime--;
    } else {
        clearInterval(tickingTimer);
        quiz.endPage();
    }
}


let gameTime = 60;
let quizTimer;
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
const goBackButtonArray = Array.from(document.getElementsByClassName("go-back-button"));

const timer = document.getElementById("timer");

count = 0;
score = 0;

quizSection.style.display = 'none';

startGameButton.addEventListener('click', (event) => {
    count = 0;
    score = 0;
    homePageSection.style.display = "none"
    quizSection.style.display = 'flex';
    quizTimer = setInterval(tickingTimer, 1000);
    updateQuestion();
    nextQuestion();
})

highScoresButton.addEventListener('click', () => {
    homePageSection.style.display = 'none';
    highScoresPage.style.display = 'flex';
    goBackButton();
})

// Adding to local storage
//This highScores array will reflect what is inside Local Storage
let highScoresArray = [];

let localStorageHighScores = JSON.parse(localStorage.getItem("MyScores"));

if (!localStorageHighScores) {
    localStorageHighScores = [];
}

let dummyScore = {
    playerName: "loser",
    finalScore: 0
}

localStorageHighScores.push(dummyScore)
localStorageHighScores.push(dummyScore)
localStorageHighScores.push(dummyScore)

document.getElementById("high-scores-list1").innerText = `${localStorageHighScores[0].playerName} : ${localStorageHighScores[0].finalScore}`

document.getElementById("high-scores-list2").innerText = `${localStorageHighScores[1].playerName} : ${localStorageHighScores[1].finalScore}`

document.getElementById("high-scores-list3").innerText = `${localStorageHighScores[2].playerName} : ${localStorageHighScores[2].finalScore}`

const highScoresLimit = 3;

const addScore = (event) => {
    event.preventDefault();

    let playerScore = {
        playerName: document.getElementById("name").value,
        finalScore: score
    }
    localStorageHighScores.push(playerScore);
    // highScores.push(playerScore);
    console.log(localStorageHighScores);

    //Making sure the array is sorted
    localStorageHighScores.sort( (a, b) => {
        return b.finalScore - a.finalScore
    })

    //Making sure that there are not more than the top three entries
    localStorageHighScores.splice(3);

    //Permanently Updates our local storage high scores
    localStorage.setItem('MyScores', JSON.stringify(localStorageHighScores))

    //Here we get the first items in our local storage and set them to out high scores
    document.getElementById("high-scores-list1").innerText = `${localStorageHighScores[0].playerName} : ${localStorageHighScores[0].finalScore}`

    document.getElementById("high-scores-list2").innerText = `${localStorageHighScores[1].playerName} : ${localStorageHighScores[1].finalScore}`

    document.getElementById("high-scores-list3").innerText = `${localStorageHighScores[2].playerName} : ${localStorageHighScores[2].finalScore}`
}

//Adding the score to the High Scores Page
const highScoresList = document.getElementById("high-scores-list");

submitButton.addEventListener('click', addScore);

document.getElementById("clear-high-scores").addEventListener('click', clearHighScores);






















