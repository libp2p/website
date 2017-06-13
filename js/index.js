var $ = require('jquery')
var data = require('../data/bundles.json')
var initPage = require('./lib/init-page')
var initLogo = require('./lib/logo')

initPage()
initLogo()

$(function () {
  $('svg.contributors')[0].pauseAnimations()

  var bundles = data.Bundles
  var bundlesCount = 0
  createBundles()
  createCommingSoon()
  createEmpty()

  function createEmpty () {
    var template = $('<div class="card empty">' +
            '<div class="rectangle empty">' +
            '<img>' +
            '</div>' +
            '</div>')

    var $wrap = $('.wrap', 'article.implementations-in')
    for (var n = bundlesCount; n < 9; n++) {
      var tmp = template.clone()
      tmp.find('img').attr('src', (n % 2) === 1 ? './img/img4.png' : './img/img5.png')
      $wrap.append(tmp)
    }
  }

  function createCommingSoon () {
    var template = $('<div class="card">' +
            '<a class="rectangle coming-soon">' +
            '<img>' +
            '<div>Coming soon...</div>' +
            '</a>' +
            '</div>'
        )

    var $wrap = $('.wrap', 'article.implementations-in')
    var index = 0
    $.each(bundles, function (key, values) {
      var tmp = template.clone()
      if (values['status'] !== 'live' && bundlesCount < 9) {
        tmp.find('a').addClass('index' + (index + 1))
        switch (key.toLowerCase()) {
          case 'java':
            tmp.find('img').attr('src', './img/logo_5.png')
            break
          case 'python':
            tmp.find('img').attr('src', './img/logo_6.png')
            break
          default:
            var imageUrl = values['image'].substring(1)
            tmp.find('img').attr('src', imageUrl)
        }

        $wrap.append(tmp)
        index++

        bundlesCount++
      }
    })
  }

  function createBundles () {
    var template = $('<div class="card">' +
            '<a class="rectangle">' +
            '<div class="img-wrap">' +
            '<img>' +
            '</div>' +
            '</a>' +
            '</div>'
        )

    var $wrap = $('.wrap', 'article.implementations-in')

    $.each(bundles, function (key, values) {
      var tmp = template.clone()
      if (values['status'] === 'live' && bundlesCount < 9) {
        tmp.find('a').attr('href', '/bundles#' + key.replace(' ', '-').toLowerCase())
        switch (key.toLowerCase()) {
          case 'java':
            tmp.find('img').attr('src', './img/logo_5.png')
            break
          case 'python':
            tmp.find('img').attr('src', './img/logo_6.png')
            break
          default:
            var imageUrl = values['image'].substring(1)
            tmp.find('img').attr('src', imageUrl)
        }

        tmp.find('img').attr('alt', key)
        tmp.find('img').attr('title', key)
        $wrap.append(tmp)

        bundlesCount++
      }
    })
  }

  var $shapes = $('#shapes')
  var $shapesDefs = $shapes.find('defs')
  var $contributors = $('.contributors', '.persons')
  var $persons = $('.persons')
  // var personsWidth = $persons.width()
  var personsHeight = $persons.height()
  var iconWidth = 60
  var iconHeight = 70
  var rowsCount = Math.round(personsHeight / iconHeight)
  var countInRow = 0
  // var iconCount = 0

  var rowWidth = 0

  $(window).on('load', function () {
    setTimeout(function () {
      $('.svg-wrapper').removeClass('hide')
      $('svg.contributors')[0].unpauseAnimations()
    }, 5000)
    getContributors()
  })

  function getContributors () {
    $.get('https://contributors.cloud.ipfs.team/contributors?org=all', function (items) {
      // var iconCount = items.length
      countInRow = Math.ceil(items.length / rowsCount)
      rowWidth = countInRow * (iconWidth + 20)
      $('.contributors', '.persons').width(rowWidth)
      items.forEach(function (item, index) {
        var imgId = 'img' + index

        var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern')
        pattern.setAttributeNS(null, 'id', imgId)
        pattern.setAttributeNS(null, 'patternContentUnits', 'objectBoundingBox')
        pattern.setAttributeNS(null, 'height', '100%')
        pattern.setAttributeNS(null, 'width', '100%')

        var img = document.createElementNS('http://www.w3.org/2000/svg', 'image')
        img.setAttributeNS(null, 'width', '1')
        img.setAttributeNS(null, 'height', '1')
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', item.photo)
        img.setAttributeNS(null, 'preserveaspectratio', 'none')

        pattern.appendChild(img)

        $shapesDefs.append(pattern)

        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g')

        var indexRow = Math.floor(index / countInRow)
        var y = indexRow * (iconHeight - 10)
        var indexInRow = index - (countInRow * indexRow)
        var offsetX = indexRow % 2 * ((iconWidth + (indexInRow !== 0 ? 10 : 0)) / 2)
        var x = indexInRow * (iconWidth + (indexInRow !== 0 ? 10 : 0)) + offsetX

        var person = document.createElementNS('http://www.w3.org/2000/svg', 'use')
        person.setAttributeNS(null, 'id', 'icon' + index)
        person.setAttributeNS(null, 'width', iconWidth)
        person.setAttributeNS(null, 'height', iconHeight)
        person.setAttributeNS(null, 'x', x)
        person.setAttributeNS(null, 'y', y)
        person.setAttributeNS(null, 'fill', 'url(#' + imgId + ')')
        person.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#shape-icon')
        person.setAttribute('data-url', item.url)
        person.setAttribute('data-username', item.username)
        person.setAttribute('data-index', indexInRow)
        person.setAttribute('data-row', indexRow)
        person.setAttribute('data-position', (indexInRow === 0 ? 'first'
                    : (indexInRow === (countInRow - 1) || index === (items.length - 1)) ? 'last' : ''))

        g.appendChild(person)

        var animateX = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
        animateX.setAttributeNS(null, 'attributeName', 'x')
        animateX.setAttributeNS(null, 'from', '0')
        animateX.setAttributeNS(null, 'to', (iconWidth * (-1)))
        animateX.setAttributeNS(null, 'repeatCount', 'indefinite')
        animateX.setAttributeNS(null, 'fill', 'freeze')
        animateX.setAttributeNS(null, 'additive', 'sum')
        animateX.setAttributeNS(null, 'accumulate', 'sum')
        animateX.setAttributeNS(null, 'dur', '10s')
        animateX.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon' + index)

        g.appendChild(animateX)

/*
        var rnd1 = Math.floor(Math.random() * 15)
        var rnd2 = Math.floor(Math.random() * 15)

                var animateY = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animateY.setAttributeNS(null, 'attributeName', 'y');
                animateY.setAttributeNS(null, 'from', (y));
                animateY.setAttributeNS(null, 'to', (y + 10));
                animateY.setAttributeNS(null, 'repeatCount', 'indefinite');
                animateY.setAttributeNS(null, 'values', (y) + '; ' + (y + rnd1) + '; ' + (y + rnd2) + '; ' + y);
                animateY.setAttributeNS(null, 'keyTimes', '0; 0.3; 0.6; 1');
                animateY.setAttributeNS(null, 'fill', 'freeze');
                animateY.setAttributeNS(null, 'dur', '20s');
                animateY.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon' + index);

                g.appendChild(animateY);
*/

        $contributors.find('#group-icons').append(g)

        $('#icon' + index)
                    .mouseenter(mouseEnter)
                    .mouseleave(mouseLeave)
                    .on('click', mouseClick)
      })
    })
  }

  function mouseClick () {
    var url = $(this).attr('data-url')
    if (url.length) {
      window.open(url)
    }
  }

  function mouseLeave () {
    var el = $(this)
    el.closest('#group-icons').find('.tooltip').remove()
        // el.closest('#group-icons').find('.hex-hover').remove();

    el.attr('width', (iconWidth))
    el.attr('height', (iconHeight))

    el.closest('svg')[0].unpauseAnimations()
  }

  function mouseEnter () {
    var el = $(this)
    var elX = el[0].x.animVal.value
    var elY = el[0].y.animVal.value
    el.closest('svg')[0].pauseAnimations()

    var $parent = el.closest('#group-icons')

        // $parent[0].appendChild(hexHover(elX - 3, elY - 3, iconWidth + 6, iconHeight + 6));

        // el.attr('width', (iconWidth + 5));
        // el.attr('height', (iconHeight + 5));

    $parent[0].appendChild(tooltip(el.attr('data-username')))

    var $tooltip = $parent.find('.tooltip')
    $tooltip.attr('transform', 'translate(' + (elX + 65) + ',' + (elY + 20) + ')')
  }

    // reposition first icon to last
  setInterval(function () {
    for (var n = 0; n < rowsCount; n++) {
      var $firstIcon = $('use[data-row=' + n + ']' + '[data-position=first]')
      var firstIconX = (typeof $firstIcon[0] === 'undefined') ? 0 : $firstIcon[0].x.animVal.value
      if (!$firstIcon.length || firstIconX > (iconWidth * (-1))) continue

      var firstIconIndex = parseInt($firstIcon.attr('data-index'))
      var nextIndex = firstIconIndex < countInRow ? firstIconIndex + 1 : 0
      var $nextIcon = $('use[data-row=' + n + ']' + '[data-index=' + nextIndex + ']')

      // var $firstIconAnim = $firstIcon.closest('g').find('animate[attributeName="x"]')

      var $lastIcon = $('use[data-row=' + n + ']' + '[data-position=last]')
      var lastIconX = $lastIcon[0].x.animVal.value

      $firstIcon[0].setAttribute('data-position', 'last')
      $nextIcon[0].setAttribute('data-position', 'first')
      $lastIcon[0].setAttribute('data-position', '')

      var $firstIconparent = $firstIcon.closest('g')
      var clone = $firstIconparent.get(0)
      $firstIconparent.remove()

      $(clone).find('use').attr('x', (lastIconX + iconWidth + 10))
      var id = $(clone).find('use').attr('id')
      $('#group-icons').append(clone)
      var $el = $('#' + id)
      $el.closest('g').find('[attributeName=x]')[0].beginElement()
      $el
                .mouseenter(mouseEnter)
                .mouseleave(mouseLeave)
                .on('click', mouseClick)
    }
  }, 1000)

  function tooltip (username) {
    var gTitle = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    gTitle.setAttributeNS(null, 'class', 'tooltip')

        // var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        // use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#shape-tooltip');
        // use.setAttribute('width', '170');
        // use.setAttribute('height', '39');
        // gTitle.appendChild(use);

    var filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter')
    filter.setAttribute('id', 'tooltip-shadow')
    filter.setAttribute('width', '150%')
    filter.setAttribute('height', '150%')

    var feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset')
    feOffset.setAttribute('result', 'offOut')
    feOffset.setAttribute('in', 'SourceGraphic')
    feOffset.setAttribute('dx', '3')
    feOffset.setAttribute('dy', '3')
    filter.appendChild(feOffset)

    var feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix')
    feColorMatrix.setAttribute('result', 'matrixOut')
    feColorMatrix.setAttribute('in', 'offOut')
    feColorMatrix.setAttribute('type', 'matrix')
    feColorMatrix.setAttribute('values', '0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0')
    filter.appendChild(feColorMatrix)

    var feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur')
    feGaussianBlur.setAttribute('result', 'blurOut')
    feGaussianBlur.setAttribute('in', 'matrixOut')
    feGaussianBlur.setAttribute('stdDeviation', '3')
    filter.appendChild(feGaussianBlur)

    var feBlend = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend')
    feBlend.setAttribute('in', 'SourceGraphic')
    feBlend.setAttribute('in2', 'blurOut')
    feBlend.setAttribute('mode', 'normal')
    filter.appendChild(feBlend)

    gTitle.appendChild(filter)

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('style', 'fill:#fff; stroke:#b3b3b3; stroke-miterlimit: 10; opacity: 1')
    path.setAttribute('d', 'M1.12,13.5,8.58,9.36a3,3,0,0,0,1.54-2.62V3.5a3,3,0,0,1,3-3h145a3,3,0,0,1,3,' +
            '3v19a3,3,0,0,1-3,3h-145a3,3,0,0,1-3-3V19.45a3,3,0,0,0-1.78-2.74Z')
    path.setAttribute('filter', 'url(#tooltip-shadow)')

    gTitle.appendChild(path)

    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    text.setAttributeNS(null, 'x', '15')
    text.setAttributeNS(null, 'y', '17')
    text.textContent = username
    gTitle.appendChild(text)

    return gTitle
  }

  var x, left, down

  $('.svg-wrapper')
        .mousedown(function (e) {
          e.preventDefault()
          down = true
          x = e.pageX
          left = $(this).scrollLeft()
        })
        .mousemove(function (e) {
          if (down) {
            var newX = e.pageX
            $('.svg-wrapper').scrollLeft(left - newX + x)
          }
        })
    // .bind('DOMMouseScroll mousewheel', function (e) {
    //     e.preventDefault();
    //     left = $(this).scrollLeft();
    //     var delta = e.originalEvent.wheelDelta || (-e.originalEvent.detail * 10);
    //     $('.svg-wrapper').scrollLeft(left - delta);
    // });
  $('body').mouseup(function (e) {
    down = false
  })

  $(window).on('resize', function () {
    var $stage = $('#Stage')
    if (!$stage.length) return

    $stage.closest('.flow-wrapper').remove()
    $('.homepage-animation').addClass('static')
    $('#static-stage').addClass('show')
  })
})
