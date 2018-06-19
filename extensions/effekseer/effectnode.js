cc.Effect = {
    create: function () { }
}

cc.EffectNode = cc.Class({
    extends: _ccsg.Node,
    statics: {
        create: function () { return new cc.EffectNode }
    },
    setIsLooping: function () { }
})
