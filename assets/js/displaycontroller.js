const DisplayController = (() => {
    //let boardAarray = ['', '', '', '', '', '', '', ''];
    const renderBoard = (array) => {
        var htmlTag = '<div class="game-board">';
        for (let i = 0; i < array.length; i += 1) {
            htmlTag += '<div class="box">' + array[i] + '</div>';
        }
        htmlTag += '</div>';
        const boardPlaceholder = document.getElementById('boardDisplay');
        boardPlaceholder.innerHTML = htmlTag;
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

    return {
        renderBoard,
        renderScore,
    };
})();