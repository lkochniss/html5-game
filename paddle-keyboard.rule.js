class PaddleKeyboarRule {
    constructor (paddle, document) {
        this.paddle = paddle;
        this.document = document;

        this.rightPressed = false;
        this.leftPressed = false;

        this.document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
        this.document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    }

    keyDownHandler(event) {
        if (this.isValidKeyRight(event)) {
            this.rightPressed = true;
        } else if (this.isValidKeyLeft(event)) {
            this.leftPressed = true;
        }
    }
    
    keyUpHandler(event) {
        if (this.isValidKeyRight(event)) {
            this.rightPressed = false;
        } else if (this.isValidKeyLeft(event)) {
            this.leftPressed = false;
        }
    }

    isValidKeyRight(event) {
        return event.key === 'Right' || event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D';
    }

    isValidKeyLeft(event) {
        return event.key === 'Left' || event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'
    }

    isRightPressed() {
        return this.rightPressed;
    }

    isLeftPressed() {
        return this.leftPressed;
    }    
}