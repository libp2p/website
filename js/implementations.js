var $ = require('jquery')
var initPage = require('./lib/init-page')

initPage()

$(function () {
  $('section table').each(showData)

  function showData (i, table) {
    var $table = $(table)
    // $table.width(categories.length * 95)
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

    if ($columns.css('display') === 'flex') {
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

    var $transports = $('#transports')
    var $other = $('#others')
    var $streamMuxers = $('#stream-muxers')
    var $cryptoChannels = $('#crypto-channels')
    var $connectionUpgrades = $('#connection-upgrades')
    var $peerRouting = $('#peer-routing')
    var $recordStores = $('#record-stores')
    var $natTraversal = $('#nat-traversal')
    var $discovery = $('#discovery')
    var $utils = $('#utils')

    var sectionMarginTop = parseInt($transports.css('margin-top'))
    var headerHeight = $header.outerHeight()

    if (scrollTop >= $articleImpl.outerHeight() - 26 && scrollTop <= $other.offset().top - headerHeight) {
      $cube.addClass('fixed')
    } else {
      $cube.removeClass('fixed')
    }

    // var minHeight = 0
    var maxHeight = 0
    var opacity = 0.0

    if (scrollTop >= 235 &&
            scrollTop <= $transports.offset().top - headerHeight - sectionMarginTop + 140) {
      maxHeight = $transports.offset().top - headerHeight - sectionMarginTop + 140
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.transports').css('opacity', opacity)
    } else {
      $cube.find('.transports').css('opacity', 0)
    }
    if (scrollTop >= $streamMuxers.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $streamMuxers.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $streamMuxers.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.stream-muxers').css('opacity', opacity)
    } else {
      $cube.find('.stream-muxers').css('opacity', 0)
    }
    if (scrollTop >= $cryptoChannels.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $cryptoChannels.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $cryptoChannels.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.crypto-channels').css('opacity', opacity)
    } else {
      $cube.find('.crypto-channels').css('opacity', 0)
    }
    if (scrollTop >= $connectionUpgrades.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $connectionUpgrades.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $connectionUpgrades.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.connection-upgrades').css('opacity', opacity)
    } else {
      $cube.find('.connection-upgrades').css('opacity', 0)
    }
    if (scrollTop >= $peerRouting.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $peerRouting.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $peerRouting.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.peer-routing').css('opacity', opacity)
    } else {
      $cube.find('.peer-routing').css('opacity', 0)
    }
    if (scrollTop >= $recordStores.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $recordStores.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $recordStores.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.record-stores').css('opacity', opacity)
    } else {
      $cube.find('.record-stores').css('opacity', 0)
    }
    if (scrollTop >= $natTraversal.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $natTraversal.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $natTraversal.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.nat-traversal').css('opacity', opacity)
    } else {
      $cube.find('.nat-traversal').css('opacity', 0)
    }
    if (scrollTop >= $discovery.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $discovery.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $discovery.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.discovery').css('opacity', opacity)
    } else {
      $cube.find('.discovery').css('opacity', 0)
    }
    if (scrollTop >= $utils.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $utils.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $utils.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
      $cube.find('.utils').css('opacity', opacity)
    } else {
      $cube.find('.utils').css('opacity', 0)
    }
    if (scrollTop >= $other.offset().top - headerHeight - sectionMarginTop - 60 &&
            scrollTop <= $other.offset().top - headerHeight - sectionMarginTop - 60 + 200) {
      maxHeight = $other.offset().top - headerHeight - sectionMarginTop - 60 + 200
      opacity = maxHeight !== scrollTop ? 1.0 / (70.0 / (maxHeight - scrollTop)) : 0
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
