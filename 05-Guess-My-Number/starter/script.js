'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 13;

console.log(
  document.querySelector('.guess').value,
  typeof document.querySelector('.guess').value
);
// document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

// const checkBtn = () => {
//   console.log(document.querySelector('.guess').value);

//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number or equal to zero';

//   }
// };

// document.querySelector('.check').addEventListener('click', checkBtn);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = highScore => {
  document.querySelector('.highscore').textContent = highScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number !!!';
  } else if (guess === secretNumber) {
    highScore = score;

    displayMessage('Correct Number !!!');
    displayHighScore(highScore);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '15rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      document.querySelector('body').style.backgroundColor = '#222';
      score--;
    } else {
      displayMessage('You lost the game!!');
      score = 0;
      document.querySelector('body').style.backgroundColor = '#222';
    }
  }

  displayScore(score);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
