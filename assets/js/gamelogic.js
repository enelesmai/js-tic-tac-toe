const GameLogic = (() => {
    let p1, p2, currentPlayer
    const startMatch = () => {
        p1 = Player(document.getElementById("inputPlayer1").value, "X");
        p2 = Player(document.getElementById("inputPlayer2").value, "O");
        currentPlayer = p1;
        document.getElementById("game-container").classList.add('show');
        document.getElementById("game-container").classList.remove('hide');
        updateGame();
    };
    const getCurrentPlayer = () => { return currentPlayer }
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
        DisplayController.renderScore(p1, p2);
    };
    return { startMatch, switchCurrentPlayer, getCurrentPlayer }
})();