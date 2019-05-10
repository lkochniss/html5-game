class GameOverRule {
    constructor(ball, bricksOnCanvas) {
        this.ball = ball;
        this.bricksOnCanvas = bricksOnCanvas;
    }

    run() {
        this.ball.reset();
        this.bricksOnCanvas.reset();
    }
}