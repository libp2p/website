var $ = require('jquery')
var data = require('./data/bundles_data')
require('./common')

$(function () {
  var bundles = data.Bundles
  createNav()
  createContent()
  createComingSoon()

  function createComingSoon () {
    var template = $(
                '<div class="card">' +
                    '<a href="#" class="rectangle coming-soon">' +
                        '<div class="img">' +
                            '<img>' +
                        '</div>' +
                        '<div class="text">In progress...</div>' +
                    '</a>' +
                '</div>'
            )

    var section = $('<section class="coming-soon"></section>')
    var index = 0
    $.each(bundles, function (key, values) {
      if (values['status'] !== 'live' && index < 6) {
        var tmp = template.clone()
        tmp.find('img').attr('src', values['image'])
        section.append(tmp)

        index++
      }
    })

    var tempRectangle = $(
            '<div class="card empty">' +
                '<div class="rectangle empty">' +
                    '<img>' +
                '</div>' +
            '</div>'
        )
    var imgCube = ['../img/img4.png', '../img/img5.png']
    for (var n = index; n < 6; n++) {
      var tmp = tempRectangle.clone()
      tmp.find('img').attr('src', imgCube[n % 2])
      section.append(tmp)
    }
    $('.wrap', 'article.bundles-info').append(section)
  }

  function createContent () {
    var template = $('<section>' +
            '<aside class="left">' +
            '<div class="active-link"><span></span><i class="fa fa-angle-down" aria-hidden="true"></i></div>' +
            '<nav></nav>' +
            '</aside>' +
            '<div class="content">' +
            '<div class="title">' +
            '<div class="wrapper">' +
            '<div class="img">' +
            '<img>' +
            '</div>' +
            '<a class="btn-interface" target="_blank">GitHub</a>' +
            '</div>' +
            '</div>' +
            '<div class="info"></div>' +
            '</div>' +
            '</section>'
        )

    $.each(bundles, function (key, values) {
      if (values['status'] === 'live') {
        var tmp = template.clone()
        var id = key.replace(' ', '-').toLowerCase()
        tmp.attr('id', id)
        tmp.find('img', '.title').attr('src', values['image']).attr('alt', key).attr('title', key)
        tmp.find('.btn-interface', '.title').attr('href', values['github'])

        var nav = tmp.find('nav')
        var index = 0
        $.each(values['categories'], function (key, values) {
          nav.append($('<a href="#" ' + (index === 0 ? 'class="active"' : '') +
                        ' data-info="' + key.replace(' ', '-').toLowerCase() + '">' + key + '</a>'))
          if (index === 0) tmp.find('.active-link span').text(key)

          var ul = document.createElement('ul')
          ul.classList.add(key.replace(' ', '-').toLowerCase())
          ul.classList.add('calc-col')
          if (index === 0) ul.classList.add('show')

          // var info = tmp.find('.info')
          var modules = values['modules']
          $.each(modules, function (item, items) {
            var li = document.createElement('li')
            var a = document.createElement('a')
            if (items['url']) { a.setAttribute('href', items['url']) }
            var i = document.createElement('i')
            i.classList.add('icon-hexagon')
            i.classList.add(color(items['status']))
            a.appendChild(i)
            var span = document.createElement('span')
            span.textContent = item
            a.appendChild(span)
            li.appendChild(a)
            ul.appendChild(li)
          })

          tmp.find('.info').append(ul)

          index++
        })

        $('.wrap', 'article.bundles-info').append(tmp)
      }
    })
  }

  function createNav () {
    var index = 0
    $.each(bundles, function (key, values) {
      var colNum = Math.floor(index / 2) + 1
      var $col = $('.col' + colNum, '.links')
      var id = key.replace(' ', '-').toLowerCase()

      var a = document.createElement('a')
      a.setAttribute('href', '#' + id)
      a.classList.add('link')
      a.classList.add(values['status'] === 'live' ? 'scroll' : 'inactive')

      var div = document.createElement('div')
      div.classList.add('img')
      var img = document.createElement('img')
      img.classList.add(id)
      img.setAttribute('src', values['nav-img'] || values['image'])
      img.setAttribute('alt', key)
      img.setAttribute('title', key)
      div.appendChild(img)
      a.appendChild(div)

      var span = document.createElement('span')
      span.textContent = key
      a.appendChild(span)

      $col.append(a)

      if (index === 0) {
        $('.copy-block', '.links').append($(div).clone()).append($(span).clone())
      }

      index++
    })
  }

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

  function color (status) {
    switch (status.toLowerCase()) {
      case 'done':
        return 'green'
      case 'usable':
        return 'yellow'
      case 'unstable':
        return 'red'
      default:
        return 'grey'
    }
  }

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
