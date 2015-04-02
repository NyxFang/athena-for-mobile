define(['text!./tip1.html', 'css!./tip1.css', 'map', 'model', 'router', './basePop', 'csstween'], function(html, css, SiteMap, SiteModel, SiteRouter, BasePop) {
    var view = BasePop.extend({
        id : "tip1-pop",
        init : function() {
            this.template = html;
            this.render();
            view.__super__.init.apply(this);
            var _self = this;

            CT.set(this.$el, {
                opacity : 0,
                display : 'none'
            });
        },
        resize : function() {
            view.__super__.resize.apply(this);
        },
        transitionIn : function() {
            var _self = this;
            view.__super__.transitionIn.apply(this);
            CT.set(this.$el, {
                display : 'block'
            });
            CT.to(this.$el, 0.3, {
                opacity : 1,
                onEnd : function() {
                    _self.transitionInComplete();
                }
            });
        },
        transitionOut : function() {
            var _self = this;
            view.__super__.transitionOut.apply(this);
            CT.to(this.$el, 0.3, {
                opacity : 0,
                display : 'none',
                onEnd : function() {
                    _self.transitionOutComplete();
                }
            });
        },
        closeHandler : function() {
            view.__super__.closeHandler.apply(this);
        }
    });
    return view;
});
