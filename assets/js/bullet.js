class Bullet {
    constructor (ctx, x, y){
        this.ctx = ctx;
        this.x = x + 30; 
        this.y = y + 10; 
        
        this.speed = 5; 
        this.img = new Image(); 
        this.img.src = "/assets/images/pea.png";  

        this.w = 30; 
        this.h = 30; 
        this.isOffScreen = false;
    }
    draw (){
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    move (){
        this.x += this.speed;
    }

    handleImpact (){

    }

    isOffScreen (){
        return this.x > 1250; 
    }
}