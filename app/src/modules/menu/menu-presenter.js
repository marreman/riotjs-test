app(function (app) {
  'use strict';

  var container = $(app.tpl('menu/menu.tpl')),
      ViewModel = app.get('shared.data.view-model'),
      menuItem;

  app.on('exerciseExcerpt:added', function (model) {
    menuItem = new ViewModel('menu/menu-item.tpl', model);
    menuItem.render();
    menuItem.el.appendTo(container).wrap('<li/>');
  });

  app.el.find('.module-menu').append(container);
});
