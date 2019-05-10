class GameOverRule {
    constructor(ball) {
        this.ball = ball;
    }

    run() {
        this.ball.reset();
    }
}