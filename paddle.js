class Paddle {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.height = 10
        this.width = 75;
        this.color = '#009FDD';
        this.speed = 7;
        
        this.positionX = (this.canvas.width - this.width) / 2;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.positionX, this.canvas.height - this.height, this.width, this.height);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    moveLeft() {
        this.positionX -= this.speed;
    }

    moveRight() {
        this.positionX += this.speed;
    }

    getPositionX() {
        return this.positionX;
    }

    getWidth() {
        return this.width;
    }
}