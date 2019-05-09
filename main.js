var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ball = new Ball(canvas.width / 2, canvas.height - 30, context);
var ballCanvasRule = new BallCanvasRule(ball, canvas);

var paddle = new Paddle(canvas, context);
var paddleKeyboardRule = new PaddleKeyboarRule(paddle, document);
var paddleCanvasRule = new PaddleCanvasRule(paddle, canvas, paddleKeyboardRule);

function draw() {
    refresh();
    ball.draw();
    paddle.draw();
    ballCanvasRule.run();
    paddleCanvasRule.run();
    ball.move();
}

function refresh() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(draw, 10);