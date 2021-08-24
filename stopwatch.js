let ms = document.getElementsByClassName("ms")[0];
let sec = document.getElementsByClassName("sec")[0];
let min = document.getElementsByClassName("min")[0];
// console.log(ms, sec, min)
let minNum = 1;
let secNum = 1;
let num = 0;

let interval;
function myStopWatch() {
  interval = setInterval(() => {
    ms.innerHTML = num + 1;
    num++;
    if (ms.innerHTML == 100) {
      num = 0;
      ms.innerHTML = num;
      num++;

      sec.innerHTML = secNum;
      secNum++;
    } else if (sec.innerHTML >= 60) {
      secNum = 0;
      sec.innerHTML = secNum;
      secNum++;

      min.innerHTML = minNum;
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
  ms.innerHTML = 0;
  sec.innerHTML = 0;
  min.innerHTML = 0;
  minNum = 1;
  secNum = 1;
  num = 0;
});
