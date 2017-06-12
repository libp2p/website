var $ = require('jquery')

$(function () {
  var hash = window.location.hash
  if (hash.length) {
    var $scrollTo = $(hash)
    $('html, body').animate({scrollTop: $scrollTo.offset().top - 100}, 500, 'swing')
  }

  $(window).scroll(function (e) {
    var $logo = $('header .logo')

    if ($(window).outerWidth() > 767 && !$logo.hasClass('static')) {
      if ($(window).scrollTop() > 300) {
        $logo.addClass('show')
      } else {
        $logo.removeClass('show')
      }
    }

    fadeInArcticle()
  })

  $(window).on('load resize', function () {
    var width = $(window).innerWidth()
    var leftWidth = Math.round(width / 2)
    var rightWidth = leftWidth > (width / 2) ? leftWidth - 1 : leftWidth
    $('.triangle').css({'border-left-width': leftWidth + 'px', 'border-right-width': rightWidth + 'px'})

    if ($(window).outerWidth() > 767) {
      $('.bars', 'header').hide()
      $('.close', 'header').hide()
      $('nav', 'header').show()
    } else {
      $('.bars', 'header').show()
      $('.close', 'header').hide()
      $('nav', 'header').hide()
    }
    fadeInArcticle()
  })

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

  function fadeInArcticle () {
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

  $(window).on('resize', function () {
    var $stage = $('#Stage')
    if (!$stage.length) return

    $stage.closest('.flow-wrapper').remove()
    $('.homepage-animation').addClass('static')
    $('#static-stage').addClass('show')
  })
})
