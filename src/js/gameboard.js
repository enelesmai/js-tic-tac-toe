/* eslint-disable no-unused-vars */
export const Gameboard = (() => {
  let boardAarray = ['', '', '', '', '', '', '', '', ''];
  const updateBoard = (position, symbol) => {
    boardAarray[position] = symbol;
    return true;
  };
  const isPositionEmpty = (position) => boardAarray[position] === '';
  const cleanBoard = () => {
    boardAarray = ['', '', '', '', '', '', '', '', ''];
    return true;
  };
  const getBoardArray = () => boardAarray;
  const isBoardFull = () => boardAarray.filter(n => n !== '').length === 9;
  return {
    updateBoard,
    isPositionEmpty,
    cleanBoard,
    getBoardArray,
    isBoardFull,
  };
})();
export default Gameboard;