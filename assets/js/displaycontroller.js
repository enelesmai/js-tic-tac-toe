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

    const renderScore = (p1, p2) => {
        var htmlTag = '<div class="score-board">';
        htmlTag += '<b>Player 1: ' + p1.getName() + ' </b>';
        htmlTag += '<div class="score-number">' + p1.getScore() + '</div>';
        htmlTag += '</div><div class="result"></div><div class="score-board">';
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
                Gameboard.updateBoard(position, GameLogic.getCurrentPlayer().getSymbol())
            }
            renderBoard(Gameboard.getBoardArray());
            GameLogic.switchCurrentPlayer();
        };
        for (let i = 0; i < elements.length; i += 1) {
            elements[i].addEventListener('click', myFunction, false);
        }
    };

    return {
        renderBoard,
        renderScore,
    };
})();