var $ = require('jquery')

module.exports = function fadeInArcticle () {
  initFadeInArcticle()
  $(window).on('load resize scroll', function () {
    initFadeInArcticle()
  })
}

function initFadeInArcticle () {
  if ($('article.features').length > 0 && $(window).scrollTop() >= $('article.features').offset().top - $(window).innerHeight() + 300) {
    $('article.features').addClass('show')
  }
  if ($('article.example').length > 0 && $(window).scrollTop() >= $('article.example').offset().top - $(window).innerHeight() + 300) {
    $('article.example').addClass('show')
  }
  if ($('article.implementations-in').length > 0 && $(window).scrollTop() >= $('article.implementations-in').offset().top - $(window).innerHeight() + 300) {
    $('article.implementations-in').addClass('show')
  }
  if ($('article.publications-talks').length > 0 && $(window).scrollTop() >= $('article.publications-talks').offset().top - $(window).innerHeight() + 300) {
    $('article.publications-talks').addClass('show')
  }
  if ($('article.community').length > 0 && $(window).scrollTop() >= $('article.community').offset().top - $(window).innerHeight() + 300) {
    $('article.community').addClass('show')
  }
}
