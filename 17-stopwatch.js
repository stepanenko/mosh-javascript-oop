
function Stopwatch() {
  let duration = 0;
  let timer;
  let running = false;

  this.start = function() {
    if (running) return console.log('Already running...');
    running = true;
    timer = setInterval(() => {
      duration++;
    }, 1000)
  }
  this.stop = function() {
    if (!running) return console.log('Not started.');
    running = false;
    clearInterval(timer);
  }
  this.reset = function() {
    clearInterval(timer);
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new Stopwatch();

console.log(sw);
