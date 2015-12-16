;
var STATES = ['empty', 'wall', 'populated'];
var CellType = (function () {
    function CellType(posX, posY, state) {
        this.state = state || 'empty';
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
