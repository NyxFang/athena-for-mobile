define(['text!./preloader.html', 'css!./preloader.css', 'map', 'model', 'router'], function(html, css, SiteMap, SiteModel, SiteRouter) {
    var view = Athena.view.BasePage.extend({
        id : 'preloader',
        className : 'pop',
        $bar : null,
        init : function() {
            this.template = html;
            this.render();
            view.__super__.init.apply(this);
            var _self = this;

            this.$bar = $(this.el).find('#loading-bar');

            CT.set(this.$el, {
                opacity : 0,
                visibility : 'hidden'
            });
        },
        resize : function() {
            view.__super__.resize.apply(this);
        },
        transitionIn : function() {
            var _self = this;
            view.__super__.transitionIn.apply(this);
            CT.set(this.$el, {
                visibility : 'visible'
            });
            CT.to(this.$el, 0.5, {
                opacity : 1,
                onEnd : function() {
                    _self.transitionInComplete();
                }
            });

            this.$bar.css({
                width : 0,
                left : '50%'
            });
        },
        transitionOut : function() {
            var _self = this;
            view.__super__.transitionOut.apply(this);
            CT.to(this.$el, 0.5, {
                opacity : 0,
                visibility : 'hidden',
                onEnd : function() {
                    _self.transitionOutComplete();
                }
            });
        },
        transitionOutComplete : function() {
            this.trigger(Athena.TRANSITION_OUT_COMPLETE, {
                data : this.data
            });
        },
        progress : function(obj) {
            var _n = obj.progress ? obj.progress : 0;
            CT.to(this.$bar, 0.3, {
                width : _n * 100 + '%',
                left : (1 - _n) * 0.5 * 100 + '%'
            });
        }
    });
    return view;
});
