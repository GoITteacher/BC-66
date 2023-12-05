import '../css/common.css';

const refs = {
  startBtn: document.querySelector('[data-action-start]'),
  stopBtn: document.querySelector('[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) return;
    // this.initTime = new Date('2028-01-01');
    this.isActive = true;
    console.log('start');
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  },

  stop() {
    if (!this.isActive) return;
    this.isActive = false;
    console.log('stop');
    clearInterval(this.intervalId);
  },

  tick() {
    const diff = Date.now() - this.initTime;
    const time = this.getTime(diff);
    refs.clockface.textContent = this.timeToStr(time);
  },

  timeToStr({ seconds, minutes, hours }) {
    hours = hours.padStart(2, '0');
    minutes = minutes.padStart(2, '0');
    seconds = seconds.padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  },

  getTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60) + '';
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60) + '';
    const hours = Math.floor(milliseconds / 1000 / 60 / 60) + '';
    return { seconds, minutes, hours };
  },
};
