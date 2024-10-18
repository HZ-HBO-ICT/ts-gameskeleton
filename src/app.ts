import BaseGame from './BaseGame.js';

const game: BaseGame = new BaseGame(document.getElementById('game') as HTMLCanvasElement);

window.addEventListener('load', () => {
  game.start();
});
