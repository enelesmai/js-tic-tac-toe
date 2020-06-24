const GameLogic = (() => {
    let p1, p2, currentPlayer;
    let gameFinished = false;

    const winnerMove = () => {
        let winner = false;
        let winning = [
            ['0', '4', '8'],
            ['6', '4', '2'],
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8']
        ];
        let pMoves = currentPlayer.getMoves();

        for (let i = 0; i < winning.length; i += 1) {
            if (winning[i].filter(n => !pMoves.includes(n)).length === 0) {
                winner = true;
            };
        }
        return winner;
    };
    const isValid = (p1, p2) => {
        let error = [];
        if (p1.getName() == "" || p2.getName() == "") {
            error.push('complete both player names')
        }
        if (p1.getName() == p2.getName()) {
            error.push('use different player names')
        }
        return error;
    };

    const getPlayers = () => {
        return [p1, p2];
    };

    const getRandomPlayer = () => {
        return getPlayers()[Math.floor(Math.random() * 2)];
    }

    const startMatch = () => {
        p1 = Player(document.getElementById("inputPlayer1").value, "X");
        p2 = Player(document.getElementById("inputPlayer2").value, "O");
        let errors = isValid(p1, p2);
        if (errors.length == 0) {
            currentPlayer = getRandomPlayer(p1, p2);
            document.getElementById("game-container").classList.add('show');
            document.getElementById("game-container").classList.remove('hide');
            document.getElementById("game-control").classList.add('show');
            document.getElementById("game-control").classList.remove('hide');
            document.getElementById("formPlayers").classList.add('hide');
            document.getElementById("formPlayers").classList.remove('show');
            updateGame();
            DisplayController.renderNextMove();
        } else {
            document.getElementById("warningMessage").classList.add('show');
            document.getElementById("warningMessage").classList.remove('hide');
            document.getElementById('warningMessage').innerHTML = `Please: ${errors.join(', ')}`;
        };
    };

    const restartGame = () => {
        p1.cleanMoves();
        p2.cleanMoves();
        Gameboard.cleanBoard();
        DisplayController.renderBoard(Gameboard.getBoardArray());
        DisplayController.hideGameStatus();
        DisplayController.renderNextMove();
        gameFinished = false;
    };
    const getCurrentPlayer = () => { return currentPlayer }
    const isGameFinished = () => {
        return gameFinished
    }
    const finishGame = () => {
        gameFinished = true
    }
    const switchCurrentPlayer = () => {
        if (currentPlayer.getName() === p1.getName()) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
        return currentPlayer;
    };
    const updateGame = () => {
        DisplayController.renderBoard(Gameboard.getBoardArray());
        DisplayController.renderScore(GameLogic.getPlayers());
    };
    return { startMatch, switchCurrentPlayer, getCurrentPlayer, winnerMove, restartGame, getPlayers, isGameFinished, finishGame }
})();