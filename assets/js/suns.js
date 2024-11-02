class Suns {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x + 7;          
        this.y = y;          
        this.img = new Image();
        this.img.src = "/assets/images/sol.png";
        this.speedY = 1;     
        this.maxRise = 50;   
        this.risen = 0;      
        this.disappeared = false; 
        this.sunsCount = 50; 
    }

    update() {
        if (this.risen < this.maxRise) {
            this.y -= this.speedY; 
            this.risen += this.speedY;
        } else {
            this.disappeared = true;
        }
    }

    draw() {
        if (!this.disappeared) {
            this.ctx.drawImage(this.img, this.x, this.y, 50, 50); // Dibuja el sol
        }
    }
}