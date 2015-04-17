require.config({
    waitSeconds : 0,
    baseUrl : './js/',
    paths : {
        // athena框架配置地址
        'text' : 'libs/require/requirePlugin/text.min',
        'css' : 'libs/require/requirePlugin/css.min',
        'css-builder' : 'libs/require/requirePlugin/css-builder',
        'normalize' : 'libs/require/requirePlugin/normalize',
        'jquery' : 'libs/jquery/jquery-2.1.3.min',
        'zepto' : 'libs/zepto/zepto.min',
        'bone' : 'libs/bone/bone.min',
        'csstween' : 'libs/csstween/csstween.min',
        'athena' : 'libs/athena/Athena.min',
        // app基本类地址
        'map' : 'app/base/map',
        'model' : 'app/base/model',
        'router' : 'app/base/router',
        'tracker' : 'app/base/tracker',
        // lib辅助类
        'scroller' : 'libs/athena/ui/Scroller',
        'jquery.cookie' : 'libs/jquery/jquery.cookie-min',
        'jquery.md5' : 'libs/jquery/jquery.md5-min',
        'jquery.validate' : 'libs/jquery/jquery.validate-min',
        'jquery.validate-additional-methods' : 'libs/jquery/validatePlugin/additional-methods',
        'jquery.qrcode' : 'libs/jquery/jquery.qrcode.min',
        'json2' : 'libs/json2.min',
        'css3d' : 'libs/css3d/css3d.min'
        // app其他辅助类
    },
    shim : {
        'jquery' : {
            exports : '$'
        },
        'jquery.cookie' : ['jquery'],
        'jquery.md5' : ['jquery'],
        'jquery.qrcode' : ['jquery'],
        'jquery.validate' : ['jquery'],
        'jquery.validate-additional-methods' : ['jquery.validate'],
        'zepto' : {
            exports : '$'
        },
        'bone' : {
            deps : ['jquery'],
            exports : 'Bone'
        },
        'csstween' : {
            exports : 'CT'
        },
        'athena' : {
            deps : ['jquery', 'bone', 'csstween'],
            exports : 'Athena'
        },
        'css3d' : {
            exports : 'Css3D'
        }

    }
});

require(['bone', 'athena', 'map', 'router', 'model'], function(Bone, Athena, SiteMap, SiteRouter, SiteModel) {
    $(function() {
        Athena.init();
        Athena.fullScreen(true);
        Athena.windowRectMin({
            width : 1000,
            height : 600
        });
        Athena.flow(Athena.NORMAL);
        Athena.preloadFast(true);
        //没有默认loading时使用这个
        //if (SiteMap.preloader) {
        //    Athena.once(Athena.PRELOAD_PREPARE, init);
        //    Athena.preloader(SiteMap.preloader);
        //} else {
        //    init();
        //}

        Athena.once(Athena.PRELOAD_PREPARE, init);
        Athena.preloader({
            data : SiteMap.preloader0,
            el : $("#preloader0")
        });
    });

    function init() {
        mouseEventOff();

        SiteModel.init();

        Bone.history.start({});
    }

    function mouseEventOff() {
        $('body').on('mousedown', function(event) {
            var _tag = ['TEXTAREA', 'INPUT', 'P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'SELECT'];
            var _len = _tag.length;
            for (var i = 0; i < _len; i++) {
                if (event.target.tagName == _tag[i])
                    return true;
            }
            return false;
        });
    }

});
