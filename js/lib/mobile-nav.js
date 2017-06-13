var $ = require('jquery')

module.exports = function initMobileNav () {
  $('.bars', 'header').on('click', function (e) {
    e.preventDefault()
    $('.bars', 'header').hide()
    $('.close', 'header').show()
    $('nav', 'header').show()
  })

  $('.close', 'header').on('click', function (e) {
    e.preventDefault()
    $('.bars', 'header').show()
    $('.close', 'header').hide()
    $('nav', 'header').hide()
  })

  $(window).on('load resize', function () {
    if ($(window).outerWidth() > 767) {
      $('.bars', 'header').hide()
      $('.close', 'header').hide()
      $('nav', 'header').show()
    } else {
      $('.bars', 'header').show()
      $('.close', 'header').hide()
      $('nav', 'header').hide()
    }
  })
}
