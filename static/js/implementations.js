$(function () {
  $.each(data, function (name, names) {
    showData(name)
  })

  function showData (tableName) {
    var $section = $('#' + tableName.toLowerCase())
    var $table = $section.find('table')

    $.each(data[tableName], function (item, items) {
      var tr = document.createElement('tr')
      var th = document.createElement('th')
      th.classList.add('head-col')
      th.textContent = item
      tr.appendChild(th)

      $.each(['Browser JS', 'Node.js', 'Go', 'Haskell', 'Java', 'Python', 'Rust'], function (n, col) {
        var td = document.createElement('td')
        var i = document.createElement('i')
        var status = 'grey'
        i.classList.add('icon-hexagon')
        if (items[col] && items[col].status) {
          switch (items[col].status.toLowerCase()) {
            case 'done':
              status = 'green'
              break
            case 'usable':
              status = 'yellow'
              break
            case 'unstable':
              status = 'red'
              break
            default:
              status = 'grey'
          }

          if (items[col].url && items[col].url.length) {
            var a = document.createElement('a')
            a.setAttribute('href', items[col].url)
            a.appendChild(i)
          }
        }
        i.classList.add(status)
        td.appendChild(a || i)
        tr.appendChild(td)
      })

      $table.append(tr)
    })
    $table.append($('<tr class="empty"><th class="head-col"></th><td></td><td></td><td></td><td></td><td></td><td></td><td></td>')[0])

    var $parent = $table.closest('.table')
    var tableHeight = $parent.find('.title').height() +
            $parent.find('.info').height() +
            ($(window).innerWidth() < 940 ? 0 : $parent.find('.description').height())
    $parent.height(tableHeight)
  }

  $('td').hover(function () {
    $(this).find('i').removeClass('icon-hexagon').addClass('icon-cat')
  }, function () {
    $(this).find('i').addClass('icon-hexagon').removeClass('icon-cat')
  })

  $('a.scroll').on('click', function (e) {
    e.preventDefault()
    var scrollToId = $(this).attr('href')
    var $scrollTo = $(scrollToId)
    $('html, body').animate({scrollTop: $scrollTo.offset().top - 100 - 270}, 1000, 'swing')

    var mobile = $(window).innerWidth() <= 940
    if (mobile) {
      var $columns = $(this).closest('.columns')
      var $links = $columns.closest('.links')
      $columns.css('display', 'none')
      $links.find('.active-link .copy-block').html($(this).html())
    }
  })

  $('.active-link', '.links').on('click', function (e) {
    e.preventDefault()
    var $link = $(this)
    var $parent = $link.closest('.links')
    var $columns = $parent.find('.columns')

    if ($columns.css('display') == 'flex') {
      $columns.css('display', 'none')
    } else {
      $columns.css('display', 'flex')
    }
  })

  $(window).on('load resize scroll', function () {
    fadeInCube()
  })

  function fadeInCube () {
    var $cube = $('main > .cube')
    var $articleImpl = $('article.implementations')
    var $header = $('body > header')
    var scrollTop = $(window).scrollTop()

    var $transports = $('#transports'),
      $other = $('#others'),
      $streamMuxers = $('#stream-muxers'),
      $cryptoChannels = $('#crypto-channels'),
      $connectionUpgrades = $('#connection-upgrades'),
      $peerRouting = $('#peer-routing'),
      $recordStores = $('#record-stores'),
      $natTraversal = $('#nat-traversal'),
      $discovery = $('#discovery'),
      $utils = $('#utils'),
      $generics = $('#generics')

    var sectionMarginTop = parseInt($transports.css('margin-top'))
    var headerHeight = $header.outerHeight()

    if (scrollTop >= $articleImpl.outerHeight() - 26 && scrollTop <= $other.offset().top - headerHeight) {
      $cube.addClass('fixed')
    } else {
      $cube.removeClass('fixed')
    }

    var minHeight = 0, maxHeight = 0, opacity = 0.0

    if (scrollTop >= $transports.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $transports.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $transports.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.transports').css('opacity', opacity)
    } else {
      $cube.find('.transports').css('opacity', 0)
    }
    if (scrollTop >= $streamMuxers.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $streamMuxers.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $streamMuxers.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.stream-muxers').css('opacity', opacity)
    } else {
      $cube.find('.stream-muxers').css('opacity', 0)
    }
    if (scrollTop >= $cryptoChannels.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $cryptoChannels.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $cryptoChannels.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.crypto-channels').css('opacity', opacity)
    } else {
      $cube.find('.crypto-channels').css('opacity', 0)
    }
    if (scrollTop >= $connectionUpgrades.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $connectionUpgrades.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $connectionUpgrades.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.connection-upgrades').css('opacity', opacity)
    } else {
      $cube.find('.connection-upgrades').css('opacity', 0)
    }
    if (scrollTop >= $peerRouting.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $peerRouting.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $peerRouting.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.peer-routing').css('opacity', opacity)
    } else {
      $cube.find('.peer-routing').css('opacity', 0)
    }
    if (scrollTop >= $recordStores.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $recordStores.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $recordStores.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.record-stores').css('opacity', opacity)
    } else {
      $cube.find('.record-stores').css('opacity', 0)
    }
    if (scrollTop >= $natTraversal.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $natTraversal.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $natTraversal.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.nat-traversal').css('opacity', opacity)
    } else {
      $cube.find('.nat-traversal').css('opacity', 0)
    }
    if (scrollTop >= $discovery.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $discovery.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $discovery.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.discovery').css('opacity', opacity)
    } else {
      $cube.find('.discovery').css('opacity', 0)
    }
    if (scrollTop >= $utils.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $utils.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $utils.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.utils').css('opacity', opacity)
    } else {
      $cube.find('.utils').css('opacity', 0)
    }
    if (scrollTop >= $generics.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $generics.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $generics.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.generics').css('opacity', opacity)
    } else {
      $cube.find('.generics').css('opacity', 0)
    }
    if (scrollTop >= $other.offset().top - headerHeight - sectionMarginTop &&
            scrollTop <= $other.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $other.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight != scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.others').css('opacity', opacity)
    } else {
      $cube.find('.others').css('opacity', 0)
    }
  }

  $(window).on('click', function (e) {
    var $elem = e.target
    var mobile = $(window).innerWidth() <= 767
    if (mobile) {
      if (!$($elem.closest('.links')).length) {
        $('.columns', '.links').css('display', 'none')
      }
    }
  })
})
