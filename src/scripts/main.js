'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject, 3000);
});

promise1.then(
  () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerText = 'Promise was resolved!';
  },
  () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.innerText = 'Promise was rejected!';
  },
);

promise2.then(
  () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerText = 'Promise was resolved!';
  },
  () => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.innerText = 'Promise was rejected!';
  },
);
