window.app(function (app) {
    'use strict';

    var item = null;

    app.on('start', function () {
        $.get('dummy-data.json', function (response) {
            JSON.parse(response).data.forEach(function (item) {
                app.trigger('item:added', $.observable(item));
            });
        });

        setTimeout(function () {
            item = $.observable({ name: 'Watch me I\'m new and about to change my name' });
            app.trigger('item:added', item);
        }, 3000);

        setTimeout(function () {
            item.name = 'I\'ve changed my name';
            item.trigger('changed');
        }, 5000);
    });
});