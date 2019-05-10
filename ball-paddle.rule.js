class BallPaddleRule {
    constructor(ball, paddle, canvas) {
        this.ball = ball;
        this.paddle = paddle;
        this.canvas = canvas;
    }

    run() {
        this.checkBallCollision();
    }

    checkBallCollision() {
        if (this.ball.getPositionY() + this.ball.getDirectionY() > this.canvas.height - this.ball.getRadius() - this.paddle.getHeight()) {
            if (
                this.ball.getPositionX() > this.paddle.getPositionX() && 
                this.ball.getPositionX() < this.paddle.getPositionX() + this.paddle.getWidth()
            ) {
                this.ball.revertDirectionY();
                this.ball.enhanceSpeed();
            }
        }
    }
}