app('shared.data.view-model', function () {
  'use strict';

  function bind(o, fn) {
    return function () {
      fn.apply(o, Array.prototype.slice.call(arguments, 0));
    };
  }

  function ViewModel(tplName, model) {
    this.tpl = app.tpl(tplName);

    if (model) {
      this.setModel(model);
    }
  }

  ViewModel.prototype.render = function () {
    var el = $($.render(this.tpl, this.model));

    if (this.el) { this.el.replaceWith(el); }
    this.el = el;

    return this;
  };

  ViewModel.prototype.setModel = function (model) {
    this.model = model;
    this.model.on('changed', bind(this, this.render));
    this.model.on('removed', bind(this, function () {
      this.el.remove();
    }));

    return this;
  };

  return ViewModel;
});
