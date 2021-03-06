'use strict';
/*

/// DOM MANUPULATION
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'π Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'β No Number!';
    displayMessage('β No Number!');
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'π Correct Number!';
    displayMessage('π Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `Too High π` : `πToo low`;
      displayMessage(guess > secretNumber ? `πToo High` : `πToo low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = `π₯You lost the game`;
      displayMessage(`π₯You lost the game`);
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score >= 1) {
  //       document.querySelector('.message').textContent = `Too High π`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `π₯You lost the game`;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score >= 1) {
  //       document.querySelector('.message').textContent = `πToo low `;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `π₯You lost the game`;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
