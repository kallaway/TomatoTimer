var appBody = document.getElementById("app-body");
var display = document.getElementById("display");

var workMinusButton = document.getElementById("work-minus");
var workPlusButton = document.getElementById("work-plus");
var relaxMinusButton = document.getElementById("relax-minus");
var relaxPlusButton = document.getElementById("relax-plus");

var workIntervalDisplay = document.getElementById("work-set-to");
var relaxIntervalDisplay = document.getElementById("relax-set-to");

var startingMoment = new Date(); // ?? why?
var nowAt;

// Setting defaults
var workDefault = 25;
var relaxDefault = 5;

// Setting Working Numbers
var workInterval = 25;
var relaxInterval = 5;

// Timer itself

var timer = {
  isRunning: false,
  work: 25,
  relax: 5
}

// Timer Functiontality

function runTimer(interval) {
  
/*  timer.isRunning = true;*/
  var secondsLeft = interval * 60;
  var minutesLeft = interval;
  
/*  while (timer.isRunning) {*/
    setInterval(function() {
    
      var secondsToShow = secondsLeft % 60;
      var minutesToShow = parseInt(secondsLeft / 60);
      if (secondsToShow < 10) {
        secondsToShow = "0" + secondsToShow;
      }
      console.log("After the change: " + secondsToShow);
      var showOnDisplay = minutesToShow + " : " + secondsToShow;
      display.textContent = showOnDisplay;

      secondsLeft--;
      
      // get out of the loop if it timer is stopped
    }, 1000);
/*  }*/
}

function stopTimer() {
  timer.isRunning = false;
  // first two letters + 
  nowAt = display.textContent; // Grab what's on the screen - first two letters and last two letters
  // Then 
  // In order to resume
}

// Attaching functionality to buttons. MAYBE this should be done in a function

workMinusButton.addEventListener("click", function() {
  if (workInterval > 1) {
    workInterval -= 1; // Set work to one less minute
  }
  workIntervalDisplay.textContent = workInterval; // Display the change
}, false);

workPlusButton.addEventListener("click", function() { 
  workInterval += 1; // Set work to one more minute
  workIntervalDisplay.textContent = workInterval; // Display the change
}, false);

relaxMinusButton.addEventListener("click", function() {
  if (relaxInterval > 1) {
      relaxInterval -= 1;
  } // Set work to one less minuterelaxIntervalDisplay.textContent = relaxInterval; // Display the change
}, false);

relaxPlusButton.addEventListener("click", function() {
  relaxInterval += 1; // Set work to one less minute
  relaxIntervalDisplay.textContent = relaxInterval; // Display the change
}, false);

// Attach the start stop function to the time display

display.addEventListener("click", stopTimer, false);

// Run app



runTimer(workInterval);