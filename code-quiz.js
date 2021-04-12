document.getElementById("StartButton").addEventListener("click", function () {
    startQuizTimer();
    var start = document.getElementById("StartButton");
    if (start.style.display === "none") {
        start.style.display = "block";
    } else {
        start.style.display = "none";
    }
    //hide start button and title
    //display first question and 4 option buttons

    console.log(countdown);
});


function startQuizTimer() {
    var timeleft = 90; //set starting time to like 90 seconds when done
    console.log("button clicked");
    var downloadTimer = setInterval(function function1() {
        console.log("timeleft", timeleft);
        document.getElementById("countdown").innerHTML = timeleft +
            "seconds remaining";

        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Time is up!";
        }
    }, 1000);
}
//event listeners for answers
// use array for question objects
//when we're checking later on : if ? question.options[question.answer] === userAnswer
var questions = [{
    question1: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<scripting>", "<script>", "<js>"],
    answer: 2 //would be a1 as correct
},
{
    question2: "Where is the correct place to insert a JavaScript?",
    options: ["The <body> section", "Both the <head> section and the <body> section are correct", "The <head> section", "In the <HTML> tag"],
    answer: 1
},
{
    question3: "How do you create a function in JavaScript?How do you create a function in JavaScript?",
    options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create.function"],
    answer: 0
},
{
    question4: "How do you write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i == 5)", "if i == 5 then", "if i = 5"],
    answer: 1
},
{
    question5: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    options: ["if i =! 5 then", "if (i <> 5)", "if (i != 5)", "if i <> 5"],
    answer: 2
},
];





//function to go to next question
// ---> check if question button was correct or incorrect
// ---> CORRECT => show correct message, next question title, options etc
// ---> INCORRECT => show error message and -5 seconds off timer

//function to end the quiz, set timer to 0 and show the high scores page

//https://www.w3schools.com/jsref/prop_win_localstorage.asp
//function to save high score to local storage
//function to get stored high scores and show them on a list (run when you show the high scores list)
//Need to decide when to show the high scores list
//Potentially add a button to start the quiz again if you get time