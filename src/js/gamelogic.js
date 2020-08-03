/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { DisplayController } from './displaycontroller';
import { Gameboard } from './gameboard';

export const GameLogic = (() => {
  let p1;
  let p2;
  let currentPlayer;
  let gameFinished = false;
  let gamesPlayed = 0;
  let matchWinner;
  let matchDraw = '';
  const gamesToPlay = 3;

  const startNewMatch = () => {
    p1 = null;
    p2 = null;
    currentPlayer = null;
    gameFinished = false;
    gamesPlayed = 0;
    matchWinner = null;
    matchDraw = '';
    Gameboard.cleanBoard();
    DisplayController.prepareMatchScreen();
  };

  const winnerMove = (pMoves) => {
    let winner = false;
    const winning = [
      ['0', '4', '8'],
      ['6', '4', '2'],
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
    ];
    // const pMoves = currentPlayer.getMoves();

    for (let i = 0; i < winning.length; i += 1) {
      if (winning[i].filter(n => !pMoves.includes(n)).length === 0) {
        winner = true;
      }
    }
    return winner;
  };

  const isValid = (p1, p2) => {
    const error = [];
    if (p1.getName() === '' || p2.getName() === '') {
      error.push('complete both player names');
    }
    if (p1.getName() === p2.getName()) {
      error.push('use different player names');
    }
    return error;
  };

  const getPlayers = () => [p1, p2];

  const getRandomPlayer = () => getPlayers()[Math.floor(Math.random() * 2)];

  const setCurrentPlayers = (currentP1, currentP2) => {
    p1 = currentP1;
    p2 = currentP2;
  };

  const startMatch = (currentP1, currentP2) => {
    const errors = isValid(currentP1, currentP2);
    if (errors.length === 0) {
      setCurrentPlayers(currentP1, currentP2);
      currentPlayer = getRandomPlayer(currentP1, currentP2);
      return [true, errors];
    }
    return [false, errors];
  };

  const addListeners = () => {
    const elements = document.getElementsByClassName('box');

    const myFunction = function myFunction() {
      const position = this.getAttribute('data-index');
      // eslint-disable-next-line no-use-before-define
      matchLogic(position);
    };
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].addEventListener('click', myFunction, false);
    }
  };

  const restartGame = () => {
    p1.cleanMoves();
    p2.cleanMoves();
    Gameboard.cleanBoard();
    if (DisplayController.renderBoard(Gameboard.getBoardArray())) {
      addListeners();
    }
    DisplayController.hideGameStatus();
    // eslint-disable-next-line no-use-before-define
    DisplayController.renderNextMove(getCurrentPlayer().getName());
    DisplayController.hideStartNewGame();
    gameFinished = false;
  };

  const setCurrentPlayer = (p) => { currentPlayer = p; };

  const getCurrentPlayer = () => currentPlayer;

  const isGameFinished = () => gameFinished;

  const finishGame = () => {
    gamesPlayed += 1;
    gameFinished = true;
    DisplayController.showStartNewGame();
  };

  const switchCurrentPlayer = () => {
    if (currentPlayer.getName() === p1.getName()) {
      currentPlayer = p2;
    } else {
      currentPlayer = p1;
    }
    return currentPlayer;
  };

  const renderMatchEnd = (string) => {
    DisplayController.hideStartNewGame();
    const winnerStr = document.getElementById('matchResults');
    winnerStr.innerHTML = string;
    document.getElementById('matchEndModal').classList.add('show');
    document.getElementById('matchEndModal').classList.remove('hide');
    document.getElementById('startNewMatchButton').addEventListener('click', () => {
      startNewMatch();
    });
  };

  const matchLogic = (index) => {
    const cpMoves = currentPlayer.getMoves();
    if (!isGameFinished()) {
      if (Gameboard.isPositionEmpty(index)) {
        Gameboard.updateBoard(index, getCurrentPlayer().getSymbol());
        getCurrentPlayer().storeMove(index);
      }
      if (DisplayController.renderBoard(Gameboard.getBoardArray())) {
        addListeners();
      }


      if (winnerMove(cpMoves)) {
        getCurrentPlayer().winner();
        DisplayController.renderScore(getPlayers());
        DisplayController.renderGameStatus(getCurrentPlayer().getName(), true);
        finishGame();
      } else if (Gameboard.isBoardFull()) {
        DisplayController.renderGameStatus(getCurrentPlayer().getName(), false);
        finishGame();
      } else {
        switchCurrentPlayer();
        DisplayController.renderNextMove(getCurrentPlayer().getName());
      }
    }

    if (gamesPlayed === gamesToPlay && p1.getScore() !== p2.getScore()) {
      if (p1.getScore() > p2.getScore()) {
        matchWinner = p1;
      } else {
        matchWinner = p2;
      }
    } else if (gamesPlayed === gamesToPlay) {
      matchDraw = 'Wow you both are gooood!';
    }
    if (matchWinner) {
      let winnerStr = `${matchWinner.getName()} is the winner: `;
      if (p1.getScore() > p2.getScore()) {
        winnerStr += `${p1.getScore()}-${p2.getScore()}`;
      } else {
        winnerStr += `${p2.getScore()}-${p1.getScore()}`;
      }
      renderMatchEnd(winnerStr);
    } else if (matchDraw !== '') {
      renderMatchEnd(matchDraw);
    }
  };
  return {
    startMatch,
    winnerMove,
    switchCurrentPlayer,
    setCurrentPlayer,
    getCurrentPlayer,
    restartGame,
    getPlayers,
    isGameFinished,
    finishGame,
    matchLogic,
    startNewMatch,
    setCurrentPlayers,
    addListeners,
  };
})();

export default GameLogic;