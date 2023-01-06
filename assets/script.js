questions = [
    {
        question: "In what decade was JavaScript invented?",
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

//The parameters for the quiz time
let gameTime = 59;
let quizTimer;
//=====================================================================
//Creating each section in JS
let body = document.body;

//Start with the "home-page"
const homePageSection = document.createElement("section");
homePageSection.setAttribute("id", "home-page");
body.appendChild(homePageSection);

//The child elements of the 'home-page'
const homeH1 = document.createElement("h1");
homeH1.setAttribute("id", "home-h1");
homeH1.innerText = `Javascript Quiz!`;
homePageSection.appendChild(homeH1);

//The first paragraph on the first page
const firstParagraphHomePage =  document.createElement("p");
firstParagraphHomePage.setAttribute("id", "first-paragraph-home-page");
firstParagraphHomePage.innerText = 'Welcome to the Ultimate JavaScript quiz! Can you answer five questions regarding JavaScript within 60 seconds?';
homePageSection.appendChild(firstParagraphHomePage);

//The second paragraph for the first page
const secondParagraphHomePage =  document.createElement("p");
secondParagraphHomePage.setAttribute("id", "second-paragraph-home-page");
secondParagraphHomePage.innerText = 'Any incorrect answers will doc your score by 10 seconds, so think carefully!';
homePageSection.appendChild(secondParagraphHomePage);

//The two buttons for the home page
const startGameButton = document.createElement("button");
startGameButton.setAttribute("id", "start-game-button");
startGameButton.innerText = "Start Game";
homePageSection.appendChild(startGameButton);

const highScoresButton = document.createElement("button");
highScoresButton.setAttribute("id", "high-scores-button");
highScoresButton.innerText = "High Scores";
homePageSection.appendChild(highScoresButton);

//Creating the main quiz section
const quizSection = document.createElement("section");
quizSection.setAttribute("id", "section");
body.appendChild(quizSection);
//The title of each question
const quizTitle = document.createElement("h1");
quizTitle.setAttribute("id", "title");
quizSection.appendChild(quizTitle);




// ===================================================================
//DOM elements being used
// const quizSection = document.getElementById("section");
// const startGameButton = document.getElementById("start-game-button");
// const homePageSection = document.getElementById("home-page");
const highScoresPage = document.getElementById("high-scores");
// const highScoresButton = document.getElementById("high-scores-button");
const scoreDisplay = document.getElementById("score");
const endPageDisplay = document.getElementById("end-page");
const rightOrWrong = document.getElementById("right-or-wrong");
const finalScore = document.getElementById("finalScore");
const highScoreSubmitButton = document.getElementById("high-score-submit-button");
const highScoreRecord = document.getElementById("high-score-record");
const submitButton = document.getElementById("btn");
const buttonArray = document.getElementsByClassName("button");
const goBackButtonArray = Array.from(document.getElementsByClassName("go-back-button"));

//Setting the count and score for the game
count = 0;
score = 0;

quizSection.style.display = 'none';

//Updates the next question from the above array
const updateQuestion = () => {
    if (count === 5 ) {
        return endPage();
    }
    rightOrWrong.style.display = 'none';
    scoreDisplay.style.color = "purple";
    scoreDisplay.innerText = `Current score: ${score}`;

    //Create the question title
    const quizTitle = document.createElement("h1");
    quizTitle.setAttribute("id", "title");
    quizTitle.innerText = questions[count].question;
    quizSection.appendChild(quizTitle);
    // title.innerText = questions[count].question;

    //Create the buttons for each question option
    // let q1 = document.createElement("button");
    // q1.setAttribute("id", "q1");
    // q1.setAttribute("class", "button");
    // q1.innerText = questions[count].answers[0];
    // quizSection.appendChild(q1);

    let question = [];
    for (let i = 1; i < 5; i++) {
        question[i] = document.createElement("button");
        question[i].setAttribute("id", `q${i}`);
        question[i].setAttribute("class", "button");
        question[i].innerText = questions[count].answers[i-1];
        quizSection.appendChild(question[i]);
    }
    // q1.innerText = questions[count].answers[0]
    // q2.innerText = questions[count].answers[1]
    // q3.innerText = questions[count].answers[2]
    // q4.innerText = questions[count].answers[3]
};

//Displays the next question in the array
const listenForUserSelection = () => {
    Array.from(buttonArray).forEach((button) => {
        button.addEventListener('click', (checkForCorrectAnswer))
    })
};

//Checks to see if the user selected the correct answer
const checkForCorrectAnswer = (event) => {
    console.log("CheckForCorrectAnswer firing")
    if (event.target.textContent === questions[count].rightAnswer) {
        count++
        score += 10
        rightOrWrong.style.display = 'block';
        rightOrWrong.style.color = "green";
        rightOrWrong.innerText = "Correct!"
        setTimeout(() => {
            if (count === 5) {
                return endPage();
            }
            updateQuestion();
        }, 1000);

    } else {
        count++
        rightOrWrong.style.display = 'block';
        rightOrWrong.style.color = "red"
        rightOrWrong.innerText = "Wrong! -10 seconds!";
        gameTime -= 10;
        setTimeout(() => {
            if (count === 5) {
                return endPage();
            }
            updateQuestion();
        }, 1000);
    }
}

//Brings the user to the ending page
const endPage = () => {
    stopTimer();
    gameTime = 59;
    quizSection.style.display = "none";
    endPageDisplay.style.display = "flex";

    document.getElementById("finalScore").innerHTML = score;
    count = 0;

    //Prompts the user to enter their name if their score beat the third highest high score
    if (score > localStorageHighScores[2].finalScore) {
        highScoreRecord.style.display = 'flex';
        submitButton.addEventListener('click', () => {
            endPageDisplay.style.display = "none";
            highScoresPage.style.display = 'flex';
        });
    }

    goBackButton();
};

//Returns the user to the home page
const goBackPage = () => {
    stopTimer();
    highScoresPage.style.display = 'none';
    endPageDisplay.style.display = "none";
    homePageSection.style.display = 'flex';
}

//Event listener for the "go back button"
const goBackButton = () => {
    goBackButtonArray.forEach((button) => {
        button.addEventListener('click', () => {
            goBackPage();
        })
    })
}

//Starts the timer
const startTimer = () => {
    quizTimer;
}

//stops the timer
const stopTimer = () => {
    document.getElementById("timer").innerText = `Begin!`;
    clearInterval(quizTimer);
}

//Writes to the high scores 
const setUpHighScores = () => {
    document.getElementById("high-scores-list1").innerText = `1) ${localStorageHighScores[0].playerName} : ${localStorageHighScores[0].finalScore}`
    document.getElementById("high-scores-list2").innerText = `2) ${localStorageHighScores[1].playerName} : ${localStorageHighScores[1].finalScore}`
    document.getElementById("high-scores-list3").innerText = `3) ${localStorageHighScores[2].playerName} : ${localStorageHighScores[2].finalScore}`
}

//Sets the dummy scores
const setDummyScore = () => {
    let dummyScore = {
        playerName: "loser",
        finalScore: 0
    }
    
    localStorageHighScores.push(dummyScore)
    localStorageHighScores.push(dummyScore)
    localStorageHighScores.push(dummyScore)
    
    setUpHighScores();
}

//Resets the high scores to their dummy scores (Loser: 10)
const resetHighScores = () => {
    localStorageHighScores = [];
    localStorage.clear();

    setDummyScore();

    setUpHighScores();
}

//The timer for the quiz
const tickingTimer = () => {
    if (gameTime >= 0) {
        timer.innerHTML = `:${gameTime}`;
        gameTime--;
    } else {
        clearInterval(tickingTimer);
        endPage();
    }
}

//Adds the score to local storage
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

    setUpHighScores();
}

startGameButton.addEventListener('click', (event) => {
    count = 0;
    score = 0;
    homePageSection.style.display = "none"
    quizSection.style.display = 'flex';
    quizTimer = setInterval(tickingTimer, 1000);
    updateQuestion();
    listenForUserSelection();
})

highScoresButton.addEventListener('click', () => {
    homePageSection.style.display = 'none';
    highScoresPage.style.display = 'flex';
    goBackButton();
})

// Adding to local storage
//This highScoresArray will reflect what is inside Local Storage
let highScoresArray = [];

let localStorageHighScores = JSON.parse(localStorage.getItem("MyScores"));

if (!localStorageHighScores) {
    localStorageHighScores = [];
}

//Set dummy high scores
setDummyScore();

//Limits the high Scores
const highScoresLimit = 3;

//Adding the score to the High Scores Page
const highScoresList = document.getElementById("high-scores-list");

//Submits the high scores
submitButton.addEventListener('click', addScore);

//resets the high scores
document.getElementById("clear-high-scores").addEventListener('click', resetHighScores);






















