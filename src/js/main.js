/* eslint-disable no-undef */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout-tictactoe.css'
import '../css/style.css'

import { GameLogic } from './gamelogic';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('warningMessage').classList.add('hide');
  document.getElementById('startButton').addEventListener('click', () => {
    GameLogic.startMatch();
  });
  document.getElementById('restartButton').addEventListener('click', () => {
    GameLogic.restartGame();
  });
});