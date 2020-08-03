import { DisplayController } from './displaycontroller';
import { GameLogic } from './gamelogic';
import { Player } from './player';


let p1 = Player('Carlos', 'X');
let p2 = Player('Selene', 'O');

let htmlTag = '<div class="score-board">';
htmlTag += `<b>Player 1: Carlos </b>`;
htmlTag += `<div class="score-number">0</div></div>`;
htmlTag += '<div class="current-player"><div id ="currentPlayerMove" class="score-board show">';
htmlTag += '</div></div>';
htmlTag += '<div class="current-player"><div id ="gameStatus" class="score-board hide">';
htmlTag += '</div></div>';
htmlTag += '<div class="score-board">';
htmlTag += `<b>Player 2: Selene </b>`;
htmlTag += `<div class="score-number">1</div></div>`;

let winnerHtmlTag = `<b>Carlos is the winner! </b>`;
let drawHtmlTag = '<b>This is a draw!</b>';

const fakeHtmltag = true;

test('it renders the correct score from current players', () => {
    p2.winner()
    GameLogic.setCurrentPlayers(p1, p2);
    expect(DisplayController.renderScore(GameLogic.getPlayers(), fakeHtmltag)).toEqual(htmlTag);
});

test('it renders winner message', () => {
    GameLogic.setCurrentPlayers(p1, p2);
    GameLogic.setCurrentPlayer(p1);
    expect(DisplayController.renderGameStatus(true, true)).toEqual(winnerHtmlTag);
});

test('it renders draw message', () => {
    GameLogic.setCurrentPlayers(p1, p2);
    GameLogic.setCurrentPlayer(p1);
    expect(DisplayController.renderGameStatus(false, true)).toEqual(drawHtmlTag);
});
