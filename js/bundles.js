var $ = require('jquery')
var initPage = require('./lib/init-page')

initPage()

$(function () {
  $('nav a', 'article').on('click', function (e) {
    e.preventDefault()
    var mobile = $(window).innerWidth() <= 767
    var $nav = $(this)
    var $parentNav = $nav.closest('nav')
    var $parent = $nav.closest('section')
    var showUl = $nav.data('info')

    $parentNav.children('a').each(function () {
      $(this).removeClass('active')
    })
    $nav.addClass('active')

    $('ul', $parent).each(function () {
      $(this).removeClass('show')
    })
    $('ul' + '.' + showUl, $parent).addClass('show')
    alignment()

    if (mobile) {
      $parentNav.css('display', 'none')
    }
    $parent.find('.active-link span').text($nav.text())
  })

  function alignment () {
    $('ul.calc-col.show').each(function () {
      var $ul = $(this)
      var ulWidth = $ul.outerWidth()
      var liCount = $ul[0].childElementCount
      var colCount = 0

      if (liCount > 0 && liCount <= 5) {
        colCount = 1
        $ul.addClass('one-col')
      } else if (liCount <= 10) {
        colCount = 2
        $ul.addClass('two-col')
      } else {
        colCount = 3
        $ul.addClass('three-col')
      }

      var maxWidth = 0
      $ul.children('li').each(function () {
        var $li = $(this)
        $li.css({'min-width': '0', 'width': 'auto'})

        if ($li.width() > maxWidth) maxWidth = $li.width()
      })
      $ul.children('li').css({'min-width': '100px', 'max-width': maxWidth + 15 + 'px', 'width': '100%'})

      if (colCount === 2) {
        var pad = (ulWidth - (((maxWidth + 15) * 2) + 60)) / 2
        $ul.css({'padding-left': pad + 'px', 'padding-right': pad + 'px'})
      }
    })
  }

  $(window).on('load resize', function () {
    alignment()
  })

  $('a.scroll').on('click', function (e) {
    e.preventDefault()
    var scrollToId = $(this).attr('href')
    var $scrollTo = $(scrollToId)
    $('html, body').animate({scrollTop: $scrollTo.offset().top - 100}, 500, 'swing')

    var mobile = $(window).innerWidth() <= 767
    if (mobile) {
      var $columns = $(this).closest('.columns')
      var $links = $columns.closest('.links')
      $columns.css('display', 'none')
      $links.find('.active-link .copy-block').html($(this).html())
    }
  })

  $('.active-link', 'aside.left').on('click', function (e) {
    e.preventDefault()
    var $link = $(this)
    var $parent = $link.closest('aside.left')
    var $nav = $parent.find('nav')

    if ($nav.css('display') === 'flex') {
      $nav.css('display', 'none')
    } else {
      $nav.css('display', 'flex')
    }
  })

  $('.active-link', '.links').on('click', function (e) {
    e.preventDefault()
    var $link = $(this)
    var $parent = $link.closest('.links')
    var $columns = $parent.find('.columns')

    if ($columns.css('display') === 'flex') {
      $columns.css('display', 'none')
    } else {
      $columns.css('display', 'flex')
    }
  })

  $(window).on('click', function (e) {
    var $elem = e.target
    var mobile = $(window).innerWidth() <= 767
    if (mobile) {
      if (!$($elem.closest('aside.left')).length) {
        $('aside.left nav:visible').css('display', 'none')
      }
      if (!$($elem.closest('.links')).length) {
        $('.columns', '.links').css('display', 'none')
      }
    }
  })
})
