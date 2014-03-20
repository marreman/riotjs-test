window.app = (function () {
  'use strict';

  var registry = {};

  function app(first, second) {
    if ($.type(first) === 'function') {
      first(app);
    } else if ($.type(first) === 'string' && $.type(second) === 'function') {
      registry[first] = second(app);
    }
  }

  app.el = $('#app');

  app.tpl = function (name) {
    // defined in shared/compiled-module-templates.js, generated by grunt job
    return window.compiledModuleTemplates[name];
  };

  app.get = function (name) {
    return registry[name];
  };

  return $.observable(app);

}());