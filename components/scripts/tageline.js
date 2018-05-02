var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Good job');

fill;
