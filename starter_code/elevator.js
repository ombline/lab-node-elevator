class Elevator {
  constructor() {
    this.direction = "up";
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => update(), 1000);
  }
  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor <= this.MAXFLOOR) {
      this.floor++;
    }
  }
  floorDown() {
    if (this.floor >= 0) {
      this.floor--;
    }
  }
  call() {}
  log() {
    console.log(`Direction: ${this.direction}, | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
