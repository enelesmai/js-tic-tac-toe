/* eslint-disable no-undef */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/layout-tictactoe.css'
import '../css/style.css'
import { GameLogic } from './gamelogic';
import { Player } from './player';
import { DisplayController } from './displaycontroller';
import { Gameboard } from './gameboard';

let p1;
let p2;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('warningMessage').classList.add('hide');
    document.getElementById('startButton').addEventListener('click', () => {
        p1 = Player(document.getElementById('inputPlayer1').value, 'X');
        p2 = Player(document.getElementById('inputPlayer2').value, 'O');
        var start = GameLogic.startMatch(p1, p2);
        if (start) {
            DisplayController.prepareGameScreen();
            DisplayController.updateGame(Gameboard.getBoardArray(), [p1, p2]);
            DisplayController.renderNextMove();
        } else {
            DisplayController.showWarningMessage(errors);
        }
    });
    document.getElementById('restartButton').addEventListener('click', () => {
        GameLogic.restartGame();
    });
});