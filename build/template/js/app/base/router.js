define(['map', 'bone'], function(SiteMap) {
    var router = Bone.Router.extend({
        routes : {
            '*actions' : 'defaultRoute'
        },
        defaultRoute: function(actions) {
            switch (actions) {
            case null:
                this.navigate(SiteMap.home.title, {
                    trigger : true
                });
                break;
            default:
                var _action = actions.split('?')[0];
                $.each(SiteMap, function(index, obj) {
                    if (_action == obj.title) {
                        if (Athena.getPage(SiteMap.header)) {
                            Athena.pageTo(obj);
                        } else {
                            Athena.pageTo([SiteMap.header, obj]);
                        }
                    }
                });
                break;
            }
        }
    });
    return new router;
});
