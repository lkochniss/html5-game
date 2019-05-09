class PaddleCanvasRule {
    constructor(paddle, canvas, paddleKeyboardRule) {
        this.paddle = paddle;
        this.canvas = canvas;
        this.paddleKeyboardRule = paddleKeyboardRule;
    }

    run() {
        this.checkPaddleMovementRight();
        this.checkPaddleMovementLeft();
    }

    checkPaddleMovementRight() {
        if (this.paddleKeyboardRule.isRightPressed() && this.paddle.getPositionX() < this.canvas.width - this.paddle.getWidth()) {
            this.paddle.moveRight();
        }
    }

    checkPaddleMovementLeft() {
        if (this.paddleKeyboardRule.isLeftPressed() && this.paddle.getPositionX() > 0) {
            this.paddle.moveLeft();
        }
    }

}