class Ball {
    constructor(positionX, positionY, context) {
        this.startingPositionX = positionX;
        this.startingPositionY = positionY;
        this.context = context;

        this.radius = 10;
        this.color = '#0095DD';
        this.startingDirectionX = 2;
        this.startingDirectionY = -2;
        
        this.reset();
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

    changeToRandomColor() {
        this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    reset() {
        this.positionX = this.startingPositionX;
        this.positionY = this.startingPositionY;
        this.directionX = this.startingDirectionX;
        this.directionY = this.startingDirectionY;
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

    enhanceSpeed() {
        this.directionX = this.directionX * 1.005;
        this.directionY = this.directionY * 1.005;
    }

    getPositionY() {
        return this.positionY;
    }
}