Template.layout.helpers({
    notFullscreen: function () {
        var curr = Router.current().lookupTemplate();
        if (curr == 'Webminionmedia' || curr == 'StreamingSourceStream') return false;
        else return true;
    },

    isActive: function (section) {
        var current = Router.current().lookupTemplate();
        if (current.toLowerCase().startsWith(section)) return 'active';
    },

    serverTitle: function () {
        var s = settings.findOne({key: 'servertitle'});
        if (s) return s['value'];
        else return 'Cedar';
    }
});
