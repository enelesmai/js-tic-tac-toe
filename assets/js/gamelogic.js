const GameLogic = (() => {
    let p1, p2, currentPlayer;
    let gameFinished = false;
    let gamesPlayed = 0;
    let matchWinner;

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
            DisplayController.prepareGameScreen();
            updateGame();
            DisplayController.renderNextMove();
        } else {
            DisplayController.showWarningMessage(errors);
        };
    };

    const restartGame = () => {
        p1.cleanMoves();
        p2.cleanMoves();
        Gameboard.cleanBoard();
        DisplayController.renderBoard(Gameboard.getBoardArray());
        DisplayController.hideGameStatus();
        DisplayController.renderNextMove();
        DisplayController.hideStartNewGame();
        gameFinished = false;
    };
    const getCurrentPlayer = () => { return currentPlayer }

    const isGameFinished = () => {
        return gameFinished
    }
    const finishGame = () => {
        gamesPlayed += 1;
        gameFinished = true;
        DisplayController.showStartNewGame();
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
    const matchLogic = (index) => {
        if (!isGameFinished()) {
            if (Gameboard.isPositionEmpty(index)) {
                Gameboard.updateBoard(index, getCurrentPlayer().getSymbol());
                getCurrentPlayer().storeMove(index);
            }
            DisplayController.renderBoard(Gameboard.getBoardArray());
            if (winnerMove()) {
                getCurrentPlayer().winner();
                DisplayController.renderScore(getPlayers());
                DisplayController.renderGameStatus(true);
                finishGame();
            } else {
                if (Gameboard.isBoardFull()) {
                    DisplayController.renderGameStatus(false);
                    finishGame();
                } else {
                    switchCurrentPlayer();
                    DisplayController.renderNextMove();
                }
            };
        };
        if (gamesPlayed == 3 && p1.getScore() != p2.getScore()) {
            if (p1.getScore() > p2.getScore()) {
                console.log("match winner :" + p1.getName())
                matchWinner = p1;
            } else {
                console.log("match winner :" + p2.getName())
                matchWinner = p2;
            };
        } else if (gamesPlayed == 3) {
            console.log("Wow you both are gooood!");
        };
        if (matchWinner) {
            // Show Match winner final score and finish
            //Render new Match button
        }

    };
    return { startMatch, switchCurrentPlayer, getCurrentPlayer, winnerMove, restartGame, getPlayers, isGameFinished, finishGame, matchLogic }
})();