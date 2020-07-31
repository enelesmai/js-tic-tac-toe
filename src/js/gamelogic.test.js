import { Player } from './player'
import { GameLogic } from './gamelogic';

const w1 = ['6', '4', '2'];
const w2 = ['6', '1', '2', '4'];
let p1 = Player('p1', 'X');


/* Testing winner move */

test('it verifies winner sequence', () => {
    console.log(p1.getMoves())
    expect(GameLogic.winnerMove(w1)).toBe(true);
});

test('it verifies no winner sequence', () => {
    console.log(p1.getMoves())
    expect(GameLogic.winnerMove(w2)).toBe(true);
});


