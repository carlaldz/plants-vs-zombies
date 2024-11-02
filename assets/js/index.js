document.addEventListener ('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen'); 
    const gameOverScreen = document.getElementById ('game-over-screen'); 
    const canvas = document.getElementById('canvas');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById ('restart-button'); 
    const homeButton = document.getElementById ('home-button'); 
    const ctx = canvas.getContext('2d');
    let game; 

    startButton.addEventListener('click', () =>{
        game = new Game(ctx); 
        startScreen.style.display = 'none'; 
        canvas.style.display = 'block';
        game.start();
    }); 

    homeButton.addEventListener('click', () => {
        gameOverScreen.style.display = 'none';
        startScreen.style.display = 'flex';
        canvas.style.display = 'none'
      });
    
    function showGameOverScreen() {
        canvas.style.display = 'none';
        gameOverScreen.style.display = 'flex';
    }

});





  