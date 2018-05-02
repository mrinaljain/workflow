$ = require 'jquery'

do fill = (item = 'Good job') ->
  $('.tagline').append "#{item}"
fill