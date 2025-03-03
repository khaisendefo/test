const count = document.querySelector('.count');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');

let isCounting = false;
let second = 0;
let intervalId;

function startButtonHandler() {
  if (!isCounting) {
     isCounting = true;
     startButton.textContent = 'Пауза'

     intervalId = setInterval(() => {
      ++second;
      count.textContent = second;
     }, 1000);

     return;
  }

  clearInterval(intervalId);
  isCounting = false;
  startButton.textContent = 'Старт';
}

function stopButtonHandler() {
  clearInterval(intervalId);
  second = 0;
  isCounting = false;
  count.textContent = second;
}

startButton.addEventListener("click", startButtonHandler);
stopButton.addEventListener("click", stopButtonHandler);
