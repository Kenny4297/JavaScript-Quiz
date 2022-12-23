class JavaScriptQuiz {

    // var questions = [
    //     {
    //         questions: "xxxxxxx",
    //         answers: [
    //             { text: "xxxxxx", isCorrect: true }
    //         ]
    //     }
    // ]

    constructor() {}
        questions = {
            question1: "In what decade was Javascript invented?",
            question2: "What kind of loop is best to use when iterating through a string?",
            question3: "Promises are real time representations of what?",
            question4: "Select the built in JavaScript method:",
            question5: "JavaScript runs on what built in browser engine?"
        };
    
        firstQuestionChoices = {
            choice1: '1980',
            choice2: '1990', 
            choice3: '2000',
            choice4: '2010'};

        secondQuestionChoices = {
            choice1: "if...else",
            choice2: "for...while",
            choice3: "for",
            choice4: "do...while"
        };


        thirdQuestionChoices = {
            choice1: "loops",
            choice2: "if...then statements",
            choice3: "variable",
            choice4: "functions"
        };

        fourthQuestionChoices = {
            choice1: ".toMain()",
            choice2: ".withDecor()",
            choice3: ".toBold()",
            choice4: ".toUppercase()"
        };

        fifthQuestionChoices = {
            choice1: "V8",
            choice2: "C++",
            choice3: "Diesel",
            choice4: "Tesla"
        };

        answerArray = ["1990", "for...while", "if...then statements", ".toUppercase()", "V8"]
    };



const quiz = new JavaScriptQuiz();

// const page = document.getElementById("page")
const questionTitle = document.getElementById("question-title");
const q1 = document.getElementById("c1");
const q2 = document.getElementById("c2");
const q3 = document.getElementById("c3");
const q4 = document.getElementById("c4");
choicesArray = [q1, q2, q3, q4];

const homePage = document.getElementById("home");

const questionPage = document.getElementById("page");

const startGame = document.getElementById("start-game-button");

startGame.addEventListener('click', () => {
    homePage.style.display = 'none';
    questionPage.style.display = 'flex';
    firstQuestionPage();
});

pageCount = 0;
answerArray = 0;


const firstQuestionPage = () => {
    questionTitle.innerText = quiz.questions.question1;
    q1.innerText = quiz.firstQuestionChoices.choice1;
    q2.innerText = quiz.firstQuestionChoices.choice2;
    q3.innerText = quiz.firstQuestionChoices.choice3;
    q4.innerText = quiz.firstQuestionChoices.choice4;

    for (let i = 0; i < choicesArray.length; i++) {
        choicesArray[i].addEventListener('click', (event) => {
            console.log(event.target.id)
            if (choicesArray[i].id === "c2") {
                console.log("Test passed!")
                secondQuestionPage();
            } else {
                console.log("nope, try again!")
                // secondQuestionPage();
            }
        })
    }
};

const secondQuestionPage = () => {
    questionTitle.innerText = quiz.questions.question2;
    q1.innerText = quiz.secondQuestionChoices.choice1;
    q2.innerText = quiz.secondQuestionChoices.choice2;
    q3.innerText = quiz.secondQuestionChoices.choice3;
    q4.innerText = quiz.secondQuestionChoices.choice4;

    choicesArray.forEach(choice => {
        // console.log(choice);
        choice.addEventListener('click', () => {
            if (choice.id === "c3") {
                console.log("Test passed!")
                thirdQuestionPage();
            } else {
                console.log("nope")
                // thirdQuestionPage();

            }
        })
    });
};

const thirdQuestionPage = () => {
    questionTitle.innerText = quiz.questions.question3;
    q1.innerText = quiz.thirdQuestionChoices.choice1;
    q2.innerText = quiz.thirdQuestionChoices.choice2;
    q3.innerText = quiz.thirdQuestionChoices.choice3;
    q4.innerText = quiz.thirdQuestionChoices.choice4;

    choicesArray.forEach(choice => {
        // console.log(choice);
        choice.addEventListener('click', () => {
            if (choice.id === "c2") {
                console.log("Test passed!")
                fourthQuestionPage();
            } else {
                console.log("nope")
                // fourthQuestionPage();

            }
        })
    });
};

const fourthQuestionPage = () => {
    questionTitle.innerText = quiz.questions.question4;
    q1.innerText = quiz.fourthQuestionChoices.choice1;
    q2.innerText = quiz.fourthQuestionChoices.choice2;
    q3.innerText = quiz.fourthQuestionChoices.choice3;
    q4.innerText = quiz.fourthQuestionChoices.choice4;

    choicesArray.forEach(choice => {
        // console.log(choice);
        choice.addEventListener('click', () => {
            if (choice.id === "c4") {
                console.log("Test passed!")
                fifthQuestionPage();
            } else {
                console.log("nope")
                // fifthQuestionPage();
            }
        })
    });
};

const fifthQuestionPage = () => {
    questionTitle.innerText = quiz.questions.question5;
    q1.innerText = quiz.fifthQuestionChoices.choice1;
    q2.innerText = quiz.fifthQuestionChoices.choice2;
    q3.innerText = quiz.fifthQuestionChoices.choice3;
    q4.innerText = quiz.fifthQuestionChoices.choice4;

    choicesArray.forEach(choice => {
        // console.log(choice);
        choice.addEventListener('click', () => {
            if (this.id === "c1") {
                console.log("Test passed!")
                fifthQuestionPage();
            } else {
                console.log("nope")
            }
        })
    });
};




