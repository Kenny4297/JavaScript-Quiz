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

    nextQuestion = () => {
        section.style.display = 'flex';

        title.innerText = this.questions[count].question;
        // console.log(`The question is: ${quiz.questions[count].question}`);
    
        q1.innerText = this.questions[count].answers[0]
        q2.innerText = this.questions[count].answers[1]
        q3.innerText = this.questions[count].answers[2]
        q4.innerText = this.questions[count].answers[3]
        // console.log(`The correct answer is: ${quiz.questions[count].rightAnswer}`)
    
            // FOR EACH LOOP
        buttonArray.forEach((button) => {
            // console.log("This automatically loops 4 times")
            button.addEventListener('click', (event) => {
                if (event.target.textContent == this.questions[count].rightAnswer) {
                    console.log("Yes!")
                    count++
                    return this.nextQuestion();
                } else {
                    console.log("nope")
                }
            })
        })
    };
};

const quiz = new Quiz();

const quizSection = document.getElementById("section");
const startGameButton = document.querySelector("#start-game-button");
const homePageSection = document.querySelector("#home-page");
const highScoresPage = document.querySelector("high-scores");

//First page 
quizSection.style.display = 'none';

// title.innerText = "Javascript Quiz"
// paragraph.innerText = "This is a javascript quiz, and here are the instructions"

startGameButton.addEventListener('click', () => {
    quizSection.style.display = 'flex';
    homePageSection.style.display = 'none'
    quiz.nextQuestion();
})

count = 0;
score = 0;
loopCount = 0;
const buttonArray = document.querySelectorAll("button");

// quiz.nextQuestion();

// const q1 = document.getElementById("q1");
// const q2 = document.getElementById("q2");
// const q3 = document.getElementById("q3");
// const q4 = document.getElementById("q4");
// const title = document.getElementById("title");


//When the user hits start game from the home page, the first page is loaded. Each question page will be equivalent to each question object. (page 1 = question 1)

// Loop through the class and only show the first question and the first answers

// Add a check to see if the question selected was the correct one

// 

// numberOfQuestions = 5;



// nextQuestion();






//This compares a specific question with the correct answer in the class
// console.log(quiz.questions[0].answers[1] === quiz.questions[0].rightAnswer);

//?This loops through the buttons array and accurately pinpoints when the correct button is clicked!
// for (button of buttonArray) {
//     button.addEventListener('click', (event) => {
//         // console.log(`The type of "button.textContent" is ${typeof(button.textContent)}`)
//         // console.log(`The type of "quiz.questions[count].rightAnswer" is ${quiz.questions[count].rightAnswer}`)
//         console.log(event.target);
//         if (event.target.textContent == quiz.questions[count].rightAnswer) {
//             console.log("Yes!")
//         } else {
//             console.log("addEventListener check runs but doesn't select the correct option.")
//         }
//     });
// }




    // for (button of buttonArray) {
    //     (function(button) {
    //         button.addEventListener('click', (event) => {
    //             if (event.target.textContent == quiz.questions[count].rightAnswer) {
    //                 console.log("Yes!")
    //                 count++
    //                 return nextQuestion();}
    //         console.log("failed attempt")

    //         });
    //     })(button);
    // }

    // FOR OF LOOP
    // for (button of buttonArray) {
    //     console.log("loop check!")
    //     button.addEventListener('click', (event) => {
    //         // console.log(`The type of "button.textContent" is ${typeof(button.textContent)}`)
    //         // console.log(`The type of "quiz.questions[count].rightAnswer" is ${quiz.questions[count].rightAnswer}`)
    //         // console.log(event.target);
    //     if (event.target.textContent == quiz.questions[count].rightAnswer) {
    //         console.log("Yes!")
    //         count++
    //         return nextQuestion();
    //     }
    //     console.log("Test failed button");

    //     });
    // }



// nextQuestion();




//This loops through all the questions AND answers in the correct order!!
// for (let i = 0; i < numberOfQuestions; i++) {
    // console.log(quiz.questions[count].question)
    // console.log(quiz.questions[count].answers)
    // count++
// }

//This works
// for (button of buttonArray) {
//     button.addEventListener('click', (event) => {
//         console.log(event.target)
//     })
// }



//Loop through all the answers in question 1
// for (let i = o; i<)

// const firstQuestion = quiz.questions[0].question;
// const secondQuestion = quiz.questions[1].question;
// const thirdQuestion = quiz.questions[2].question;
// const fourthQuestion = quiz.questions[3].question;
// const fifthQuestion = quiz.questions[4].question;

// console.log(firstQuestion)

// This saves the first answer of the answers:
// console.log(quiz.questions[0].answers[0]);

//This checks the value of the first question of the first answer in answers:
// console.log(quiz.questions[0].answers[0].isCorrect)

//This creates a list of all the questions
// console.log(quiz.questions);

//This creates a list of all the question titles!
// quiz.questions.forEach((question) => {
//     console.log(question.question)
// });

//This prints out a list of all the answers for all the questions
// quiz.questions.forEach((question) => {
//     console.log(question.answers)
// })

//This prints out a list of all the first answer is all the questions
// quiz.questions.forEach((question) => {
//     console.log(question.answers[0])
// })

//Gets all the "is correct" values for the first answer of all the answers
// quiz.questions.forEach((question) => {
//     console.log(question.answers[0].isCorrect)
// });

//HOW TO LOOP THROUGH EACH QUESTION WITH EACH QUESTION/ANSWER/SOLUTIONS OPTIONS

// quiz.questions.forEach((currentQuestion) => {
//     const num2 = currentQuestion.answers[index];
//     console.log(num2);
// }); 


// ==================================================================================
// This prints out what ever index you need from the object array
// console.log(quiz.questions[0].answers);

// const checkSolution = () => {
//     console.log("check solution")
//     correctAnswers = [];

//     quiz.questions.forEach((eachQuestion) => {
//         // console.log(eachQuestion.rightAnswer)
//         for (let answer of eachQuestion.answers) {
//             if (answer === eachQuestion.rightAnswer) {
//                 console.log("Something was pushed!")
                
//                 correctAnswers.push(answer)
//             } else {
//                 console.log("Nothing was pushed")
//             }
//         }
//     });
    
// };

// const allButtons = document.querySelectorAll("button");
// console.log(allButtons)

// for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener('click', () => {
//         console.log("test")
//         checkSolution();
//     });
// }

// correctAnswers = [];

// quiz.questions.forEach((eachQuestion) => {
//     // console.log(eachQuestion.rightAnswer)
//     for (let answer of eachQuestion.answers) {
//         if (answer === eachQuestion.rightAnswer) {
//             console.log("Something was pushed!")
//             correctAnswers.push(answer)
//         } else {
//             console.log("Nothing was pushed")
//         }
//     }
// });
// console.log(correctAnswers)


// quiz.questions.forEach((eachQuestion) => {
//     // console.log(eachQuestion.rightAnswer)
//     correctAnswers = [];
//     if (eachQuestion.answers[0] === eachQuestion.rightAnswer) {
//         console.log('test passed')
//         correctAnswers.push(eachQuestion.rightAnswer)
//     } else {
//         console.log("test passed, but could not return correct thing")
//     }
// });

// console.log(correctAnswers)








