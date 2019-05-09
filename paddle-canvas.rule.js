class PaddleCanvasRule {
    constructor(paddle, canvas, paddleKeyboardRule) {
        this.paddle = paddle;
        this.canvas = canvas;
        this.paddleKeyboardRule = paddleKeyboardRule;
    }

    run() {
        this.checkPaddleMovement();
    }

    checkPaddleMovement() {
        if (this.paddleKeyboardRule.isRightPressed() && this.paddle.getPositionX() < this.canvas.width - this.paddle.getWidth()) {
            this.paddle.moveRight();
        }
        if (this.paddleKeyboardRule.isLeftPressed() && this.paddle.getPositionX() > 0) {
            this.paddle.moveLeft();
        }
    }

}