var $ = require('jquery')

module.exports = function initLogoAnimation () {
  $(window).scroll(function (e) {
    var $logo = $('header .logo')

    if ($(window).outerWidth() > 767 && !$logo.hasClass('static')) {
      if ($(window).scrollTop() > 300) {
        $logo.addClass('show')
      } else {
        $logo.removeClass('show')
      }
    }
  })
}
