app(function (app) {
  'use strict';

  var container = $(app.tpl('exercises/exercise-list.tpl')),
      ex;

  function Exercise(model) {
    var _this = this;

    function render() {
      return $($.render(app.tpl('exercises/exercise.tpl'), model));
    }

    _this.el = render();

    model.on('changed', function () {
      _this.el.replaceWith(render());
    });

    model.on('removed', function () {
      _this.el.remove();
    });
  }

  app.on('item:added', function (item) {
    ex = new Exercise(item);
    ex.el.appendTo(container).wrap('<li/>');
  });

  app.el.append(container);
});
