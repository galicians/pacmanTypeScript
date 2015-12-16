var PacmanType = (function () {
    function PacmanType(nameArg) {
        this.name = nameArg;
        this.score = 0;
        this.lives = 3;
        this.type = 'pacman';
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
        if (direction == 'right') {
            newX = this.posX;
            newY = this.posY - 1;
        }
        if (direction == 'left') {
            newX = this.posX;
            newY = this.posY + 1;
        }
        return [newX, newY];
    };
    PacmanType.prototype.checkCellState = function (cell) {
        return cell.state;
    };
    return PacmanType;
})();
