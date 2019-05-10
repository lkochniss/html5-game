class BricksOnCanvas {
    constructor(context) {
        this.context = context;

        this.columnCount = 5;
        this.rowCount = 3;
        this.bricks = [];

        for (var i = 0; i < this.columnCount; i++) {
            this.bricks[i] = [];

            for (var j = 0; j < this.rowCount; j++) {
                this.bricks[i][j] = new Brick(i, j, this.context);   
            }
        }
    }

    draw() {
        for (var i = 0; i < this.columnCount; i++) {
            for (var j = 0; j < this.rowCount; j++) {
                this.bricks[i][j].draw();
            }
        }
    }

    getBricks() {
        return this.bricks;
    }

    getColumnCount() {
        return this.columnCount;
    }

    getRowCount() {
        return this.rowCount;
    }

    getBricks() {
        return this.bricks;
    }

    reset() {
        for (var i = 0; i < this.columnCount; i++) {
            for (var j = 0; j < this.rowCount; j++) {
                this.bricks[i][j].setHit(false);
            }
        }
    }
}