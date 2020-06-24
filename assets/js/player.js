const Player = (name, symbol) => {
    let score = 0
    let moves = [];
    const getName = () => name;
    const getSymbol = () => symbol;
    const getScore = () => score;
    const winner = () => { score += 1 };
    const storeMove = (move) => { moves.push(move) };
    const getMoves = () => moves;
    return { getName, getSymbol, getScore, winner, storeMove, getMoves };
};