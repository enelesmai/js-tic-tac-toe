const Gameboard = (() => {
    let boardAarray = ['', '', '', '', '', '', '', ''];
    const updateBoard = (position, symbol) => {
        boardAarray[position] = symbol;
        return true;
    };
    const isPositionEmpty = (position) => boardAarray[position] === '';
    const cleanBoard = () => {
        boardAarray = ['', '', '', '', '', '', '', ''];
        return true;
    };
    const getBoardArray = () => boardAarray;
    return {
        updateBoard, isPositionEmpty, cleanBoard, getBoardArray,
    };
})();

Gameboard.updateBoard(0, "X");
Gameboard.updateBoard(2, "O");
Gameboard.updateBoard(5, "X");