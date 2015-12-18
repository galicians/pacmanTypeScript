var PacmanType = (function () {
    function PacmanType(nameArg) {
        this.name = nameArg;
        this.score = 0;
        this.lives = 3;
        this.type = 'pacman';
        this.invulnerable = false;
    }
    PacmanType.prototype.isAlive = function () {
        return this.lives > 0;
    };
    PacmanType.prototype.setPosition = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };
    PacmanType.prototype.updateScore = function (bonus) {
        this.score += bonus;
    };
    PacmanType.prototype.updateLives = function (lives) {
        this.lives += lives;
    };
    PacmanType.prototype.newPosition = function (direction) {
        var newX = this.posX;
        var newY = this.posY;
        if (direction == 'up') {
            newX = this.posX;
            newY = this.posY - 1;
        }
        if (direction == 'down') {
            newX = this.posX + 1;
            newY = this.posY;
        }
        if (direction == 'left') {
            newX = this.posX;
            newY = this.posY - 1;
        }
        if (direction == 'right') {
            newX = this.posX;
            newY = this.posY + 1;
        }
        return [newX, newY];
    };
    PacmanType.prototype.checkCellState = function (cell) {
        return cell.getContent();
    };
    PacmanType.prototype.move = function (direction, maze) {
        var position = this.newPosition(direction);
        var cell = maze.grid[position[0]][position[1]];
        if (this.checkCellState(cell) == 'phantom') {
            if (!this.invulnerable)
                this.lives -= 1;
            maze.place(cell.content, [this.posX, this.posY]);
        }
        if (this.checkCellState(cell) !== 'wall')
            cell.populate(this);
    };
    return PacmanType;
})();
