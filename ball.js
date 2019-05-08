class Ball {
    constructor(positionX, positionY, context) {
        this.positionX = positionX
        this.positionY = positionY;
        this.context = context;

        this.radius = 10;
        this.color = '#0095DD';
        this.directionX = 2;
        this.directionY = -2;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI*2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    move() {
        this.positionX += this.directionX;
        this.positionY += this.directionY;
    }

    setColor(color) {
        this.color = color;
    }
    
    getRadius() {
        return this.radius;
    }

    getDirectionX() {
        return this.directionX;
    }

    setDirectionX(directionX) {
        this.directionX = directionX;
    }

    revertDirectionX() {
        this.directionX = -this.directionX;
    }

    getPositionX() {
        return this.positionX;
    }

    getDirectionY() {
        return this.directionY;
    }

    setDirectionY() {
        this.directionY = directionY;
    }

    revertDirectionY() {
        this.directionY = - this.directionY;
    }

    getPositionY() {
        return this.positionY;
    }
}