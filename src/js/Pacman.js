var PacmanType = (function () {
    function PacmanType(nameArg, pointsArg) {
        this.name = nameArg;
        this.points = pointsArg;
    }
    PacmanType.prototype.isAlive = function () {
        return this.points > 0;
    };
    return PacmanType;
})();
