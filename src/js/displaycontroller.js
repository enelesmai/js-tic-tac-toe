/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


export const DisplayController = (() => {
  const renderBoard = (array) => {
    let htmlTag = '<div class="game-board">';

    for (let i = 0; i < array.length; i += 1) {
      htmlTag += `<div class="box" data-index="${i}">${array[i]}</div>`;
    }
    htmlTag += '</div>';
    const boardPlaceholder = document.getElementById('boardDisplay');
    boardPlaceholder.innerHTML = htmlTag;
    return true;
  };

  const renderNextMove = (name) => {
    const htmlTag = `<b>${name}, make your move! </b>`;
    document.getElementById('currentPlayerMove').innerHTML = htmlTag;
  };

  const hideGameStatus = () => {
    document.getElementById('gameStatus').classList.add('hide');
    document.getElementById('gameStatus').classList.remove('show');
    document.getElementById('currentPlayerMove').classList.add('show');
    document.getElementById('currentPlayerMove').classList.remove('hide');
  };

  const showGameStatus = () => {
    document.getElementById('gameStatus').classList.remove('hide');
    document.getElementById('gameStatus').classList.add('show');
    document.getElementById('currentPlayerMove').classList.remove('show');
    document.getElementById('currentPlayerMove').classList.add('hide');
  };

  const renderGameStatus = (name, winner, fakeHtmlTag = false) => {
    let htmlTag = '';
    if (winner) {
      htmlTag = `<b>${name} is the winner! </b>`;
    } else {
      htmlTag = '<b>This is a draw!</b>';
    }
    if (fakeHtmlTag === false) {
      document.getElementById('gameStatus').innerHTML = htmlTag;
      showGameStatus();
    }
    return htmlTag;
  };

  const renderScore = (players, fakeHtmltag = false) => {
    let htmlTag = '<div class="score-board">';
    htmlTag += `<b>Player 1: ${players[0].getName()} </b>`;
    htmlTag += `<div class="score-number">${players[0].getScore()}</div></div>`;

    htmlTag += '<div class="current-player"><div id ="currentPlayerMove" class="score-board show">';
    htmlTag += '</div></div>';

    htmlTag += '<div class="current-player"><div id ="gameStatus" class="score-board hide">';
    htmlTag += '</div></div>';

    htmlTag += '<div class="score-board">';
    htmlTag += `<b>Player 2: ${players[1].getName()} </b>`;
    htmlTag += `<div class="score-number">${players[1].getScore()}</div></div>`;
    if (!fakeHtmltag) {
      const scorePlaceholder = document.getElementById('scoreDisplay');
      scorePlaceholder.innerHTML = htmlTag;
    }
    return htmlTag;
  };


  const showWarningMessage = (errors) => {
    document.getElementById('warningMessage').classList.add('show');
    document.getElementById('warningMessage').classList.remove('hide');
    document.getElementById('warningMessage').innerHTML = `Please: ${errors.join(', ')}`;
  };

  const prepareGameScreen = () => {
    document.getElementById('game-container').classList.add('show');
    document.getElementById('game-container').classList.remove('hide');
    document.getElementById('formPlayers').classList.add('hide');
    document.getElementById('formPlayers').classList.remove('show');
  };

  const prepareMatchScreen = () => {
    document.getElementById('game-container').classList.add('hide');
    document.getElementById('game-container').classList.remove('show');
    document.getElementById('formPlayers').classList.add('show');
    document.getElementById('formPlayers').classList.remove('hide');
    document.getElementById('matchEndModal').classList.add('hide');
    document.getElementById('matchEndModal').classList.remove('show');
    document.getElementById('inputPlayer1').value = '';
    document.getElementById('inputPlayer2').value = '';
  };

  const showStartNewGame = () => {
    document.getElementById('game-control').classList.add('show');
    document.getElementById('game-control').classList.remove('hide');
  };

  const hideStartNewGame = () => {
    document.getElementById('game-control').classList.add('hide');
    document.getElementById('game-control').classList.remove('show');
  };

  const updateGame = (board, players) => {
    DisplayController.renderBoard(board);
    DisplayController.renderScore(players);
  };

  return {
    prepareGameScreen,
    showWarningMessage,
    showStartNewGame,
    hideStartNewGame,
    renderBoard,
    renderScore,
    renderNextMove,
    hideGameStatus,
    showGameStatus,
    renderGameStatus,
    prepareMatchScreen,
    updateGame,
  };
})();

export default DisplayController;