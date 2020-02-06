
function Stopwatch() {
  let duration = 0;
  let timer;
  let running = false;

  Object.defineProperty(this, 'duration', {
    get: function() { return duration },
    set: function(value) { duration = value }
  });
  Object.defineProperty(this, 'timer', {
    get: function() { return timer },
    set: function(value) { timer = value }
  });
  Object.defineProperty(this, 'running', {
    get: function() { return running },
    set: function(value) { running = value }
  });
}

Stopwatch.prototype.start = function() {
  if (this.running) return console.log('Already running...');
  this.running = true;
  this.timer = setInterval(() => {
    this.duration++;
  }, 1000);
  console.log('Go! Your time:', this.duration);
};
Stopwatch.prototype.stop = function() {
  if (!this.running) return console.log('Not started.');
  this.running = false;
  clearInterval(this.timer);
  console.log('Stopped, your time:', this.duration);
};
Stopwatch.prototype.reset = function() {
  clearInterval(this.timer);
  this.running = false;
  this.duration = 0;
  console.log('Reset Done. Your time:', this.duration);
};

const sw = new Stopwatch();

console.log(sw);
