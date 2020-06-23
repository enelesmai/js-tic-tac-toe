const DisplayController = (() => {
    const renderBoard = (array) => {
        console.log("render");
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
            console.log("clik");
            const position = this.getAttribute('data-index');
            console.log("pos: " + position);
            if (Gameboard.isPositionEmpty(position)) {
                console.log("isempty");
                Gameboard.updateBoard(position, p1.getSymbol())
            }
            console.log(Gameboard.getBoardArray());
            renderBoard(Gameboard.getBoardArray());
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