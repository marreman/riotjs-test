app.on('start', function () {
  'use strict';

  var item = null,
    Model = app.get('data.model');

  $.get('dummy-data.json', function (response) {
    JSON.parse(response).data.forEach(function (item) {
      item = new Model(item);
      app.trigger('item:added', item);
    });
  });

  setTimeout(function () {
    item = new Model({ name: 'Watch me I\'m new and about to change my name' });
    app.trigger('item:added', item);
  }, 3000);

  setTimeout(function () {
    item.name = 'I\'ve changed my name';
    item.trigger('changed');
  }, 5000);
});
