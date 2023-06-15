export function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isMobileSizedScreen() {
  return window.innerWidth < 1100;
}

export function throttle(callback, limit) {
  let wait = false;

  return function () {
    if (!wait) {
      callback.call();
      wait = true;

      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
