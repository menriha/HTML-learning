window.onload = () => {
  let second = 0;
  let minutes = 0;
  document.body.innerHTML =
    '<header> <i id="timer-minutes"> </i>: <i id="timer-second"> </i></header>';
  setInterval(() => {
    second++;
    second < 10
      ? (document.getElementById("timer-second").innerHTML = "0" + second)
      : (document.getElementById("timer-second").innerHTML = second);

    if (second >= 60) {
      second = 0;
      minutes++;
    }
    if (minutes > 0) {
      minutes < 10
        ? (document.getElementById("timer-minutes").innerHTML = "0" + minutes)
        : (document.getElementById("timer-minutes").innerHTML = minutes);
      document.getElementById("timer-minutes").innerHTML = minutes;
    }
  }, 1000);
};
