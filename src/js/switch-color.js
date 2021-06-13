const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};
let timerId = null;
let isActive = false;
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

refs.start.addEventListener('click', onBtnStartClick);
refs.stop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.start.disabled = true;
  }, 1000);
}

function onBtnStopClick() {
  clearInterval(timerId);
  refs.start.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
