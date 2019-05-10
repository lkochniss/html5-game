class BallCanvasRule {
    constructor(ball, canvas, gameOverRule) {
        this.ball = ball;
        this.canvas = canvas;
        this.gameOverRule = gameOverRule;
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
            this.ball.changeToRandomColor();
            this.ball.enhanceSpeed();
        }
    }

    checkBallCollisionY() {
        if (this.ball.getPositionY() + this.ball.getDirectionY() < this.ball.getRadius()) {
            this.ball.revertDirectionY();
            this.ball.changeToRandomColor();
            this.ball.enhanceSpeed();

            return;
        }

        if (this.ball.getPositionY() + this.ball.getDirectionY() > this.canvas.height - this.ball.getRadius()) {
            this.gameOverRule.run();
        }
    }
}