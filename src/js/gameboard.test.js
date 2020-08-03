import { Gameboard } from './gameboard';

const expected_empty = ['', '', '', '', '', '', '', '', ''];

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