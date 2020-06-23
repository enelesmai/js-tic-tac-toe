p1 = Player("Carlos", "X");
p2 = Player("Selene", "O");

Gameboard.updateBoard(0, "X");
Gameboard.updateBoard(2, "O");
Gameboard.updateBoard(5, "X");

p2.winner()

DisplayController.renderBoard(Gameboard.getBoardArray());
DisplayController.renderScore(p1, p2);