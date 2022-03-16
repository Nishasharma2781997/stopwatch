window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var OutputSeconds = document.getElementById("seconds");
  var OutputTens = document.getElementById("tens");
  var buttonStart = document.getElementById("start-btn");
  var buttonStop = document.getElementById("stop-btn");
  var buttonReset = document.getElementById("reset-btn");
  var Interval;

  buttonStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
  });

  buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
  });

  buttonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
  });

  function startTime() {
    tens++;
    if (tens <= 9) {
      OutputTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      OutputTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      OutputSeconds.innerHTML = "0" + seconds;
      tens = 0;
      OutputTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
      OutputSeconds.innerHTML = seconds;
    }
  }
};
