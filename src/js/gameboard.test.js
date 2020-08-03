import { Gameboard } from './gameboard';

const expectedEmpty = ['', '', '', '', '', '', '', '', ''];
const expectedFull = ['X', 'O', 'O', 'X', 'X', 'O', 'O', 'X', 'O'];

test('it tests if position is empty', () => {
  expect(Gameboard.isPositionEmpty(0)).toBe(true);
});

test('it updates the board', () => {
  Gameboard.updateBoard(2, 'X');
  expect(Gameboard.isPositionEmpty(2)).toBe(false);
});

test('it returns the board array', () => {
  expect(Gameboard.getBoardArray()).toEqual(
    expect.arrayContaining(expectedEmpty),
  );
});

test('it populates gameboard array with a game', () => {
  for (let i = 0; i < expectedFull.length; i += 1) {
    Gameboard.updateBoard(i, expectedFull[i]);
  }
  expect(Gameboard.getBoardArray()).toEqual(
    expect.arrayContaining(expectedFull),
  );
});

test('it cleans populated gameboard array', () => {
  for (let i = 0; i < expectedFull.length; i += 1) {
    Gameboard.updateBoard(i, expectedFull[i]);
  }
  Gameboard.cleanBoard();
  expect(Gameboard.getBoardArray()).toEqual(
    expect.arrayContaining(expectedEmpty),
  );
});

test('it checks if board full', () => {
  for (let i = 0; i < expectedFull.length; i += 1) {
    Gameboard.updateBoard(i, expectedFull[i]);
  }
  expect(Gameboard.isBoardFull()).toEqual(true);
});