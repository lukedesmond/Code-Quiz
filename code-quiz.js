document.getElementById("StartButton").addEventListener("click", function () {
    startQuizTimer();
    //hide start button and title
    //display first question and 4 option buttons

    console.log(countdown);
});


function startQuizTimer() {
    var timeleft = 15; //set starting time to like 90 seconds when done
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

//Inside which HTML element do we put the JavaScript? 1.<javascript> 2.<script>
//when we're checking later on : if ? question.options[question.answer] === userAnswer
var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["a1", "a2", "a3", "a4"],
    answer: 0 //would be a1 as correct
},
{
    question: "q",
    options: ["a1", "a2", "a3", "a4"],
    answer: 0
},
{
    question: "q",
    options: ["a1", "a2", "a3", "a4"],
    answer: 0
}];




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