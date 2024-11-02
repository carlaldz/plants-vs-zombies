class Plant {
    constructor(ctx, x, y) {
        this.ctx = ctx; 
        
        this.x = x - 5; 
        this.y = y ; 
        this.w = null; 
        this.h = null;

        this.tick = 0; 
        this.img = null; 
        this.health = null; 
        this.strength = null; 
        this.damage = 10;
        
        this.rechargeTime = null; // Fast – 7.5 seconds, Slow – 30 seconds, Very slow – 50 seconds 
    }

    handleCollision() {
        if (this.tick % 40 === 0){
        this.health -= this.damage;
        }

        if (this.health <= 0){
            this.die; 
        }
    }


    draw() {
        if (this.img) {
            this.ctx.drawImage(
                this.img,
                (this.img.frameIndex / this.img.frames) * this.img.width, // Calculate frame position
                0,
                (1 / this.img.frames) * this.img.width,
                this.img.height,
                this.x,
                this.y,
                this.w,
                this.h
            );

            this.tick++; // Increment tick

            // Frame update logic
            if (this.tick > 10) { // Adjust speed by changing this value
                this.tick = 0;
                this.img.frameIndex++; // Move to the next frame
                if (this.img.frameIndex >= this.img.frames) { // Reset to first frame
                    this.img.frameIndex = 0;
                }
            }
            
        }
    }

    

    die(){
        //Logica para eliminar la planta
    }
}

class Peashooter extends Plant {
    constructor(ctx, x, y) {
        super(ctx, x, y);
        this.health = 300; 
        this.strength = 20;
        
        this.rechargeTime = 750; // 7.5 seconds 
        this.w = 80;
        this.h = 80; 
        //this.bullets = [];

        this.img = new Image(); 
        this.img.src = "/assets/images/peashooter sprite separado.png";  //BUG, está un poco feo
        this.img.frames = 8; 
        this.img.frameIndex = 0; 
    }

    shoot() {
            return { x: this.x, y: this.y };
    }
}

class Sunflower extends Plant {
    constructor(ctx, x, y) {
        super(ctx, x, y);
        this.health = 300; 
        this.strength = 0; // Sunflower doesn't have strength
        
        this.rechargeTime = 500; // 5 seconds 
        this.w = 75; 
        this.h = 75; 

        this.img = new Image(); 
        this.img.src = "/assets/images/sunflower.png";
        this.img.frames = 6; 
        this.img.frameIndex = 0;
    }

    createSun() {
        return { x: this.x, y: this.y };
    }
}

class Nut extends Plant {
    constructor(ctx,x, y) {
        super(ctx, x, y);

        this.health = 1000; //Ajustar segun tarden en comérsela
        this.strength = 0; 
        
        this.rechargeTime = 2000; // 20 seconds (ajustar con la velocidad del juego, en el original son 30) 
        this.w = 75; 
        this.h = 75; 

        this.img = new Image(); 
        this.img.src = "/assets/images/nuez.png"; //Meter imagen nuez
        this.img.frames = 5; 
        this.img.frameIndex = 0;
    }

}

class Cards {
    constructor(ctx, x, y, width, height, imageSrc, plantType) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
        this.image = new Image(); 
        this.image.src = imageSrc;
        this.image.onload = ( ) => {
            this.imageLoaded = true; 
        }  
        this.plantType = plantType;
        this.bnw = new Image(); 
        this.bnw.src = null; 
        this.clicked = false;
    }

    draw() {
        if (this.imageLoaded) {
            if (this.clicked){
            this.ctx.drawImage(this.bnw, this.x, this.y, this.width, this.height);
            }
            else{
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height); }
        } else {
            console.log('Card Image not loaded yet.');
        }
    }

    checkClicked(clickX, clickY) {
        const clicked2 = (
            clickX >= this.x &&
            clickX <= this.x + this.width &&
            clickY >= this.y &&
            clickY <= this.y + this.height
        );

        if (clicked2) {
            this.clicked = !this.clicked; 
        }
        return this.clicked;
    }

}

class SunflowerCard extends Cards {
    constructor(ctx) {
        super(ctx, 35, 50, 90, 150, "/assets/images/sunflower card color.png", "sunflower");
        this.plantType = 'sunflower';
        this.price = 50;
        this.bnw.src = "/assets/images/sun cartas wnb.png"
    }
    
}

class PeashooterCard extends Cards {
    constructor(ctx) {
        super(ctx, 35, 200, 90, 150, "/assets/images/pea carta color.png", "peashooter");
        this.plantType = 'peashooter';
        this.price = 100;
        this.bnw.src = "/assets/images/pea cartas wnb.png"
    }
    
}

class NutCard extends Cards {
    constructor(ctx) {
        super(ctx, 35, 350, 90, 150, "/assets/images/nut card color.png", "nut");
        this.plantType = 'nut'; 
        this.price = 50;
        this.bnw.src = "/assets/images/nut cartas wnb.png"
    }
    
}





/* 310 de y es justo en la mirad de la línea del medio 
260 empieza la línea
 360 termina 
 
con la x, en 290 empieza la casilla, 390 termina 
*/