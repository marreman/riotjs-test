app(function (app) {
  'use strict';

  var defaultData = $.observable({
        heading: 'Choose',
        content: 'The menu is on the left, take a pick'
      }),
      api = app.get('shared.data.api'),
      ViewModel = app.get('shared.data.view-model'),
      view = new ViewModel('main-view/main-view.tpl').render();

  $.route(function(path) {
    var id = path.slice(2);
    api.getArticle(id).done(function (article) {
      view.setModel(article).render();
    }).fail(function () {
      view.setModel(defaultData).render();
    });
  });

  app.el.find('.module-main-view').html(view.el);

});
