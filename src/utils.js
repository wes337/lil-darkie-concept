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

export function formateDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(new Date(dateString));
}

export const CDN_URL = "https://f004.backblazeb2.com/file/lil-darkie";

export function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      img.remove();
      resolve();
    };
    img.onerror = () => {
      img.remove();
      reject();
    };
  });
}

export async function preloadImages(urls) {
  const preloadImagePromises = urls.map(async (url) => {
    await preloadImage(url);
  });

  await Promise.all(preloadImagePromises);
}
