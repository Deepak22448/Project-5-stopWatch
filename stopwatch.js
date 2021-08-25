let ms = document.getElementsByClassName("ms")[0];
let sec = document.getElementsByClassName("sec")[0];
let min = document.getElementsByClassName("min")[0];

let interval;
function myStopWatch() {
  let minNum = 1;
  let secNum = 1;
  let num = 0;
  interval = setInterval(() => {
    ms.innerHTML = ` ${num} ms`;
    num++;
    if (num == 100) {
      num = 0;
      ms.innerHTML = ` ${num} ms`;

      sec.innerHTML = ` ${secNum} s`;
      secNum++;
    } else if (secNum >= 60) {
      secNum = 0;
      sec.innerHTML = ` ${secNum} s`;

      min.innerHTML = ` ${minNum} m`;
      minNum++;
    }
  }, 10);
}
//start button
const btnStart = document.getElementsByClassName("btn-start")[0];
btnStart.addEventListener("click", myStopWatch);

//stop button
const btnStop = document.getElementsByClassName("btn-stop")[0];
console.log(btnStop);
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

//resart button
const btnRestart = document.getElementsByClassName("btn-restart")[0];
btnRestart.addEventListener("click", () => {
  ms.innerHTML = 0+'ms';
  sec.innerHTML = 0+'s';
  min.innerHTML = 0+'m';
  minNum = 0;
  secNum = 0;
  num = 0;
});
