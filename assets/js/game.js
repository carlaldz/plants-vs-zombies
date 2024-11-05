class Game {
    constructor(ctx, onGameOver) {
      this.ctx = ctx;
  
      this.background = new Background(ctx);

      this.endGame = false; 
      this.onGameOver = onGameOver;
      const goToNoteScreenButton = document.getElementById('go-to-note-screen-button');
      const restartButton = document.getElementById('restart-button');
    
      this.sunflowerCard = new SunflowerCard (ctx); 
      this.peashooterCard = new PeashooterCard (ctx); 
      this.nutCard = new NutCard(ctx);
      this.plantClass = null; 

      this.cardsType = [
        this.sunflowerCard,
        this.peashooterCard,
        this.nutCard
      ];

      this.plants = [];
      this.zombies = [new Zombie(ctx)]; 

      this.interval = null;
      this.started = true;

      this.tick = 0; 

      this.sunsCount = 100;
      this.suns = [];
      this.bullets = [] ;
      document.addEventListener('click', (event) => this.handleClick(event));

    }
    
    handleClick(event) {
      const clickX = event.clientX;
      const clickY = event.clientY;
      this.plantClass = this.identifyTypeOfCardOnClick(clickX, clickY);
      console.log (this.plantClass); 
     if (this.plantClass) {
        document.addEventListener('click', (event2) => this.handleSecondClick(event2));
      }
    }

    handleSecondClick (event2){ //Obtengo dónde quiero poner la planta
      const posX = event2.clientX;
      const posY = event2.clientY;

      const centeredPosition = this.boxCoordinate(posX, posY);
      console.log (centeredPosition);
      if (centeredPosition && this.plantClass) {
        const isOccupied = this.isPositionOccupied (centeredPosition.x, centeredPosition.y)
        if (!isOccupied && this.plantClass.price <= this.sunsCount){
          this.addPlant(this.plantClass.plantType, centeredPosition.x, centeredPosition.y);
          this.sunsCount -= this.plantClass.price;
        }
        this.plantClass.clicked = false;
      }
  
      this.plantClass = null;
    }
  
    
    boxCoordinate(posX, posY){
      const centerX = [315, 415, 510, 610, 705, 795, 890, 985, 1085];
      const centerY = [90, 190, 290, 390, 490];
      if (posX > 305 && posX < 1190 && posY < 590 && posY > 80) {
        function findClosestCenter(value, centers) {
          return centers.reduce((closestCenter, center) =>
              Math.abs(center - value) < Math.abs(closestCenter - value) ? center : closestCenter
          );
      }
      const closestX = findClosestCenter(posX, centerX);
      const closestY = findClosestCenter(posY, centerY);
      
      return { x: closestX, y: closestY };

      }
      //else {this.plantClass = null}
    }


    identifyTypeOfCardOnClick(clickX, clickY) {
        
        const card = this.cardsType.find(card => card.checkClicked(clickX, clickY));
        
        return card || null; // Devuelve la carta entera o null si no se hizo clic en ninguna carta
    }
    
  

    addZombie (){
      const newZombie = new Zombie(this.ctx);
      this.zombies.push(newZombie); 

    }

    addPlant (plantClass, x, y){
      let plant;
        switch (plantClass) {
            case 'sunflower':
                plant = new Sunflower(this.ctx, x, y);
                console.log ('Sunflower added');
                break;
            case 'peashooter':
                plant = new Peashooter(this.ctx, x, y);
                console.log ('Peashooter added');
                break;
            case 'nut':
                plant = new Nut(this.ctx, x, y);
                console.log ('Nut added');
                break;
            default:
                return; // Si no es un tipo de planta válido, no hacer nada
        }
        this.plants.push(plant); 
        console.log(this.plants);
        plantClass = null; 
    }

    addBullet(){  //Hay un bug, cuando se reeinicia el intervalo se disparan dos veces
      if (this.tick % 112 === 0) {
        this.plants.forEach(plant => {
            if (plant instanceof Peashooter) {
              const bulletPosition = plant.shoot();
              const bullet = new Bullet (this.ctx, bulletPosition.x, bulletPosition.y);
              this.bullets.push(bullet);
            }
        });
      }
      for (let i = 0; i < this.bullets.length; i++){
        const bullet = this.bullets[i]
        if (!bullet.isOffScreen){
          bullet.draw(); 
          bullet.move(); 
        }
      }
    }

    addSun(){
      if (this.tick % 700 === 0) {
        this.plants.forEach(plant => {
            if (plant instanceof Sunflower) {
              const sunPosition = plant.createSun();
              const sun = new Suns (this.ctx, sunPosition.x, sunPosition.y);
              this.suns.push(sun);
              this.sunsCount +=25;
            }
        });
      }
      for (let i = 0; i < this.suns.length; i++){
        const sun = this.suns[i]
          sun.draw();  
          sun.update(); 
      }
    }
     updateSuns(){
      for (let i = 0; i < this.suns.length; i++){
        const sun = this.suns[i]; 
        sun.update();

        if (sun.disappeared){
          this.suns.splice(i,1); 
        }
      }
    }
  
    start() {    
      this.cardsType.forEach(card => card.isClicked = false);   
      
      this.interval = setInterval(() => {
          this.clear(); 
          this.move();   
          this.draw();
          this.addSun();   
          this.updatePlants(); 
          this.updateZombies(); 
          this.updateSuns();
          this.addBullet();
          this.checkShooting();
          this.checkCollisions();
          this.gameOver(); 

          this.tick++;
          if (this.tick <= 3200) {
            if (this.tick % 700 === 0) {
                this.addZombie();
            }
        }
        if (this.tick > 3200 && this.tick <= 4500) {
            if (this.tick % 200 === 0) {
                this.addZombie();
            }
        }
        if (this.tick > 4500 && this.tick <= 9000) {
            if (this.tick % 300 === 0) {
                this.addZombie();
            }
        }
        if (this.tick > 9000 && this.tick <= 11000) {
            if (this.tick % 150 === 0) {
                this.addZombie();
            }
        }
        if (this.tick > 16000 && this.zombies.length === 0) {
            this.img = new Image();
            this.img.src = "assets/images/—Pngtree—fashion gradient game victory cartoon_5487174.png";
            this.ctx.drawImage(this.img, 600, 100, 600, 600);
            
        }
        
        
      }, 1000 / 60);    
    }


    draw() {
       
      this.background.draw();
      this.sunflowerCard.draw();
      this.peashooterCard.draw(); 
      this.nutCard.draw(); 
      this.drawSunCounter();
      this.suns.forEach(sun => sun.draw());
      this.bullets.forEach(bullet => bullet.draw());
    }

    updateZombies (){
      for (let i = 0; i < this.zombies.length; i++){
        const zombie = this.zombies [i]; 
        zombie.move();
        if (zombie.isEating){
          zombie.drawEating(); 
        } 
        else{
          zombie.drawWalking();
          zombie.reset(); 
        }
         
        if (zombie.health <= 0){
          this.zombies.splice (i, 1); //Add animation 
        }
      }
    }

   

    updatePlants() {
      for (let i = 0; i < this.plants.length ; i++) {
        const plant = this.plants[i];
        plant.draw();
        if (plant.health <= 0) {
            this.plants.splice(i, 1); // Elimina la planta si está muerta
        }
      }
    }

    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move () {
      //Aquí puedo mover los soles, y cortacésped
      //this.zombie.move(); 
    }

    checkCollisions(){
      this.zombies.forEach (zombie => {
        zombie.isEating = false;
        this.plants.forEach (plant => {
          if (this.isColliding(zombie, plant)){
            zombie.isEating = true;
            zombie.handleCollision(); 
            plant.handleCollision(); // implementar esto en el código de zombie
          }
        })
      })
    }

    isColliding (zombie, plant){
      return (
        zombie.x < plant.x + plant.w - 20 &&
        zombie.x + zombie.w > plant.x + 20&&
        zombie.y  < plant.y + plant.h - 20 && 
        zombie.y + zombie.h > plant.y + 20
      );
    }

    checkShooting() {
      const bulletsToRemove = [];
  
      this.zombies.forEach(zombie => {
          this.bullets.forEach((bullet,i) => {
              if (this.isShot(zombie, bullet)) {
                  console.log ('Shot');
                  zombie.receiveDamage(); 
                  bulletsToRemove.push(i); 
              }
          });
      });
      for (let i = bulletsToRemove.length - 1; i >= 0; i--) {
        console.log(`Removing bullet at index ${bulletsToRemove[i]}`);
        this.bullets.splice(bulletsToRemove[i], 1);
      }
  }

    isShot (zombie, bullet){
        return (zombie.x +35 < bullet.x + bullet.w &&
        zombie.x + zombie.w -30 > bullet.x &&
        zombie.y +30< bullet.y + bullet.h && 
        zombie.y + zombie.h -30 > bullet.y);
    }

    drawSunCounter() { 
      this.ctx.font = "20px Arial"; 

      const text = `Suns: ${this.sunsCount}`;
      const textWidth = this.ctx.measureText(text).width;
      const rectX = 565;  
      const rectY = 10;  
      const rectWidth = textWidth + 50;  
      const rectHeight = 40;
    
      // Draw white rectangle as background for text
      this.ctx.fillStyle = "white";
      this.ctx.strokeStyle = "black";
      this.ctx.lineWidth = 2;
      this.ctx.fillRect(rectX, rectY, rectWidth, rectHeight); 
      this.ctx.strokeRect(rectX, rectY, rectWidth, rectHeight); 
      
      this.ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
      this.img = new Image (this.ctx);
      this.img.src = "assets/images/sol.png";
      this.ctx.drawImage (this.img, rectX + textWidth + 15, rectY + 5, 30, 30);
      this.ctx.fillStyle = "black";
      this.ctx.fillText(text, rectX + 10, rectY + 25);
  }

  isPositionOccupied(x, y) {
    return this.plants.some(plant => 
      Math.abs(plant.x - x) < 10 && Math.abs(plant.y - y) < 10
    );
  }

  gameOver(){
    this.zombies.forEach(zombie => {
     if (zombie.x < 150){
      this.endGame = true; 
      this.onGameOver();
     }
      
  });
  }
}