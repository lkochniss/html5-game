var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height - 30;

var ball = new Ball(x, y, context);

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    checkCollisionX();
    checkCollisionY();
    ball.move();
}

function checkCollisionX() {
    if(ball.getPositionX() + ball.getDirectionX() > canvas.width - ball.getRadius() || ball.getPositionX() + ball.getDirectionX() < ball.getRadius()) {
        ball.revertDirectionX();
        ball.setColor(this.getRandomHexColor());
    }
}

function checkCollisionY() {
    if (ball.getPositionY() + ball.getDirectionY() < ball.getRadius() || ball.getPositionY() + ball.getDirectionY() > canvas.height - ball.getRadius()) {
        ball.revertDirectionY();
        ball.setColor(this.getRandomHexColor());
    }
}

function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(draw, 10);