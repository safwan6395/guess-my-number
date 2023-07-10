'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let flag = 0;

document.querySelector('.check').addEventListener('click', function () {
  if (flag === 0) {
    const guess = +document.querySelector('.guess').value;
    // for no guess
    if (!guess) {
      document.querySelector('.message').textContent = 'No guess yet...';
    }

    //  when the guess is correct
    else if (guess === secretNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent = 'Yay right number...';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      flag = 1;
    }

    //  out of bound guess
    else if (guess < 1 || guess > 20) {
      document.querySelector('.message').textContent = 'Choose b/w 1 & 20';
    }

    // when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = (guess > secretNumber) ? 'Too high...' : 'Too low...';
      } else if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '😥 You lost...';
        flag = 1;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  flag = 0;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
