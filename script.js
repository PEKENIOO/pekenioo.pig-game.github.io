'use strict';

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentScorePlayer1 = document.querySelector('#current--0');
const currentScorePlayer2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let score1 = 0;
let score2 = 0;
let mainScorePlayer1 = 0;
let mainScorePlayer2 = 0;
dice.classList.add('hidden');

rollDice.addEventListener('click', () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  dice.classList.remove('hidden');

  if (player1.classList.contains('player--active')) {
    if (randomNumber !== 1) {
      score1 += randomNumber;
      currentScorePlayer1.textContent = score1;
    } else {
      currentScorePlayer1.textContent = 0;
      score1 = 0;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else {
    if (randomNumber !== 1) {
      score2 += randomNumber;
      currentScorePlayer2.textContent = score2;
    } else {
      currentScorePlayer2.textContent = 0;
      score2 = 0;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    mainScorePlayer1 = Number(scorePlayer1.textContent) + score1;
    scorePlayer1.textContent = mainScorePlayer1;
    currentScorePlayer1.textContent = 0;
    score1 = 0;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');

    if (mainScorePlayer1 >= 100) {
      player1.classList.add('player--winner');
      rollDice.disabled = true;
      holdBtn.disabled = true;
      dice.classList.add('hidden');
    } else if (mainScorePlayer2 >= 100) {
      player2.classList.add('player--winner');
      rollDice.disabled = true;
      holdBtn.disabled = true;
      dice.classList.add('hidden');
    }
  } else {
    mainScorePlayer2 = Number(scorePlayer2.textContent) + score2;
    scorePlayer2.textContent = mainScorePlayer2;
    currentScorePlayer2.textContent = 0;
    score2 = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');

    if (mainScorePlayer1 >= 100) {
      player1.classList.add('player--winner');
      rollDice.disabled = true;
      holdBtn.disabled = true;
      dice.classList.add('hidden');
    } else if (mainScorePlayer2 >= 100) {
      player2.classList.add('player--winner');
      rollDice.disabled = true;
      holdBtn.disabled = true;
      dice.classList.add('hidden');
    }
  }
});

newGame.addEventListener('click', () => {
  rollDice.disabled = false;
  holdBtn.disabled = false;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
  score1 = 0;
  score2 = 0;
  mainScorePlayer1 = 0;
  mainScorePlayer2 = 0;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScorePlayer1.textContent = 0;
  currentScorePlayer2.textContent = 0;
});

// MODAL

const modalBtn = document.querySelector('.instructions-button');
const modal = document.querySelector('.instructions');
const closeModal = document.querySelector('.exit');
const blur = document.querySelector('.blur');

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  blur.classList.remove('hidden');
});

const closeModalItems = () => {
  modal.classList.add('hidden');
  blur.classList.add('hidden');
};

closeModal.addEventListener('click', closeModalItems);
blur.addEventListener('click', closeModalItems);

document.body.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    closeModalItems();
  }
});