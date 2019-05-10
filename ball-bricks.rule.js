class BallBricksRule {
    constructor(ball, bricksOnCanvas) {
        this.ball = ball;
        this.bricksOnCanvas = bricksOnCanvas;
        this.bricks = bricksOnCanvas.getBricks();

        this.ballBrickRules = [];
        for (var i = 0; i < this.bricksOnCanvas.getColumnCount(); i++){
            this.ballBrickRules[i] = [];
            for (var j = 0; j < this.bricksOnCanvas.getRowCount(); j++) {
                this.ballBrickRules[i][j] = new BallBrickRule(ball, this.bricks[i][j]);
            }
        }
    }

    run() {
        for (var i = 0; i < this.bricksOnCanvas.getColumnCount(); i++){
            for (var j = 0; j < this.bricksOnCanvas.getRowCount(); j++) {
                this.ballBrickRules[i][j].run();
            }
        }
    }
}