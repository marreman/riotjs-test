app('data.model', function () {
  'use strict';

  function Model(data) {
    $.extend(this, data);
    $.observable(this);
  }

  return Model;
});
