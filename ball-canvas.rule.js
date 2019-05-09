class BallCanvasRule {
    constructor(ball, canvas) {
        this.ball = ball;
        this.canvas = canvas;
    }

    run() {
        this.checkBallCollisionX();
        this.checkBallCollisionY();
    }

    checkBallCollisionX() {
        if(
            this.ball.getPositionX() + this.ball.getDirectionX() > this.canvas.width - this.ball.getRadius() || 
            this.ball.getPositionX() + this.ball.getDirectionX() < this.ball.getRadius()) 
        {
            this.ball.revertDirectionX();
            this.ball.setColor(this.getRandomHexColor());
        }
    }

    checkBallCollisionY() {
        if (
            this.ball.getPositionY() + this.ball.getDirectionY() < this.ball.getRadius() || 
            this.ball.getPositionY() + this.ball.getDirectionY() > this.canvas.height - this.ball.getRadius()) 
        {
            this.ball.revertDirectionY();
            this.ball.setColor(this.getRandomHexColor());
        }
    }

    getRandomHexColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}