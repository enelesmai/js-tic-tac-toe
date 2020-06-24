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
        let htmlTag = '<b>' + GameLogic.getCurrentPlayer().getName() + ', make your move </b>';
        document.getElementById('currentPlayerMove').innerHTML = htmlTag;
    }

    const renderScore = (p1, p2) => {
        var htmlTag = '<div class="score-board">';
        htmlTag += '<b>Player 1: ' + p1.getName() + ' </b>';
        htmlTag += '<div class="score-number">' + p1.getScore() + '</div></div>';

        htmlTag += '<div class="current-player"><div id ="currentPlayerMove" class="score-board">';
        htmlTag += '</div></div>';


        htmlTag += '<div class="score-board">';
        htmlTag += '<b>Player 2: ' + p2.getName() + ' </b>';
        htmlTag += '<div class="score-number">' + p2.getScore() + '</div></div>';
        const scorePlaceholder = document.getElementById('scoreDisplay');
        scorePlaceholder.innerHTML = htmlTag;
    };

    const addListeners = () => {
        const elements = document.getElementsByClassName('box');
        const myFunction = function myFunction() {
            const position = this.getAttribute('data-index');
            if (Gameboard.isPositionEmpty(position)) {
                Gameboard.updateBoard(position, GameLogic.getCurrentPlayer().getSymbol());
                GameLogic.getCurrentPlayer().storeMove(position);
                console.log(GameLogic.getCurrentPlayer().getMoves());
            }
            renderBoard(Gameboard.getBoardArray());
            if (GameLogic.winnerMove()) {
                console.log("winner is : " + GameLogic.getCurrentPlayer().getName());
            } else {
                GameLogic.switchCurrentPlayer();
                renderNextMove();
            };
        };
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener('click', myFunction, false);
        }
    };

    return {
        renderBoard,
        renderScore,
        renderNextMove,
    };
})();