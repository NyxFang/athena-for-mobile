{
    optimize:'uglify2',
    optimizeCss:'standard',
    fileExclusionRegExp:/^((r|build)\.js)|(\.svn)$/,

    siteRoot: './',
    paths: {
        // athena框架配置地址
        'text' : 'libs/require/requirePlugin/text.min',
        'css' : 'libs/require/requirePlugin/css.min',
        'css-builder' : 'libs/require/requirePlugin/css-builder',
        'normalize' : 'libs/require/requirePlugin/normalize',
        'jquery' : 'libs/jquery/jquery-2.1.3.min',
        'zepto' : 'libs/zepto/zepto',
        'bone' : 'libs/bone/bone',
        'csstween' : 'libs/csstween/csstween',
        'athena' : 'libs/athena/Athena',
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
        'css3d' : 'libs/css3d/css3d'
        // app其他辅助类
    },
    modules:[{
        name : 'main',
        include : ['text', 'css', 'jquery', 'bone', 'csstween', 'athena', 'map', 'model', 'router'],
        exclude : ['normalize']
    }, {
        name : 'app/view/preloader',
        exclude : ['main', 'normalize']
    }, {
        name : 'app/view/header',
        exclude : ['main', 'normalize']
    }, {
        name : 'app/view/pages/homePage',
        exclude : ['main', 'normalize']
    }, {
        name : 'app/view/pages/workPage',
        exclude : ['main', 'normalize']
    }, {
        name : 'app/view/pages/threePage',
        exclude : ['main', 'normalize']
    }, {
        name : 'app/view/pops/tip1Pop',
        exclude : ['main', 'normalize']
    }]
}
