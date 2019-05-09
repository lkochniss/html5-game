class Game {
    constructor(document) {
        this.canvas = document.getElementById('myCanvas');
        this.context = this.canvas.getContext('2d');

        this.ball = new Ball(this.canvas.width / 2, this.canvas.height - 30, this.context);
        this.ballCanvasRule = new BallCanvasRule(this.ball, this.canvas);

        this.paddle = new Paddle(this.canvas, this.context);
        this.paddleKeyboardRule = new PaddleKeyboarRule(this.paddle, document);
        this.paddleCanvasRule = new PaddleCanvasRule(this.paddle, this.canvas, this.paddleKeyboardRule);
    }

    draw() {
        this.refresh();
        this.ball.draw();
        this.paddle.draw();
        this.ballCanvasRule.run();
        this.paddleCanvasRule.run();
        this.ball.move();
    }

    refresh() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}