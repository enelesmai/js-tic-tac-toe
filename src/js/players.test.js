import { Player } from './player';


let p1 = Player('p1', 'X');
let moves = [0, 4, 8];
let empty_moves = [];

test('it stores player moves', () => {
    for (let i = 0; i < moves.length; i += 1) {
        p1.storeMove(moves[i]);
    }
    expect(p1.getMoves()).toEqual(
        expect.arrayContaining(moves)
    );
});

test('it clears player moves', () => {
    for (let i = 0; i < moves.length; i += 1) {
        p1.storeMove(moves[i]);
    }
    p1.cleanMoves();
    expect(p1.getMoves()).toEqual(
        expect.arrayContaining(empty_moves)
    );
});

test('it gets player name', () => {
    expect(p1.getName()).toBe('p1');
});

test('it gets player symbol', () => {
    expect(p1.getSymbol()).toBe('X');
});

test('it gets player proper score', () => {
    p1.winner();
    p1.winner();
    expect(p1.getScore()).toBe(2);
});