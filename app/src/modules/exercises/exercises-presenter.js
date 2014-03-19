window.app(function (core) {
    'use strict';

    var container = $(core.tpl('exercises/exercise-list.tpl')),
        ex;

    function Exercise(model) {
        var _this = this;

        function render() {
            return $($.render(core.tpl('exercises/exercise.tpl'), model));
        }

        _this.el = render();

        model.on('changed', function () {
            _this.el.replaceWith(render());
        });

        model.on('removed', function () {
            _this.el.remove();
        });
    }

    core.on('item:added', function (item) {
        ex = new Exercise(item);
        ex.el.appendTo(container).wrap('<li/>');
    });

    core.el.append(container);
});