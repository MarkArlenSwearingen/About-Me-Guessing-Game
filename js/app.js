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
console.log(guessSportOregon);

if (guessSportOregon.toLowerCase() === 'yes') {
  alert('Congratulations, yes is correct.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia')
} else {
  alert('Sorry, no is incorrect.  Mark raced for the University of Oregon his sophomore year in regattas in Washington, Oregon and British Columbia')
} 

var guessSportCMC = prompt('Did Mark Swearingen race cross country at Clarement McKenna College?  Please answer either yes or no');
console.log(guessSportCMC);

if (guessSportOregon.toLowerCase() === 'yes') {
  alert('Sorry, yes is incorrect.  Mark actually pole vaulted for Claremont McKenna College but did not run cross country')
} else {
  alert('Congratulations, no is correct.  Mark actually pole vaulted for Claremont McKenna College but did not run cross country')
} 

var guessLocal = prompt('Did Mark Swearingen ever live in San Francisco?  Please answer either yes or no');
console.log(guessLocal);

if (guessLocal.toLowerCase() === 'yes') {
  alert('Congratulations, yes is correct.  Mark lived in San Francisco before taking a job in Eugene, Oregon for a Computer Aided Manufacturing(CAM) software development company')
} else {
  alert('Sorry, no is incorrect.  Mark lived in San Francisco before taking a job in Eugene, Oregon for a Computer Aided Manufacturing(CAM) software development company')
} 

var guessOccupation = prompt('Is Mark Swearingen\'s occupational goal to be a talented Software Developer?  Please answer either yes or no');
console.log(guessOccupation);

if (guessOccupation.toLowerCase() === 'yes') {
  alert('Congratulations, yes is correct.  Mark is currently working towards becoming a talented Software Developer at COCC DevStation')
} else {
  alert('Sorry, no is incorrect.  Mark is currently working towards becoming a talented Software Developer at COCC DevStation')
}

alert('Thank you ' + userName + ' for answering the questions.  Hopefully you learned some interesting information about Mark Swearingen')
