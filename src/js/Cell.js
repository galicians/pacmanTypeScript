;
var STATES = ['empty', 'wall', 'populated'];
var CellType = (function () {
    function CellType(posX, posY, state) {
        if (state === void 0) { state = "empty"; }
        this.state = state;
        this.posX = posX;
        this.posY = posY;
        this.content = undefined;
        this.state = 'empty';
    }
    ;
    CellType.prototype.populate = function (entity) {
        this.content = entity;
        this.state = 'populated';
    };
    ;
    CellType.prototype.getContent = function () {
        return (this.state === 'populated') ? this.content.type : this.state;
    };
    return CellType;
})();
