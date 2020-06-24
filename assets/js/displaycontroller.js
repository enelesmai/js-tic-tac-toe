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
            if (!GameLogic.isGameFinished()) {
                const position = this.getAttribute('data-index');
                if (Gameboard.isPositionEmpty(position)) {
                    Gameboard.updateBoard(position, GameLogic.getCurrentPlayer().getSymbol());
                    GameLogic.getCurrentPlayer().storeMove(position);
                }
                renderBoard(Gameboard.getBoardArray());
                if (GameLogic.winnerMove()) {
                    GameLogic.getCurrentPlayer().winner();
                    renderScore(GameLogic.getPlayers());
                    renderGameStatus(true);
                    GameLogic.finishGame();
                } else {
                    if (Gameboard.isBoardFull()) {
                        renderGameStatus(false);
                        GameLogic.finishGame();
                    } else {
                        GameLogic.switchCurrentPlayer();
                        renderNextMove();
                    }
                };
            }
        };
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener('click', myFunction, false);
        }
    };

    return {
        renderBoard,
        renderScore,
        renderNextMove,
        hideGameStatus,
        showGameStatus,
    };
})();