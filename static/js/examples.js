$(function () {
  $(window).on('load resize', function () {
    reposition()
  })

  function reposition () {
    var $hexagonWrapper = $('.hexagon-wrapper')
    var $parent = $hexagonWrapper.closest('.hexagons-wrapper')
    var windowWidth = $(window).innerWidth()
    var hexagonWidth = $hexagonWrapper.width()
    var countInRow = Math.floor(windowWidth / hexagonWidth)
    var $article = $('article.examples')
    var $hexagons = $article.find('.hexagons')

    if (!$hexagonWrapper.length) return

    $parent.remove()

    if (countInRow <= 1) countInRow = 2

    var index = 0
    for (var r = 0; index < $hexagonWrapper.length; r++) {
      $hexagons.append('<div class="hexagons-wrapper row' + (r + 1) + '"></div>')
      var $row = $('.hexagons-wrapper.row' + (r + 1))

      var countElem = r % 2 == 0 ? countInRow : countInRow - 1
      for (var n = index; n < index + countElem; n++) {
        if (n < $hexagonWrapper.length) {
          $row.append($hexagonWrapper[n])
        } else {
          if (countElem % 2 != (n - index) % 2) {
            $row.css('padding-right', hexagonWidth + 'px')
          }
          break
        }
      }
      index += countElem
    }
  }

  var $body = $('body')
  $body.on('mouseenter', 'svg a', function () {
    $(this).closest('.hexagon-wrapper').addClass('big')
  })
  $body.on('mouseleave', 'svg a', function () {
    $(this).closest('.hexagon-wrapper').removeClass('big')
  })
})
