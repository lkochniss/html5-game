class Bricks {
    constructor(context) {
        this.context = context;

        this.brickColumnCount = 5;
        this.brickRowCount = 3;
        this.bricks = [];

        for (var i = 0; i < this.brickColumnCount; i++) {
            this.bricks[i] = [];

            for (var j = 0; j < this.brickRowCount; j++) {
                this.bricks[i][j] = new Brick(i, j, this.context);
            }
        }
    }

    draw() {
        for (var i = 0; i < this.brickColumnCount; i++) {
            for (var j = 0; j < this.brickRowCount; j++) {
                this.bricks[i][j].draw();
            }
        }
    }
}