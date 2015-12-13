;
var CellType = (function () {
    function CellType(posX, posY, state) {
        this.state = state || 'empty';
        this.posX = posX;
        this.posY = posY;
        this.content = undefined;
    }
    ;
    CellType.prototype.populate = function (entity) {
        this.content = entity;
    };
    ;
    return CellType;
})();
