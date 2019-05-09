class PaddleKeyboarRule {
    constructor (paddle, document) {
        this.paddle = paddle;
        this.document = document;

        this.rightPressed = false;
        this.leftPressed = false;

        this.document.addEventListener('keydown', this.keyDownHandler, false);
        this.document.addEventListener('keyup', this.keyUpHandler, false);
    }

    keyDownHandler(event) {
        if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
            this.rightPressed = true;
        } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
            this.leftPressed = true;
        }
    }
    
    keyUpHandler(event) {
        if (event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
            this.rightPressed = false;
        } else if (event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
            this.leftPressed = false;
        }
    }

    isRightPressed() {
        return this.rightPressed;
    }

    isLeftPressed() {
        return this.leftPressed;
    }    
}