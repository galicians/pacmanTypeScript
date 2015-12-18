var PhantomType = (function () {
    function PhantomType(inceptionPeriod) {
        if (inceptionPeriod === void 0) { inceptionPeriod = 3000; }
        this.speed = 1;
        this.harmful = false;
        this.type = 'phantom';
        setTimeout(function () {
            this.harmful = true;
        }, inceptionPeriod);
    }
    PhantomType.prototype.setPosition = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };
    return PhantomType;
})();
