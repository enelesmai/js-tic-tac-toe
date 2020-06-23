const Player = (name, symbol) => {
    let score = 0
    const getName = () => name;
    const getSymbol = () => symbol;
    const getScore = () => score;
    const winner = () => { score += 1 };
    return { getName, getScore };
};


p1 = Player("Carlos", "X");
p2 = Player("Selene", "O");
