import { Gameboard } from './gameboard';

const expected_empty = ['', '', '', '', '', '', '', '', ''];
const expected_full = ['X', 'O', 'O', 'X', 'X', 'O', 'O', 'X', 'O'];

test('it tests if position is empty', () => {
    expect(Gameboard.isPositionEmpty(0)).toBe(true);
});

test('it updates the board', () => {
    Gameboard.updateBoard(2, 'X');
    expect(Gameboard.isPositionEmpty(2)).toBe(false);
});

test('it returns the board array', () => {
    expect(Gameboard.getBoardArray()).toEqual(
        expect.arrayContaining(expected_empty)
    );
});

test('it populates gameboard array with a game', () => {
    for (let i = 0; i < expected_full.length; i += 1) {
        Gameboard.updateBoard(i, expected_full[i]);
    }
    expect(Gameboard.getBoardArray()).toEqual(
        expect.arrayContaining(expected_full)
    );
});

test('it cleans populated gameboard array', () => {
    for (let i = 0; i < expected_full.length; i += 1) {
        Gameboard.updateBoard(i, expected_full[i]);
    }
    Gameboard.cleanBoard();
    expect(Gameboard.getBoardArray()).toEqual(
        expect.arrayContaining(expected_empty)
    );
});

test('it checks if board full', () => {
    for (let i = 0; i < expected_full.length; i += 1) {
        Gameboard.updateBoard(i, expected_full[i]);
    }
    expect(Gameboard.isBoardFull()).toEqual(true);
});