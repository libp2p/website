var $ = require('jquery')

module.exports = function topbar () {
  initMobileNav()
  initLogoAnimation()
}

function initLogoAnimation () {
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

function initMobileNav () {
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
