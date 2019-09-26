'use strict';

// Prompt and alert getting the users name and welcoming them to the webpage.
var userName = prompt('Please enter your name');
alert('Hello ' + userName + '. Welcome to the Mark Swearingen webpage');

// Five questions with yes or no answers to provide information about Mark Swearingen in a guessing game.
// Alerts are sent to the user letting them know if there were correct and a little information about the answer.

// set variable for tracking total number of correct answers
var correctAnswers = 0;

function guessingGame() {

  var guessSchool = prompt('Did Mark Swearingen attend the University of Oregon?  Please answer either yes or no');

  if (guessSchool.toLowerCase() === 'yes') {
    alert('Congratulations, yes is correct.  Although Mark graduated from Clarement McKenna College, he also attended the University of Oregon his sophomore year and winter term senior year')
    correctAnswers++;
  } else {
    alert('Sorry, no is incorrect.  Although Mark graduated from Clarement McKenna College, he also attended the University of Oregon his sophomore year and winter term senior year')
  }

  var guessSportOregon = prompt('Did Mark Swearingen skipper on the University of Oregon sailing team?  Please answer either yes or no');

  if (guessSportOregon.toLowerCase() === 'yes') {
    alert('Congratulations, yes is correct.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia');
    correctAnswers++;  
  } else {
    alert('Sorry, no is incorrect.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia');
  }

  var guessSportCMC = prompt('Did Mark Swearingen race cross country at Clarement McKenna College?  Please answer either yes or no');

  if (guessSportCMC.toLowerCase() === 'yes') {
    alert('Sorry, yes is incorrect.  Mark actually pole vaulted for Claremont McKenna College but did not run cross country');
  } else {
    correctAnswers++;
    alert('Congratulations, no is correct.  Mark actually pole vaulted for Claremont McKenna College but did not run cross country');
  }

  var guessLocal = prompt('Did Mark Swearingen ever live in San Francisco?  Please answer either yes or no');

  if (guessLocal.toLowerCase() === 'yes') {
    alert('Congratulations, yes is correct.  Mark lived in San Francisco before taking a job in Eugene, Oregon for a Computer Aided Manufacturing(CAM) software development company');
    correctAnswers++;
  } else {
    alert('Sorry, no is incorrect.  Mark lived in San Francisco before taking a job in Eugene, Oregon for a Computer Aided Manufacturing(CAM) software development company');
  }

  var guessOccupation = prompt('Is Mark Swearingen\'s occupational goal to be a talented Software Developer?  Please answer either yes or no');

  if (guessOccupation.toLowerCase() === 'yes') {
    alert('Congratulations, yes is correct.  Mark is currently working towards becoming a talented Software Developer at COCC DevStation');
    correctAnswers++;
  } else {
    alert('Sorry, no is incorrect.  Mark is currently working towards becoming a talented Software Developer at COCC DevStation');
  }
}
guessingGame();

// // Code for guessing number game.
// // Stretch goal will be to add a random number rather than a favorite number.

function numberGame(){

  var guessNumber = parseInt(prompt('Please guess Mark\'s favorite number'), 10);
  var favoriteNumber = 213;

  for (var i = 0; i < 4; i++) {
    if (guessNumber === favoriteNumber) {
      correctAnswers++;
      alert('You guess correctly. The number is ' + favoriteNumber);
      i = i + 4;
    }
    if (guessNumber < favoriteNumber){
      alert('Your guess of ' + guessNumber + 'was too low.  Please guess higher');
    }
    if (guessNumber > favoriteNumber){
      alert('Your guess of ' + guessNumber + 'was too high.  Please guess lower');
      // guessNumber = parseInt(prompt('Your guess of ' + guessNumber + 'was too high.  Please guess lover'), 10);
    }
    if (i === 3) {
      alert ('Your number of guesses had ended.  The number is ' + favoriteNumber);
    } else {
      if (guessNumber !== favoriteNumber) {
        guessNumber = parseInt(prompt('Please guess again'), 10);
      }
    }
  }
}

guessingGame();

// // Code for guessing from an array

// var favoriteMascotsArray = ['DUCK', 'DUCKS','BEAVER', 'BEAVERS', 'TIGER', 'TIGERS', 'BEAR', 'BEARS', 'EAGLE', 'EAGLES', '49ER', '49ERS', 'STAG', 'STAGS', 'ATHENA', 'ATHENAS', 'PHANATIC', 'PHANATICS'];

// for (var i = 0; i < 6; i++) {
//   var mascotGuess = prompt('Please guess one of my favorite mascots');
//   if (favoriteMascotsArray.includes(mascotGuess.toUpperCase())){
//     correctAnswers++;
//     alert('Correct! My favorit mascots are ' + favoriteMascotsArray);
//     i = 6;
//     //set counter of correct answers
//   } else {
//     if (i === 5){
//       alert('The number of guesses has been reached. My favorite mascots are ' + favoriteMascotsArray);
//     }
//   }
// }


// //  Final message thanking the user, by name provided, for playing the game.
// alert('Thank you ' + userName + ' for answering the questions.  You got ' + correctAnswers + ' correct answers out of seven questions including the number game. Hopefully you learned some interesting information about Mark Swearingen and had some fun.');

