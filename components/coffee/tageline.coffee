$ = require 'jquery'

do fill = (item = 'LAtest Changes now') ->
  $('.tagline').append "#{item}"
fill