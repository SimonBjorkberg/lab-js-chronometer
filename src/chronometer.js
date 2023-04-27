class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(() => {
      this.intervalId = this.currentTime++;
      if (typeof printTimeCallback === 'function') {
        return printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }
    else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
