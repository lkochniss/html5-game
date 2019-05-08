var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ballX = canvas.width / 2;
var ballY = canvas.height - 30;

var ball = new Ball(ballX, ballY, context);

var paddle = new Paddle(canvas, context);

var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    checkBallCollisionX();
    checkBallCollisionY();
    checkPaddleMovement();
    ball.move();
}

function checkBallCollisionX() {
    if(ball.getPositionX() + ball.getDirectionX() > canvas.width - ball.getRadius() || ball.getPositionX() + ball.getDirectionX() < ball.getRadius()) {
        ball.revertDirectionX();
        ball.setColor(this.getRandomHexColor());
    }
}

function checkBallCollisionY() {
    if (ball.getPositionY() + ball.getDirectionY() < ball.getRadius() || ball.getPositionY() + ball.getDirectionY() > canvas.height - ball.getRadius()) {
        ball.revertDirectionY();
        ball.setColor(this.getRandomHexColor());
    }
}

function checkPaddleMovement() {
    if (rightPressed && paddle.getPositionX() < canvas.width - paddle.getWidth()) {
        paddle.moveRight();
    }

    if (leftPressed && paddle.getPositionX() > 0) {
        paddle.moveLeft();
    }
}

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function keyDownHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd') {
        rightPressed = true;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a') {
        leftPressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd') {
        rightPressed = false;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a') {
        leftPressed = false;
    }
}

setInterval(draw, 10);