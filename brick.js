class Brick {
    constructor(positionX, positionY, context) {
        this.width = 75;
        this.height = 20;
        this.padding = 10;
        this.offsetTop = 30;
        this.offsetLeft = 30;
        this.hit = false;
        this.color = '#0095DD';

        this.positionX = (positionX * (this.width + this.padding)) + this.offsetLeft;
        this.positionY = (positionY * (this.height + this.padding)) + this.offsetTop;
        this.context = context;
    }

    draw() {
        if (this.hit === true) {
            return;
        }

        this.context.beginPath();
        this.context.rect(this.positionX, this.positionY, this.width, this.height);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    isHit() {
        return this.hit;
    }

    setHit(hit) {
        this.hit = hit;
    }
}