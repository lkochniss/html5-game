class BallBrickRule {
    constructor(ball, brick) {
        this.ball = ball;
        this.brick = brick;
    }

    run() {
        this.checkBallCollision();
    }

    checkBallCollision() {
        if (
            this.ball.getPositionX() > this.brick.getPositionX() &&
            this.ball.getPositionX() < this.brick.getPositionX() + this.brick.getWidth() &&
            this.ball.getPositionY() > this.brick.getPositionY() &&
            this.ball.getPositionY() < this.brick.getPositionY() + this.brick.getHeight() &&
            this.brick.isHit() === false
        ) {
            this.ball.revertDirectionY();
            this.ball.changeToRandomColor();
            this.ball.enhanceSpeed();

            this.brick.setHit(true);
        }
    }
}