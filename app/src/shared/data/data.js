app('shared.data.api', function () {
  'use strict';

  var Model = null;

  function getData(fn) {
    $.get('data.json', function (response) {
      fn(JSON.parse(response));
    });
  }

  app.on('start', function () {
    Model = app.get('shared.data.model');

    getData(function (data) {
      data.excerpts.forEach(function (item) {
        app.trigger('exerciseExcerpt:added', new Model(item));
      });
    });
  });

  return {
    getArticle: function (name) {
      var deferred = $.Deferred();
      getData(function (data) {
        var article = data.articles[name];
        if (article) {
          deferred.resolve(new Model(article));
        } else {
          deferred.reject();
        }

      });
      return deferred.promise();
    }
  };

});
