var $ = require('jquery')

module.exports = function scrollToHash () {
  var hash = window.location.hash
  if (hash.length) {
    var $scrollTo = $(hash)
    $('html, body').animate({scrollTop: $scrollTo.offset().top - 100}, 500, 'swing')
  }
}
