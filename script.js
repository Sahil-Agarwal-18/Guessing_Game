"use strict";

function Values() {
  // document.querySelector(".message").textContent = ""; // this line of code does not do much
  document.querySelector(".message").textContent = "No Number!";
}
/*function randomFunction() {
    console.log("Let us try out the event handler")
    alert("Please Work")
}
document.querySelector('.check').addEventListener("click", randomFunction);*/
// The above commented lines are just to see if everything works as intended
//const number = Math.random(1, 30); // so this alone will return between 0 and 1
// even though I put 1 and 30 in between
let secretNumber = Math.trunc(Math.random() * 30) + 1;
// Further testing took place in console to check if the 'display' question mark updates
//let x = 15; // Just some additional testing here
let score = 30;
let highScore = 0;
//let guess = Number(document.querySelector('.guess').value);// The number we enter
// So this should not be outside- else it already records no number entered. Even let does not work
/*console.log(guess, typeof guess);*/
document.querySelector(".check").addEventListener("click", function () {
  //guess = Number(document.querySelector('.guess').value); - this will also allow it to work
  //alert(x);
  //x = 17;
  //alert(x);
  // This will work as intended
  const guess = Number(document.querySelector(".guess").value); // so this had to be put inside
  // This is the method I will use to make this program work. Other methods are mentioned and listed
  if (!guess) {
    //alert("The if statement runs") // It does run yippe ki yay
    Values();
  }
  /*else {
        document.querySelector(".message").textContent = "Weird....";
    }*/ // this has not been programmed to work effectively as of now
  else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "";
      document.querySelector(".message").textContent =
        "You have the right number!";
      document.querySelector(".display").textContent = secretNumber;
      document.querySelector(".number-score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#A04DFF";
      //document.querySelector("body").style.width = "30rem"; // this ruins the design
      if (score > highScore) {
        highScore = score;
        document.querySelector(".high-score").textContent = highScore;
      }
    } else {
      document.querySelector(".message").textContent = "Game Over....";
      document.querySelector(".number-score").textContent = "0";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "";
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".number-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over....";
      document.querySelector(".number-score").textContent = "0";
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "";
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".number-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over....";
      document.querySelector(".number-score").textContent = "0";
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  //alert("Work please"); // this works
  score = 30;
  document.querySelector(".number-score").textContent = score;
  //document.querySelector(".guess").textContent = ""; // I need to work on getting rid of the input
  //document.querySelector(".guess").clearInput(); // This is not working either
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".display").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector(".guess").value = "";
});
