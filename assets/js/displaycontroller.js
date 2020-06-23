const DisplayController = (() => {
    //let boardAarray = ['', '', '', '', '', '', '', ''];
    const renderBoard = (array) => {
        var htmlTag = '<div class="game-board">'
        for (let i = 0; i < array.length; i += 1) {
            htmlTag += '<div class="box">' + array[i] + '</div>';
        }
        htmlTag += '</div>';
        const boardPlaceholder = document.getElementById('boardDisplay');
        boardPlaceholder.innerHTML = htmlTag;
    };

    return {
        renderBoard,
    };
})();