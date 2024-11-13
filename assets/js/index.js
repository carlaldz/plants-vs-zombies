document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen'); 
    const noteScreen = document.getElementById('note-screen'); 
    const gameOverScreen = document.getElementById('game-over-screen'); 
    const canvas = document.getElementById('canvas');
    const startButton = document.getElementById('start-button');
    const goToNoteScreenButton = document.getElementById('go-to-note-screen-button'); // New button
    const restartButton = document.getElementById('restart-button'); 
    const homeButton = document.getElementById('home-button'); 
    const playAgainButton = document.getElementById ('play-again-button');
    const ctx = canvas.getContext('2d');
    let game; 

    // Set initial visibility
    startScreen.style.display = 'flex';       
    noteScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';     
    canvas.style.display = 'none';

    // Start button on startScreen to go to noteScreen
    goToNoteScreenButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameOverScreen.style.display = 'none';
        canvas.style.display = 'none';
        noteScreen.style.display = 'flex';
    });

    // Start button on noteScreen to start the game
    startButton.addEventListener('click', () => {
        game = new Game(ctx, showGameOverScreen);
        noteScreen.style.display = 'none';
        canvas.style.display = 'block';
        game.start();
    });

    homeButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameOverScreen.style.display = 'none';
        canvas.style.display = 'none';
        noteScreen.style.display = 'flex';
    });

    restartButton.addEventListener('click', () => {
        game = new Game(ctx, showGameOverScreen);
        startScreen.style.display = 'none';
        noteScreen.style.display = 'none';
        gameOverScreen.style.display = 'none';
        canvas.style.display = 'block';
        game.start();
    });

    

    function showGameOverScreen() {
        canvas.style.display = 'none';
        gameOverScreen.style.display = 'flex';
        homeButton.style.display = 'inline-block';
        restartButton.style.display = 'inline-block';
    }
});
