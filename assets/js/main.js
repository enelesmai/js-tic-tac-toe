/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('warningMessage').classList.add('hide');
  document.getElementById('startButton').addEventListener('click', () => {
    GameLogic.startMatch();
  });
  document.getElementById('restartButton').addEventListener('click', () => {
    GameLogic.restartGame();
  });
});