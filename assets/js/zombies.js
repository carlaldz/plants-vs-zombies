class Zombie {
    constructor (ctx){
        this.ctx = ctx; 
        this.zombiePath = [50, 150, 250, 350, 445]; // Hay un bug en el q a veces se queda por la parte de abajo de la pantalla
        this.strength = 200;
        this.health = 600;
        this.damage = 20;

        this.x = 1250; // Posición inicial en x
        this.y = this.zombiePath[Math.floor(Math.random() * this.zombiePath.length)]; // Posición aleatoria en el camino
        this.h = 140; // Altura del zombie
        this.w = 140;

        this.vx = -0.1; 

        this.tick = 0;

        this.iscolliding = false; 

        this.img = new Image(); 
        this.img.src = "/assets/images/walking zombie no fondo.png";
        this.img.frames = 7; 
        this.img.frameIndex = 0;

        this.eat = new Image(); 
        this.eat.src = "/assets/images/zombie eating.png"
    }
    drawWalking(){
        const frameWidth = this.img.width / this.img.frames;
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * frameWidth,
            0,
            frameWidth,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.tick++;

        // Cambiar de frame para animación cada 10 ticks
        if (this.tick > 20) {
            this.tick = 0;
            this.img.frameIndex = (this.img.frameIndex + 1) % this.img.frames;
        }
    }

    drawEating(){
        this.h = 123; 
        this.w = 123; 
        const frameWidth = this.eat.width / this.img.frames;
        this.ctx.drawImage(
            this.eat,
            this.img.frameIndex * frameWidth,
            0,
            frameWidth,
            this.eat.height,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.tick++;

        // Cambiar de frame para animación cada 10 ticks
        if (this.tick > 20) {
            this.tick = 0;
            this.img.frameIndex = (this.img.frameIndex + 1) % this.img.frames;
        }
    }
    reset (){
        this.vx = -0.1;
        this.w = 140;
        this.h = 140;
    };
    move() {
        this.x += this.vx;
    }

    receiveDamage() {
        this.health -= this.damage; 
        if (this.health <= 0){
            this.die; 
        }
    }

    die(){

        // añadir frames de muerte
    }

    handleCollision (){
        this.iscolliding = true; 
        this.vx = 0; 
        this.img.source = "/assets/images/zombie eating.png"
        //Cambiar la imagen a zombie comiendo 
    }
}