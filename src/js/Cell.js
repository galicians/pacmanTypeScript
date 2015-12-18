;
var CellType = (function () {
    function CellType(posX, posY, state) {
        if (state === void 0) { state = "empty"; }
        this.state = state;
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
