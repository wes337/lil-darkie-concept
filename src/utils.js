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

export function toDateInput(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();

  let month = date.getMonth();
  if (month < 10) {
    month = `0${month}`;
  }

  let day = date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  const dateInput = `${year}-${month}-${day}`;

  return dateInput;
}

export const CDN_URL = "https://f004.backblazeb2.com/file/lil-darkie";
export const TOUR_DATES_DATA =
  "https://f004.backblazeb2.com/file/lil-darkie/data/fall-tour-dates.json";
export const UPCOMING_SHOWS_DATA =
  "https://f004.backblazeb2.com/file/lil-darkie/data/upcoming-shows.json";

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

export function getJSON(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.send();
  });
}
