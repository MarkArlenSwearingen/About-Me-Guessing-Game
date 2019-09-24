'use strict'

var userName = prompt('Please enter your name');
console.log(userName);
alert('Hello ' + userName + '. Welcome to the Mark Swearingen webpage');

var guessSchool = prompt('Did Mark Swearingen attend the University of Oregon?  Please answer either yes or no');
console.log(guessSchool);

if (guessSchool.toLowerCase() === 'yes') {
  alert('Congratulations, yes is correct.  Although Mark graduated from Clarement McKenna College, he also attended the University of Oregon his sophomore year and winter term senior year')
} else {
  alert('Sorry, no is incorrect.  Although Mark graduated from Clarement McKenna College, he also attended the University of Oregon his sophomore year and winter term senior year')
}

var guessSportOregon = prompt('Did Mark Swearingen skipper on the University of Oregon sailing team?  Please answer either yes or no');
console.log(guessSchool);

if (guessSportOregon.toLowerCase() === 'yes') {
  alert('Congratulations, yes is correct.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia')
} else {
  alert('Sorry, no is incorrect.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia')
} 

// var guessSchool = prompt('Did Mark Swearingen attend the University of Oregon?  Please answer either yes or no');
// console.log(guessSchool);

// var guessSchool = prompt('Did Mark Swearingen attend the University of Oregon?  Please answer either yes or no');
// console.log(guessSchool);

// var guessSchool = prompt('Did Mark Swearingen attend the University of Oregon?  Please answer either yes or no');
// console.log(guessSchool);