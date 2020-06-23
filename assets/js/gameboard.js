const Gameboard = (() => {
    let board_array = ["", "", "", "", "", "", "", ""];
    const updateBoard = (position, symbol) => { board_array[position] = symbol }
    const isPositionEmpty = (position) => { board_array[position] === "" }
    const cleanBoard = () => { board_array = ["", "", "", "", "", "", "", ""] }
})();