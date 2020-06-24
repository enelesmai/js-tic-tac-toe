const DisplayController = (() => {
    const renderBoard = (array) => {
        var htmlTag = '<div class="game-board">';
        for (let i = 0; i < array.length; i += 1) {
            htmlTag += '<div class="box" data-index="' + i + '">' + array[i] + '</div>';
        }
        htmlTag += '</div>';
        const boardPlaceholder = document.getElementById('boardDisplay');
        boardPlaceholder.innerHTML = htmlTag;
        addListeners();
    };

    const renderNextMove = () => {
        let htmlTag = '<b>' + GameLogic.getCurrentPlayer().getName() + ', make your move! </b>';
        document.getElementById('currentPlayerMove').innerHTML = htmlTag;
    }

    const renderGameStatus = (winner) => {
        let htmlTag = '';
        if (winner) {
            htmlTag = '<b>' + GameLogic.getCurrentPlayer().getName() + ' is the winner! </b>';
        } else {
            htmlTag = '<b>This is a draw!</b>';
        }
        document.getElementById('gameStatus').innerHTML = htmlTag;
        showGameStatus();
    }

    const hideGameStatus = () => {
        document.getElementById("gameStatus").classList.add('hide');
        document.getElementById("gameStatus").classList.remove('show');
        document.getElementById("currentPlayerMove").classList.add('show');
        document.getElementById("currentPlayerMove").classList.remove('hide');
    }

    const showGameStatus = () => {
        document.getElementById("gameStatus").classList.remove('hide');
        document.getElementById("gameStatus").classList.add('show');
        document.getElementById("currentPlayerMove").classList.remove('show');
        document.getElementById("currentPlayerMove").classList.add('hide');
    }

    const renderScore = (players) => {
        var htmlTag = '<div class="score-board">';
        htmlTag += '<b>Player 1: ' + players[0].getName() + ' </b>';
        htmlTag += '<div class="score-number">' + players[0].getScore() + '</div></div>';

        htmlTag += '<div class="current-player"><div id ="currentPlayerMove" class="score-board show">';
        htmlTag += '</div></div>';

        htmlTag += '<div class="current-player"><div id ="gameStatus" class="score-board hide">';
        htmlTag += '</div></div>';

        htmlTag += '<div class="score-board">';
        htmlTag += '<b>Player 2: ' + players[1].getName() + ' </b>';
        htmlTag += '<div class="score-number">' + players[1].getScore() + '</div></div>';
        const scorePlaceholder = document.getElementById('scoreDisplay');
        scorePlaceholder.innerHTML = htmlTag;
    };

    const addListeners = () => {
        const elements = document.getElementsByClassName('box');
        const myFunction = function myFunction() {
            const position = this.getAttribute('data-index');
            GameLogic.matchLogic(position);
        };
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener('click', myFunction, false);
        }
    };

    const showWarningMessage = (errors) => {
        document.getElementById("warningMessage").classList.add('show');
        document.getElementById("warningMessage").classList.remove('hide');
        document.getElementById('warningMessage').innerHTML = `Please: ${errors.join(', ')}`;
    };

    const prepareGameScreen = () => {
        document.getElementById("game-container").classList.add('show');
        document.getElementById("game-container").classList.remove('hide');
        document.getElementById("formPlayers").classList.add('hide');
        document.getElementById("formPlayers").classList.remove('show');
    };

    const prepareMatchScreen = () => {
        document.getElementById("game-container").classList.add('hide');
        document.getElementById("game-container").classList.remove('show');
        document.getElementById("formPlayers").classList.add('show');
        document.getElementById("formPlayers").classList.remove('hide');
        document.getElementById("matchEndModal").classList.add('hide');
        document.getElementById("matchEndModal").classList.remove('show');
        document.getElementById("inputPlayer1").value = '';
        document.getElementById("inputPlayer2").value = '';
    }

    const showStartNewGame = () => {
        document.getElementById("game-control").classList.add('show');
        document.getElementById("game-control").classList.remove('hide');
    };

    const hideStartNewGame = () => {
        document.getElementById("game-control").classList.add('hide');
        document.getElementById("game-control").classList.remove('show');
    };

    const renderMatchEnd = (string) => {
        hideStartNewGame();
        const winnerStr = document.getElementById('matchResults');
        winnerStr.innerHTML = string;
        document.getElementById("matchEndModal").classList.add('show');
        document.getElementById("matchEndModal").classList.remove('hide');
        document.getElementById('startNewMatchButton').addEventListener('click', () => {
            GameLogic.startNewMatch();
        });
    }

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
        renderMatchEnd,
        prepareMatchScreen,
    };
})();